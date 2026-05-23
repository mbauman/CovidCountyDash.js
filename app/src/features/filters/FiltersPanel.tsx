import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Select, { type MultiValue, type StylesConfig } from "react-select";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  requestApplyPopulationWindow,
  requestApplyStateGroup,
  resetFilters,
  setMetricType,
  setNormalizeByPopulation,
  setRollingDays,
  setSelectionAtIndex,
  setUseLogScale,
  setValueMode
} from "./filtersSlice";
import {
  selectCountyOptionsForStates,
  selectRowVisibility,
  selectStateOptions,
  selectValueModeOptions
} from "../../selectors";

const ROW_COUNT = 6;

export function FiltersPanel(): JSX.Element {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const stateOptions = useAppSelector(selectStateOptions);
  const valueModeOptions = useAppSelector(selectValueModeOptions);

  const handleReset = (): void => {
    dispatch(resetFilters());
  };

  return (
    <section aria-label="Controls" style={styles.panel}>
      <div style={styles.controlsRow}>
        <div style={styles.selectionTable}>
          <div style={styles.selectionHead}>
            <span>State</span>
            <span>County</span>
          </div>
          <div>
            {Array.from({ length: ROW_COUNT }, (_, index) => (
              <SelectionRow key={index} rowIndex={index} stateOptions={stateOptions} />
            ))}
          </div>
        </div>

        <div style={styles.optionsCard}>
          <b>Options</b>

          <fieldset style={styles.group}>
            <legend>Type</legend>
            <label>
              <input
                type="radio"
                name="metric-type"
                value="cases"
                checked={filters.metricType === "cases"}
                onChange={() => dispatch(setMetricType("cases"))}
              />
              Cases
            </label>
            <label>
              <input
                type="radio"
                name="metric-type"
                value="deaths"
                checked={filters.metricType === "deaths"}
                onChange={() => dispatch(setMetricType("deaths"))}
              />
              Deaths
            </label>
          </fieldset>

          <fieldset style={styles.group}>
            <legend>Values</legend>
            {valueModeOptions.map((option) => (
              <label key={option.value}>
                <input
                  type="radio"
                  name="value-mode"
                  value={option.value}
                  checked={filters.valueMode === option.value}
                  onChange={() => dispatch(setValueMode(option.value))}
                />
                {option.label}
              </label>
            ))}
          </fieldset>

          {filters.valueMode === "diff" ? (
            <label style={styles.blockLabel}>
              Rolling day average
              <input
                aria-label="Rolling day average"
                type="number"
                min={1}
                max={14}
                value={filters.rollingDays}
                onChange={(event) => {
                  const nextValue = Number(event.target.value);
                  const bounded = Number.isFinite(nextValue) ? Math.max(1, Math.min(14, nextValue)) : 7;
                  dispatch(setRollingDays(bounded));
                }}
              />
            </label>
          ) : null}

          <fieldset style={styles.group}>
            <legend>Display</legend>
            <label>
              <input
                type="checkbox"
                checked={filters.normalizeByPopulation}
                onChange={(event) => dispatch(setNormalizeByPopulation(event.target.checked))}
              />
              Normalize by population
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.useLogScale}
                onChange={(event) => dispatch(setUseLogScale(event.target.checked))}
              />
              Log scale
            </label>
          </fieldset>

          <button type="button" onClick={handleReset}>
            Reset Controls
          </button>
        </div>
      </div>
    </section>
  );
}

interface Option {
  value: number;
  label: string;
}

interface SelectionRowProps {
  rowIndex: number;
  stateOptions: Option[];
}

interface MenuState {
  open: boolean;
  x: number;
  y: number;
}

const CLOSED_MENU: MenuState = {
  open: false,
  x: 0,
  y: 0
};

function suppressSecondaryPress(event: {
  button: number;
  preventDefault: () => void;
  stopPropagation: () => void;
}): void {
  if (event.button === 0) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
}

const multiSelectStyles: StylesConfig<Option, true> = {
  control: (base, state) => ({
    ...base,
    minHeight: "2.35rem",
    borderColor: state.isFocused ? "#5685ad" : "#b8c7d4",
    boxShadow: state.isFocused ? "0 0 0 1px #5685ad" : "none",
    borderRadius: "8px",
    backgroundColor: "#fff"
  }),
  valueContainer: (base) => ({
    ...base,
    gap: "0.2rem"
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#e8f1f9",
    borderRadius: "6px"
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#234058"
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#234058",
    ":hover": {
      backgroundColor: "#cddfee",
      color: "#11293c"
    }
  }),
  menu: (base) => ({
    ...base,
    zIndex: 1100
  })
};

function SelectionRow({ rowIndex, stateOptions }: SelectionRowProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [populationWindow, setPopulationWindow] = useState<[number, number]>([0, 100]);
  const [stateMenu, setStateMenu] = useState<MenuState>(CLOSED_MENU);
  const [countyMenu, setCountyMenu] = useState<MenuState>(CLOSED_MENU);
  const selection = useAppSelector((state) => state.filters.selections[rowIndex]) ?? {
    stateFips: [],
    countyFips: []
  };
  const rowVisible = useAppSelector((state) => selectRowVisibility(state, rowIndex));
  const countyOptions = useMemo(
    () => selectCountyOptionsForStates(selection.stateFips),
    [selection.stateFips]
  );
  const selectedStateOptions = useMemo(
    () => stateOptions.filter((option) => selection.stateFips.includes(option.value)),
    [selection.stateFips, stateOptions]
  );
  const selectedCountyOptions = useMemo(
    () => countyOptions.filter((option) => selection.countyFips.includes(option.value)),
    [countyOptions, selection.countyFips]
  );

  useEffect(() => {
    if (!rowVisible) {
      setStateMenu(CLOSED_MENU);
      setCountyMenu(CLOSED_MENU);
    }
  }, [rowVisible]);

  useEffect(() => {
    if (!stateMenu.open && !countyMenu.open) {
      return;
    }

    const closeMenus = (): void => {
      setStateMenu(CLOSED_MENU);
      setCountyMenu(CLOSED_MENU);
    };

    window.addEventListener("click", closeMenus);
    return () => {
      window.removeEventListener("click", closeMenus);
    };
  }, [stateMenu.open, countyMenu.open]);

  return (
    <div
      data-testid={`selection-row-${rowIndex + 1}`}
      hidden={!rowVisible}
      aria-hidden={!rowVisible}
      style={styles.row}
    >
      <div style={styles.blockLabel}>
        <div
          data-testid={`state-select-${rowIndex + 1}`}
          onMouseDownCapture={suppressSecondaryPress}
          onPointerDownCapture={suppressSecondaryPress}
          onContextMenu={(event) => {
            event.preventDefault();
            setCountyMenu(CLOSED_MENU);
            setStateMenu({
              open: true,
              x: event.clientX,
              y: event.clientY
            });
          }}
        >
          <Select<Option, true>
            isMulti
            isSearchable
            tabSelectsValue={false}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            styles={multiSelectStyles}
            options={stateOptions}
            value={selectedStateOptions}
            placeholder="Select or right click..."
            aria-label={`State row ${rowIndex + 1}`}
            noOptionsMessage={() => "No states found"}
            onChange={(nextSelection: MultiValue<Option>) => {
              const selectedStateFips = nextSelection.map((option) => option.value);
              const nextCountyOptions = selectCountyOptionsForStates(selectedStateFips);
              const filteredCountyFips = selection.countyFips.filter((fips) =>
                nextCountyOptions.some((option) => option.value === fips)
              );

              dispatch(
                setSelectionAtIndex({
                  index: rowIndex,
                  selection: {
                    stateFips: selectedStateFips,
                    countyFips: filteredCountyFips
                  }
                })
              );
            }}
          />
        </div>
      </div>

      <div style={styles.blockLabel}>
        <div
          data-testid={`county-select-${rowIndex + 1}`}
          onMouseDownCapture={suppressSecondaryPress}
          onPointerDownCapture={suppressSecondaryPress}
          onContextMenu={(event) => {
            event.preventDefault();
            setStateMenu(CLOSED_MENU);
            setCountyMenu({
              open: true,
              x: event.clientX,
              y: event.clientY
            });
          }}
        >
          <Select<Option, true>
            isMulti
            isSearchable
            tabSelectsValue={false}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            styles={multiSelectStyles}
            options={countyOptions}
            value={selectedCountyOptions}
            isDisabled={selection.stateFips.length === 0}
            placeholder="Select or right click..."
            aria-label={`County row ${rowIndex + 1}`}
            noOptionsMessage={() => "Select a state first"}
            onChange={(nextSelection: MultiValue<Option>) => {
              const selectedCountyFips = nextSelection.map((option) => option.value);
              dispatch(
                setSelectionAtIndex({
                  index: rowIndex,
                  selection: {
                    ...selection,
                    countyFips: selectedCountyFips
                  }
                })
              );
            }}
          />
        </div>
      </div>

      {stateMenu.open ? (
        <div
          data-testid={`state-menu-${rowIndex + 1}`}
          style={{
            ...styles.contextMenu,
            left: `${stateMenu.x}px`,
            top: `${stateMenu.y}px`
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => {
              dispatch(requestApplyStateGroup({ index: rowIndex, group: "all" }));
              setStateMenu(CLOSED_MENU);
            }}
          >
            All States & Territories
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(requestApplyStateGroup({ index: rowIndex, group: "lower49" }));
              setStateMenu(CLOSED_MENU);
            }}
          >
            Contiguous 48 States + DC
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(requestApplyStateGroup({ index: rowIndex, group: "northeast" }));
              setStateMenu(CLOSED_MENU);
            }}
          >
            Northeast
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(requestApplyStateGroup({ index: rowIndex, group: "midwest" }));
              setStateMenu(CLOSED_MENU);
            }}
          >
            Midwest
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(requestApplyStateGroup({ index: rowIndex, group: "south" }));
              setStateMenu(CLOSED_MENU);
            }}
          >
            South
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(requestApplyStateGroup({ index: rowIndex, group: "west" }));
              setStateMenu(CLOSED_MENU);
            }}
          >
            West
          </button>
        </div>
      ) : null}

      {countyMenu.open ? (
        <div
          data-testid={`county-menu-${rowIndex + 1}`}
          style={{
            ...styles.contextMenu,
            left: `${countyMenu.x}px`,
            top: `${countyMenu.y}px`
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <p style={styles.menuTitle}>Population percentile</p>
          <label style={styles.inlineLabel}>
            Min
            <input
              type="number"
              min={0}
              max={100}
              step={1}
              value={populationWindow[0]}
              onChange={(event) => {
                const value = Number(event.target.value);
                const bounded = Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
                setPopulationWindow([bounded, populationWindow[1]]);
              }}
            />
          </label>
          <label style={styles.inlineLabel}>
            Max
            <input
              type="number"
              min={0}
              max={100}
              step={1}
              value={populationWindow[1]}
              onChange={(event) => {
                const value = Number(event.target.value);
                const bounded = Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 100;
                setPopulationWindow([populationWindow[0], bounded]);
              }}
            />
          </label>
          <button
            type="button"
            onClick={() => {
              dispatch(
                requestApplyPopulationWindow({
                  index: rowIndex,
                  window: populationWindow
                })
              );
              setCountyMenu(CLOSED_MENU);
            }}
          >
            Apply
          </button>
        </div>
      ) : null}

    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  panel: {
    background: "#f8faf2",
    border: "1px solid #dbe8c7",
    borderRadius: "12px",
    padding: "1rem"
  },
  headerRow: {
    marginBottom: "0.65rem"
  },
  header: {
    margin: 0,
    fontSize: "1.2rem"
  },
  controlsRow: {
    display: "grid",
    gridTemplateColumns: "minmax(24rem, 3fr) minmax(15rem, 1fr)",
    gap: "0.9rem",
    alignItems: "start"
  },
  selectionTable: {
    border: "1px solid #d8dfcd",
    borderRadius: "10px",
    background: "#fff"
  },
  selectionHead: {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
    gap: "0.6rem",
    fontWeight: 600,
    padding: "0.6rem 0.75rem",
    borderBottom: "1px solid #d8dfcd",
    background: "#eef4e2"
  },
  optionsCard: {
    border: "1px solid #d8dfcd",
    borderRadius: "10px",
    background: "#fff",
    padding: "0.65rem",
    display: "grid",
    gap: "0.55rem"
  },
  group: {
    display: "grid",
    gap: "0.4rem",
    border: "1px solid #d8dfcd",
    borderRadius: "8px",
    padding: "0.65rem"
  },
  row: {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
    gap: "0.6rem",
    padding: "0.6rem 0.75rem",
    borderTop: "1px solid #d8dfcd",
    background: "#fff"
  },
  inlineLabel: {
    display: "grid",
    gap: "0.2rem"
  },
  blockLabel: {
    display: "grid",
    gap: "0.35rem"
  },
  contextMenu: {
    position: "fixed",
    zIndex: 1000,
    display: "grid",
    gap: "0.35rem",
    padding: "0.6rem",
    borderRadius: "8px",
    border: "1px solid #7f8c98",
    background: "#f7f9fc",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.18)",
    minWidth: "13rem"
  },
  menuTitle: {
    margin: 0,
    fontSize: "0.9rem",
    color: "#233444"
  }
};
