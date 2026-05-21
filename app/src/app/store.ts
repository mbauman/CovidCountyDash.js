import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../features/filters/filtersSlice";
import uiReducer, { requestFigureRefresh } from "../features/ui/uiSlice";
import { createCallbackFlowListener, type CallbackFlowDependencies } from "./callbackFlow";

interface CreateAppStoreOptions {
  callbackFlowDependencies?: CallbackFlowDependencies;
  enableCallbackFlow?: boolean;
}

export function createAppStore(options: CreateAppStoreOptions = {}) {
  const { callbackFlowDependencies, enableCallbackFlow = true } = options;

  const callbackFlowListener = createCallbackFlowListener(callbackFlowDependencies);
  const store = configureStore({
    reducer: {
      filters: filtersReducer,
      ui: uiReducer
    },
    middleware: (getDefaultMiddleware) => {
      const middleware = getDefaultMiddleware();
      return enableCallbackFlow ? middleware.prepend(callbackFlowListener.middleware) : middleware;
    }
  });

  if (enableCallbackFlow) {
    store.dispatch(requestFigureRefresh());
  }

  return store;
}

export const store = createAppStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;