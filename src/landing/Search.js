import React from "react";
import { Link } from "react-router-dom";
import "./Search.scss";
// import LocationOnIcon from "@material-ui/icons/LocationOn";

function Search() {
  return (
    <div className="search">
      <div className="image">
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f54fdfb464db5da7c42e62c735bdf8f1.svg"
          alt=""
        />
        {/* <img src="" alt="" /> */}
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/bab80ef67bbbc99f2b7d45cfc395eb1b.svg"
          alt=""
        />
      </div>
      <div className="details">
        <span>Order food to your door</span>
        <form action="">
          <input type="text" placeholder={` Enter delivery address`} />
          <select name="" id="">
            <option value="">Deliver now</option>
            <option value="">Schedule for later</option>
          </select>
          <button>Find Food</button>
        </form>
        <h6>
          <Link>Sign In</Link> for your recent addresses
        </h6>
      </div>
    </div>
  );
}

export default Search;
