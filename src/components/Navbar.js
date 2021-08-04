import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        {" "}
        <span>
          <MenuIcon />
        </span>
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
          alt=""
        />
      </div>

      <div className="center">
        <form action="">
          <input type="text" placeholder='Enter delivery address'/>
        </form>
      </div>

      <div className="left">
        <button>sign In</button>
      </div>
    </div>
  );
}

export default Navbar;