import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
const api_url = process.env.REACT_APP_API_URL;
const getRestaurants = createAsyncThunk(
  "getRestaurants",
  async ({}, thunkAPI) => {
    try {
      const response = await Axios.get(api_url + "restaurant/getRestaurants");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Kindly check your network and try again"
      );
    }
  }
);

const getRestaurantbyId = createAsyncThunk(
  "getRestaurantbyId",
  async (id, thunkAPI) => {
    try {
      const response = await Axios.post(
        `${process.env.REACT_APP_API_URL}restaurant/getRestaurant`,
        { restaurant_id: id }
      );
      const { username, _id, img_url } = response.data;
      return { username, _id, img_url };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Kindly check your network and try again"
      );
    }
  }
);

const getMenu = createAsyncThunk("getMenu", async (id, thunkAPI) => {
  try {
    const response = await Axios.post(
      `${process.env.REACT_APP_API_URL}restaurant/getFood`,
      { restaurant_id: id }
    );

    if (response.data.length === 0) {
      return thunkAPI.rejectWithValue("This restaurant has no menu");
    } else {
      return response.data;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue("Kindly check your network and try again");
  }
});

export { getRestaurants, getRestaurantbyId, getMenu };
