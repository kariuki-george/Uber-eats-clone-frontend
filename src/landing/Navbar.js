import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideSlide, showSlide } from "../state/slices/sliderSlice";

function Navbar() {
  const { show } = useSelector((state) => state.slider);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCart = () => {};
  const handleSlider = () => {
    show ? dispatch(hideSlide()) : dispatch(showSlide());
  };
  const handleLogin = () => {
    history.push("/login");
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

      <div className="center">
        <form action="">
          <input type="text" placeholder="Enter delivery address" />
        </form>
      </div>

      <div className="left">
        <button onClick={handleLogin}>sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
