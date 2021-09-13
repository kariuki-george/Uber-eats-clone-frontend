import user from "./authReducer";
import { combineReducers } from "@reduxjs/toolkit";
import theme from "./themeReducer";
import slider from "./sliderSlice";
import restaurant from "./restaurantSlice";
import orders from "./ordersSlice";


const reducer = combineReducers({
  user,
  theme,
  slider,
  restaurant,
  orders,

});
export default reducer;
