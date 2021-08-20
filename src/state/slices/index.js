import user from "./authReducer";
import { combineReducers } from "@reduxjs/toolkit";
import theme from "./themeReducer";
import slider from "./sliderSlice";
import restaurant from "./restaurantSlice";

const reducer = combineReducers({ user, theme, slider, restaurant });
export default reducer;
