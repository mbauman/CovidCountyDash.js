import { useEffect, useMemo, useState, type CSSProperties } from "react";
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
  selectDateRange,
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
  const [dateStart, dateEnd] = useAppSelector(selectDateRange);

  const handleReset = (): void => {
    dispatch(resetFilters());
  };

  return (
    <section aria-label="Controls" style={styles.panel}>
      <div style={styles.headerRow}>
        <h2 style={styles.header}>Filters</h2>
        <button type="button" onClick={handleReset}>
          Reset Controls
        </button>
      </div>

      <div style={styles.groupRow}>
        <label style={styles.blockLabel}>
          Date Start
          <input type="date" value={dateStart ?? ""} disabled readOnly />
        </label>
        <label style={styles.blockLabel}>
          Date End
          <input type="date" value={dateEnd ?? ""} disabled readOnly />
        </label>
      </div>

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

      <div>
        {Array.from({ length: ROW_COUNT }, (_, index) => (
          <SelectionRow key={index} rowIndex={index} stateOptions={stateOptions} />
        ))}
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
      <h3 style={styles.rowTitle}>Selection Row {rowIndex + 1}</h3>

      <div style={styles.groupButtonsRow}>
        <span>State groups</span>
        <button
          type="button"
          onClick={() => dispatch(requestApplyStateGroup({ index: rowIndex, group: "all" }))}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => dispatch(requestApplyStateGroup({ index: rowIndex, group: "lower49" }))}
        >
          Lower 49
        </button>
        <button
          type="button"
          onClick={() => dispatch(requestApplyStateGroup({ index: rowIndex, group: "northeast" }))}
        >
          Northeast
        </button>
        <button
          type="button"
          onClick={() => dispatch(requestApplyStateGroup({ index: rowIndex, group: "midwest" }))}
        >
          Midwest
        </button>
        <button
          type="button"
          onClick={() => dispatch(requestApplyStateGroup({ index: rowIndex, group: "south" }))}
        >
          South
        </button>
        <button
          type="button"
          onClick={() => dispatch(requestApplyStateGroup({ index: rowIndex, group: "west" }))}
        >
          West
        </button>
      </div>

      <label style={styles.blockLabel}>
        State
        <select
          aria-label={`State row ${rowIndex + 1}`}
          data-testid={`state-select-${rowIndex + 1}`}
          multiple
          value={selection.stateFips.map(String)}
          onContextMenu={(event) => {
            event.preventDefault();
            setCountyMenu(CLOSED_MENU);
            setStateMenu({
              open: true,
              x: event.clientX,
              y: event.clientY
            });
          }}
          onChange={(event) => {
            const selectedStateFips = [...event.target.selectedOptions].map((option) => Number(option.value));
            const filteredCountyFips = selection.countyFips.filter((fips) =>
              countyOptions.some((option) => option.value === fips)
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
        >
          {stateOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label style={styles.blockLabel}>
        County
        <select
          aria-label={`County row ${rowIndex + 1}`}
          multiple
          value={selection.countyFips.map(String)}
          disabled={selection.stateFips.length === 0}
          onContextMenu={(event) => {
            event.preventDefault();
            setStateMenu(CLOSED_MENU);
            setCountyMenu({
              open: true,
              x: event.clientX,
              y: event.clientY
            });
          }}
          onChange={(event) => {
            const selectedCountyFips = [...event.target.selectedOptions].map((option) => Number(option.value));
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
        >
          {countyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

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

      <fieldset style={styles.populationWindow}>
        <legend>Population percentile window</legend>
        <div style={styles.populationInputs}>
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
            onClick={() =>
              dispatch(
                requestApplyPopulationWindow({
                  index: rowIndex,
                  window: populationWindow
                })
              )
            }
            disabled={selection.stateFips.length === 0}
          >
            Apply Population Window
          </button>
        </div>
      </fieldset>
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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem"
  },
  header: {
    margin: 0,
    fontSize: "1.2rem"
  },
  groupRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
    gap: "0.75rem",
    marginTop: "0.8rem"
  },
  group: {
    display: "grid",
    gap: "0.4rem",
    marginTop: "0.8rem",
    border: "1px solid #d8dfcd",
    borderRadius: "8px",
    padding: "0.65rem"
  },
  row: {
    marginTop: "0.8rem",
    borderTop: "1px solid #d8dfcd",
    paddingTop: "0.8rem"
  },
  rowTitle: {
    margin: "0 0 0.4rem",
    fontSize: "1rem"
  },
  groupButtonsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.35rem",
    alignItems: "center",
    marginBottom: "0.6rem"
  },
  populationWindow: {
    marginTop: "0.55rem",
    border: "1px solid #d8dfcd",
    borderRadius: "8px",
    padding: "0.55rem"
  },
  populationInputs: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    alignItems: "end"
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
