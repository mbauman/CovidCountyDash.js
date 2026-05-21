import "@testing-library/jest-dom";
import { createElement } from "react";
import { vi } from "vitest";

vi.mock("react-plotly.js", () => ({
	default: () => createElement("div", { "data-testid": "plotly-mock" })
}));