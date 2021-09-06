import { createSlice } from "@reduxjs/toolkit";
import { addOrder } from "../../services/orders";

const initialState = {
  errorMessage: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearState: (state) => {
      state.errorMessage = "";
      state.isError = false;
      state.isSuccess = false;
    },
    createOrder: (state, { payload }) => {
      state.orders.push(payload);
    },
    addAmount: (state, { payload }) => {
      state.orders.forEach(order => {
        if (order._id === payload.id) {
          order.food_amount = payload.amount
        }

      })
    }
  },
  extraReducers: {
    [addOrder.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.errorMessage = payload;
    },
    [addOrder.pending]: (state) => {
      state.isFetching(true);
    },
    [addOrder.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
  },
});

export const { clearState, createOrder,addAmount } = ordersSlice.actions;

export default ordersSlice.reducer;
