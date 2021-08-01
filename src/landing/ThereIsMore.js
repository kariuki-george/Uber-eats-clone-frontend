import React from "react";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import "./ThereIsMore.scss";

function ThereIsMore() {
  return (
    <div className="thereIsMore">
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/0c6de4f0b3884eb89b28a29ecbc10d59.svg"
        alt=""
      />
      <span>There's more to love in the app</span>
      <button>
        <AppleIcon /> iphone
      </button>
      <button>
        <AndroidIcon /> Android
      </button>
    </div>
  );
}

export default ThereIsMore;
