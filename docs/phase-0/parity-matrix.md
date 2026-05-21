# Parity Matrix (Release 1 Must-Have)

Parity strictness target: functionally equivalent behavior.

| Area | Feature | Current Julia Behavior | R1 Must-Have |
|---|---|---|---|
| Runtime | Version pin | App is run with `julia +1.5` | Yes |
| Runtime | Entrypoint | `bin/main.jl` downloads/preprocesses then serves app | Yes |
| Data | Source fetch | Pulls NYT states + county yearly CSV files | Yes |
| Data | Population enrichment | Uses local `pop2019.csv` for normalization and labels | Yes |
| Data | Missing FIPS handling | Injects special FIPS for NYC/KCMO/Joplin and Unknown county keys | Yes |
| Layout | Page title/header | Shows title and source links with loaded-through date text | Yes |
| Layout | Selection rows | Up to 6 state/county selector rows | Yes |
| Layout | Progressive rows | Rows 2..6 hidden until prior rows have input | Yes |
| Controls | State selector | Multi-select state dropdown per row | Yes |
| Controls | County selector | Multi-select county dropdown per row, dependent on state selection | Yes |
| Controls | Type radio | Cases vs deaths | Yes |
| Controls | Values radio | Cumulative vs daily mode | Yes |
| Controls | Rolling input | Numeric rolling mean (1..14), visible only for daily mode | Yes |
| Controls | Checklist flags | Population normalization and log-y toggle | Yes |
| Interaction | Right-click state menu | Preset state groups (all/lower49/northeast/midwest/south/west) | Yes |
| Interaction | Right-click county menu | Population percentile slider + apply button | Yes |
| Plot | Chart type | Plotly line chart with one trace per selected geography | Yes |
| Plot | Axis/title adaptation | Dynamic title and y-axis labels from mode/type/roll | Yes |
| Plot | Hover content | Includes date, value, type, and population-normalized context | Yes |
| Plot | Empty selection behavior | Renders placeholder NaN line on empty data | Yes |
| Caveats | Footnotes | 5 conditional caveat notes shown by selected counties | Yes |
| State updates | Dynamic value labels | "New daily cases/deaths" text updates when type changes | Yes |
| UX | Smoothing visibility | Hidden in cumulative mode, shown in daily mode | Yes |
| Scope guard | Out of scope for R1 | Visual redesign or architecture changes beyond parity | No |

## Notes
- Functional parity means matching interactions, outputs, and control semantics, not pixel-identical rendering.
- Known runtime console race (listener bootstrap) should be tracked, but does not block basic interaction in current app.
