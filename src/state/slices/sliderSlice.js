import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: "false",
};

const sliderSlice = createSlice({
  name: "slider",
  initialState: initialState,
  reducers: {
    showSlide: (state) => {
      state.show = true;
    },
    hideSlide: (state) => {
      state.show = false;
    },
  },
});

export const { showSlide, hideSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
