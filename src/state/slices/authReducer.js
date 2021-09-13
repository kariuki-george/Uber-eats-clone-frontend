import { login, logout, register } from "../../services/auth";
import addToCart from "../../services/cart";
import { createSlice } from "@reduxjs/toolkit";
let userData = JSON.parse(localStorage.getItem("user"));
let cart = JSON.parse(localStorage.getItem("cart"));

if (cart) {
  userData.cart = cart;
}

const initialState = userData
  ? { isLoggedIn: true, userData }
  : {
      isLoggedIn: false,
      isFetching: false,
      isSuccess: false,
      isError: false,
      errorMessage: "",
      userData: {
        username: "",
        email: "",
        cart: cart ? cart : [],
      },
    };

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [login.rejected]: (state, { payload }) => {
      state.isError = true;
      state.errorMessage = payload;
      state.isFetching = false;
    },
    [login.fulfilled]: (state, action) => {
      state.userData = action.payload.user;
      state.userData.cart = action.payload.cart;
      state.isLoggedIn = true;
      state.isSuccess = true;
      state.isFetching = false;
    },
    [login.pending]: (state, action) => {
      state.isFetching = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;

      state.errorMessage = payload;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.errorMessage = payload;
    },
    [register.pending]: (state) => {
      state.isFetching = true;
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
    },
    [addToCart.rejected]: (state, { payload }) => {
      state.isError = true;
      state.errorMessage = payload;
      state.isFetching = false;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.userData.cart = action.payload;
      state.isLoggedIn = true;
      state.isSuccess = true;
      state.isFetching = false;
    },
    [addToCart.pending]: (state, action) => {
      state.isFetching = true;
    },
  },
});

export const { clearState } = userSlice.actions;
const user = userSlice.reducer;
export default user;
