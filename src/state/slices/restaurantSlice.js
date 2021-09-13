import { createSlice } from "@reduxjs/toolkit";
import {
  getRestaurantbyId,
  getRestaurants,
  getMenu,
} from "../../services/restaurants";

const initialState = {
  errorMessage: "",
  isFetching: false,
  isSuccess: false,
  restaurants: [],
  menu: [],
  restaurant: {
    img_url: "",
    id: "",
    username: "",
  },
  isError: false,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {
    clearState: (state) => {
      state.errorMessage = "";
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [getRestaurants.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      state.isFetching = false;
      state.restaurants = payload;
    },
    [getRestaurants.pending]: (state) => {
      state.isFetching = true;
    },
    [getRestaurants.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
    [getMenu.pending]: (state) => {
      state.isFetching = true;
    },
    [getMenu.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      state.menu = [];
    },
    [getMenu.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      state.isFetching = false;
      state.menu = payload;
    },
    [getRestaurantbyId.pending]: (state) => {
      state.isFetching = true;
    },
    [getRestaurantbyId.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
    [getRestaurantbyId.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.restaurant.img_url =
        "https://cloudnweb.dev/static/03fed8b457b3d226e576763d8c34f7bf/0f3a1/banner.jpg";
      state.restaurant.username = payload.username;
      state.restaurant.id = payload._id;
    },
  },
});

export const { clearState } = restaurantSlice.actions;
export default restaurantSlice.reducer;
