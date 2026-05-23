import * as PlotlyModule from "plotly.js/lib/core";
import * as scatterModule from "plotly.js/lib/scatter";

const Plotly = ("default" in PlotlyModule ? PlotlyModule.default : PlotlyModule) as unknown as {
	register: (modules: unknown[]) => void;
};
const scatter = ("default" in scatterModule ? scatterModule.default : scatterModule) as unknown;

Plotly.register([scatter]);

export default Plotly;
