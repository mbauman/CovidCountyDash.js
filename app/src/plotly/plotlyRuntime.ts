import Plotly from "plotly.js/lib/core";
import scatter from "plotly.js/lib/scatter";

(Plotly as never as { register: (modules: unknown[]) => void }).register([scatter]);

export default Plotly;
