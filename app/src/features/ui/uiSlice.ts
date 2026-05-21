import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UiState } from "../../domain/models";

const initialState: UiState = {
  isLoading: false,
  lastError: null
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setLastError(state, action: PayloadAction<string | null>) {
      state.lastError = action.payload;
    }
  }
});

export const { setIsLoading, setLastError } = uiSlice.actions;
export default uiSlice.reducer;