import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiConfiguration } from "../services/configureStore";
export const store = configureStore({
    reducer: {
     
      [apiConfiguration.reducerPath]: apiConfiguration.reducer,

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(apiConfiguration.middleware)
  });
  
  setupListeners(store.dispatch);
  