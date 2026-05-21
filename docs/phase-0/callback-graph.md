# Callback Graph

## Nodes
- Inputs are Dash component properties (including generated controls per row index `n=1..6`).
- Outputs are Dash component properties updated by callbacks.

## Dependency Edges
1. `jsloader.n_intervals` -> `jsloader.disabled`
- Side effect: injects context-menu event listeners for each state/county input and global click-to-close behavior.

2. `{all,lower49,northeast,midwest,south,west}-n.n_clicks` -> `state-n.value`
- Chooses a predefined state group.

3. `{popslider-n.value, apply-pop-n.n_clicks, county-n.options}` -> `county-n.value`
- Filters county selection to percentile window when apply is clicked.

4. `{state-n.value, state-(n-1).value}` -> `scrow-n.style` for `n>=2`
- Progressive row reveal/hide behavior.

5. `state-n.value` -> `county-n.options`
- Populates county options for selected state(s).

6. `{county-1.value ... county-6.value}` -> `footnote{i}.style` for `i in 1..5`
- Shows/hides caveat notes based on selected county labels.

7. `{values.value, type.value, roll.value, checkopts.value, state-1.value, county-1.value, ..., state-6.value, county-6.value}` -> `theplot.figure`
- Central figure generation callback (`plotit`).

8. `type.value` -> `values.options`
- Dynamic radio label text: "New daily cases" or "New daily deaths".

9. `values.value` -> `smoothing_selector.style`
- Shows rolling-day control only in daily mode.

## Mermaid View
```mermaid
flowchart TD
  A[jsloader.n_intervals] --> B[jsloader.disabled]

  G1[group buttons n_clicks] --> S[state-n.value]
  S --> CO[county-n.options]
  P1[popslider/apply/options] --> CV[county-n.value]

  S --> R[scrow-n.style n>=2]
  SP[state-(n-1).value] --> R

  CAll[county-1..6.value] --> F1[footnote1.style]
  CAll --> F2[footnote2.style]
  CAll --> F3[footnote3.style]
  CAll --> F4[footnote4.style]
  CAll --> F5[footnote5.style]

  V[values.value] --> FIG[theplot.figure]
  T[type.value] --> FIG
  ROLL[roll.value] --> FIG
  CK[checkopts.value] --> FIG
  SEL[state/county rows 1..6] --> FIG

  T --> VO[values.options]
  V --> SS[smoothing_selector.style]
```
