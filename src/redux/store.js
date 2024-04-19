import { configureStore } from "@reduxjs/toolkit";
import { destinationAPI } from "../api/DestinationApi";
import { randomDestinationAPI } from "../api/RandomDestinationApi";

export const store = configureStore({
  reducer: {
    [destinationAPI.reducerPath]: destinationAPI.reducer,
    [randomDestinationAPI.reducerPath]: randomDestinationAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      destinationAPI.middleware,
      randomDestinationAPI.middleware
    );
  },
});
