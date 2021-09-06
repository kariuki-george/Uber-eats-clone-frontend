import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideSlide, showSlide } from "../state/slices/sliderSlice";

function Navbar() {
  const { show } = useSelector((state) => state.slider);
  const history = useHistory();
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  const handleCart = () => {
    history.push("/checkout");
  };
  const handleSlider = () => {
    show ? dispatch(hideSlide()) : dispatch(showSlide());
  };
  return (
    <div className="navbar">
      <div className="left">
        <span onClick={handleSlider}>
          <MenuIcon />
        </span>

        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
          alt=""
        />
      </div>
      <div>
        <h5>Your Location. Now</h5>
      </div>

      <div className="center">
        <input type="text" placeholder="What are you craving?" />
      </div>

      <div className="left">
        <button onClick={handleCart}>Cart {orders.length}</button>
      </div>
    </div>
  );
}

export default Navbar;
