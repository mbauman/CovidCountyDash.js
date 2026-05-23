import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { App } from "../App";

describe("app shell", () => {
  it("renders dashboard title and core regions", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByRole("heading", { name: "Covid County Dash" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Controls" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Trend chart" })).toBeInTheDocument();
  });
});
