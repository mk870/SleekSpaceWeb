import { createSlice } from "@reduxjs/toolkit";

const theme: string = "dark";

export const themeColorSlice = createSlice({
  name: "theme",
  initialState: {
    value: theme,
  },
  reducers: {
    setThemeColor: (
      state,
      action: {
        payload: string;
        type: string;
      }
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setThemeColor } = themeColorSlice.actions;
export default themeColorSlice.reducer;
