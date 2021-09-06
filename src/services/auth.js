import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const register = createAsyncThunk("user/register", async (user, thunkAPI) => {
  try {
    const response = await Axios.post(
      process.env.REACT_APP_API_URL + "user/register",
      user
    );

    if (response.data === "hello") {
      return "Account created Successfully";
    } else {
      const { email } = response.data;
      console.log(email);
      return (thunkAPI.rejectWithValue = `${email} is already taken`);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(
      "Check your internet connection and try again"
    );
  }
});

const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    const response = await Axios.post(
      process.env.REACT_APP_API_URL + "user/login",
      user
    );

    if (response.data === "Wrong email or password") {
      return thunkAPI.rejectWithValue("Wrong email or password");
    }
    if (response.data === "User not found") {
      return thunkAPI.rejectWithValue("User not found");
    } else {
      const user = response.data;

      localStorage.setItem("user", JSON.stringify(user));

      return user;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(
      "Check your internet connection and try again"
    );
  }
});

const logout = createAsyncThunk(
  "logout",
  async () => await localStorage.removeItem("user")
);

export { register, login, logout };
