import React, { useState, useEffect } from "react";
import "./Slider.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setDark, setLight } from "../state/slices/themeReducer";
import { hideSlide } from "../state/slices/sliderSlice";
import { logout } from "../services/auth";

function Slider() {
  const { theme } = useSelector((state) => state.theme);
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const { show } = useSelector((state) => state.slider);
  const [width, setWidth] = useState(-300);
  const dispatch = useDispatch();
  const handleTheme = () => {
    if (theme === ".light") {
      localStorage.setItem("theme", ".dark");
      dispatch(setDark());
    } else {
      localStorage.setItem("theme", ".light");
      dispatch(setLight());
    }
  };
  const handleLogOut = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(hideSlide());
  }, []);
  useEffect(() => {
    show ? setWidth(0) : setWidth(-300);
  }, [show]);
  return (
    <div className="slider" style={{ transform: `translateX(${width}px)` }}>
      {isLoggedIn && (
        <div className="top">
          <div className="avatar">
            <img src="" alt="" />
            <div>
              <h4> Hi {user.username}</h4>
              <Link>View account</Link>
            </div>
          </div>
          <Link to="/checkout">Orders</Link>
          <h5>Favourites</h5>
          <h5>Wallet</h5>
          <h5>Help</h5>
          <h5>Promotions</h5>
          <h5>Invite Friends</h5>
          <button onClick={handleTheme}>
            {theme === ".light" ? "dark" : "light"}
          </button>
          <button onClick={handleLogOut}>Sign out</button>
        </div>
      )}

      <div className="bottom">
        <h5>Create a business account</h5>
        <Link to="/restaurant">Add your restaurant</Link>
        <h5>Sign up to deliver</h5>
        <div>
          <img
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ca4164e7b390d179fecfc01e04ce5a80.svg"
            alt=""
          />
          <p>There's more to love on the app</p>
        </div>
        <div>
          <a
            href="https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277"
            target="_blank"
          >
            iphone
          </a>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.ubercab.eats"
          >
            Android
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slider;
