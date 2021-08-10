import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Want to own your own restaurant?
      <a href="https://uber-eats-restaurant.netlify.app" target="_blank">
        yes
      </a>
      <Link to="/">no</Link>
    </div>
  );
}

export default Home;
