import { describe, expect, it } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "../App";
import filtersReducer from "../features/filters/filtersSlice";
import uiReducer from "../features/ui/uiSlice";

function renderApp(): void {
  const testStore = configureStore({
    reducer: {
      filters: filtersReducer,
      ui: uiReducer
    }
  });

  render(
    <Provider store={testStore}>
      <App />
    </Provider>
  );
}

describe("controls layout behavior", () => {
  it("shows daily label for cases by default", () => {
    renderApp();

    expect(screen.getByLabelText("New daily cases")).toBeChecked();
    expect(screen.getByLabelText("Normalize by population")).toBeChecked();
    expect(screen.getByLabelText("Log scale")).not.toBeChecked();
    expect(screen.queryByLabelText("Data caveats")).not.toBeInTheDocument();
  });

  it("updates daily value label when switching metric type", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByLabelText("Deaths"));

    expect(screen.getByLabelText("New daily deaths")).toBeInTheDocument();
    expect(screen.queryByLabelText("New daily cases")).not.toBeInTheDocument();
  });

  it("hides rolling control in cumulative mode", async () => {
    const user = userEvent.setup();
    renderApp();

    expect(screen.getByLabelText("Rolling day average")).toBeInTheDocument();
    await user.click(screen.getByLabelText("Cumulative totals"));
    expect(screen.queryByLabelText("Rolling day average")).not.toBeInTheDocument();
  });

  it("reveals row 2 after selecting row 1 state and re-hides on reset", async () => {
    const user = userEvent.setup();
    renderApp();

    expect(screen.getByTestId("selection-row-2")).toHaveAttribute("hidden");

    await user.click(screen.getByLabelText("State row 1"));
    await user.click(screen.getByText("State 10"));
    expect(screen.getByTestId("selection-row-2")).not.toHaveAttribute("hidden");

    await user.click(screen.getByRole("button", { name: "Reset Controls" }));
    expect(screen.getByTestId("selection-row-2")).toHaveAttribute("hidden");
  });

  it("opens and closes right-click state and county menus", async () => {
    const user = userEvent.setup();
    renderApp();

    const stateSelect = screen.getByTestId("state-select-1");
    fireEvent.pointerDown(stateSelect, { button: 2, pointerType: "mouse" });
    fireEvent.mouseDown(stateSelect, { button: 2 });
    fireEvent.contextMenu(stateSelect);
    expect(screen.getByTestId("state-menu-1")).toBeInTheDocument();
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "All States & Territories" }));
    expect(screen.queryByTestId("state-menu-1")).not.toBeInTheDocument();

    const countySelect = screen.getByTestId("county-select-1");
    fireEvent.pointerDown(countySelect, { button: 2, pointerType: "mouse" });
    fireEvent.mouseDown(countySelect, { button: 2 });
    fireEvent.contextMenu(countySelect);
    expect(screen.getByTestId("county-menu-1")).toBeInTheDocument();
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Apply" }));
    expect(screen.queryByTestId("county-menu-1")).not.toBeInTheDocument();
  });
});
