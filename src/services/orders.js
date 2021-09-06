import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const url = process.env.REACT_APP_API_URL;

const addOrder = createAsyncThunk("addOrder", async (order, thunkAPI) => {
  try {
    const response = await Axios.post(url + "/restaurant/addOrder", order);

    return "Added successfully";
  } catch (error) {
    return thunkAPI.rejectWithValue("Check your network and try again");
  }
});

export { addOrder };
