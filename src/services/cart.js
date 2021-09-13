import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const addToCart = createAsyncThunk(
  "/user/addToCart",
  async (data, thunkAPI) => {
    try {
      const response = await Axios.post(
        process.env.REACT_APP_API_URL + "user/addToCart",
        data
      );
      if (response.data === "Server error") {
        thunkAPI.rejectWithValue("Server error. Please try again");
      }
      localStorage.setItem("cart", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Check your network and try again");
    }
  }
);

export default addToCart;
