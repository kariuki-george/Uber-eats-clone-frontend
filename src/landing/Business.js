import React from "react";
import { Link } from "react-router-dom";
import "./Business.scss";
function Business() {
  return (
    <div className="business">
      <div className="feed">
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cef389b486cb4827e6ba007f26ebddab.svg"
          alt=""
        />
        <span>Feed your employees</span>
        <Link>Create a business account</Link>
      </div>
      <div className="restaurant">
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7f56b34e6c253cb54a35bacf5150dde9.svg"
          alt=""
        />
        <span>Your restaurant, delivered</span>
        <Link>Add your restaurant</Link>
      </div>
      <div className="deliver">
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc1d039.svg"
          alt=""
        />
        <span>Deliver with Uber Eats</span>
        <Link>Sign Up to deliver</Link>
      </div>
    </div>
  );
}

export default Business;
