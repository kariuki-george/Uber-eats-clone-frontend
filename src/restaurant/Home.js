import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>Want to own your own restaurant?</h3>

      <a href="https://uber-eats-restaurant.netlify.app" target="_blank">
        yes
      </a>
      <Link to="/">no</Link>
    </div>
  );
}

export default Home;
