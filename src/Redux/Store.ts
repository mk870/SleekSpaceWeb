import { configureStore } from "@reduxjs/toolkit";
import { screenSizeSlice } from "./Slices/ScreenSizeSlice";
import { themeColorSlice } from "./Slices/ThemeSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeSlice.reducer,
    themeColor: themeColorSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {
        warnAfter: 100,
        ignoredPaths: ["largeData"],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
