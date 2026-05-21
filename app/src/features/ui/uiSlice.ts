import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PlotlyFigure } from "../../plotly/adapters";

export type UiTransitionStage = "start" | "compute" | "commit" | "stale" | "error";

export interface UiTransitionEvent {
  requestId: number;
  trigger: string;
  stage: UiTransitionStage;
  timestamp: number;
  selectedFipsCount?: number;
  traceCount?: number;
  message?: string;
  reason?: string;
}

interface UiState {
  isLoading: false,
  lastError: null
    | string;
  figure?: PlotlyFigure;
  activeRequestId?: number;
  committedRequestId?: number;
  transitionLog?: UiTransitionEvent[];
}

const initialState: UiState = {
  isLoading: false,
  lastError: null,
  activeRequestId: 0,
  committedRequestId: 0,
  transitionLog: []
};

function appendTransition(state: UiState, event: UiTransitionEvent): void {
  const current = state.transitionLog ?? [];
  state.transitionLog = [...current, event].slice(-100);
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    requestFigureRefresh(state) {
      state.lastError = null;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setLastError(state, action: PayloadAction<string | null>) {
      state.lastError = action.payload;
    },
    callbackTransitionStarted(
      state,
      action: PayloadAction<{ requestId: number; trigger: string; selectedFipsCount: number }>
    ) {
      const { requestId, trigger, selectedFipsCount } = action.payload;
      state.isLoading = true;
      state.lastError = null;
      state.activeRequestId = requestId;
      appendTransition(state, {
        requestId,
        trigger,
        selectedFipsCount,
        stage: "start",
        timestamp: Date.now()
      });
    },
    callbackTransitionComputed(
      state,
      action: PayloadAction<{ requestId: number; trigger: string; traceCount: number }>
    ) {
      const { requestId, trigger, traceCount } = action.payload;
      appendTransition(state, {
        requestId,
        trigger,
        traceCount,
        stage: "compute",
        timestamp: Date.now()
      });
    },
    callbackTransitionCommitted(
      state,
      action: PayloadAction<{ requestId: number; trigger: string; figure: PlotlyFigure; traceCount: number }>
    ) {
      const { requestId, trigger, figure, traceCount } = action.payload;
      if ((state.activeRequestId ?? 0) !== requestId) {
        return;
      }

      state.isLoading = false;
      state.figure = figure;
      state.committedRequestId = requestId;
      appendTransition(state, {
        requestId,
        trigger,
        traceCount,
        stage: "commit",
        timestamp: Date.now()
      });
    },
    callbackTransitionIgnored(
      state,
      action: PayloadAction<{ requestId: number; trigger: string; reason: string }>
    ) {
      const { requestId, trigger, reason } = action.payload;
      appendTransition(state, {
        requestId,
        trigger,
        reason,
        stage: "stale",
        timestamp: Date.now()
      });
    },
    callbackTransitionFailed(
      state,
      action: PayloadAction<{ requestId: number; trigger: string; message: string }>
    ) {
      const { requestId, trigger, message } = action.payload;
      if ((state.activeRequestId ?? 0) !== requestId) {
        return;
      }

      state.isLoading = false;
      state.lastError = message;
      appendTransition(state, {
        requestId,
        trigger,
        message,
        stage: "error",
        timestamp: Date.now()
      });
    }
  }
});

export const {
  requestFigureRefresh,
  setIsLoading,
  setLastError,
  callbackTransitionStarted,
  callbackTransitionComputed,
  callbackTransitionCommitted,
  callbackTransitionIgnored,
  callbackTransitionFailed
} = uiSlice.actions;
export default uiSlice.reducer;