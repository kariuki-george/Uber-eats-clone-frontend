import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Homebar.scss";
import Filter from "./Filter";

function Homebar({ restaurants }) {
  const history = useHistory();
  const [list, setList] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setList(restaurants);
  }, [restaurants]);
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const handleRouting = (id) => {
    history.push(`/hotel:${id}`);
  };

  return (
    <div className="homebar" style={{ width: `${width - 300}px` }}>
      <Filter />
      <ul>
        {list.map((restaurant) => {
          return (
            <li
              onClick={() => handleRouting(restaurant._id)}
              key={restaurant._id}
            >
              <img
                src="https://cloudnweb.dev/static/03fed8b457b3d226e576763d8c34f7bf/0f3a1/banner.jpg"
                alt=""
              />
              <h3>{restaurant.username}</h3>
              <h5>KES100</h5>
            </li>
          );
        })}
      </ul>

      <button>Show more</button>
    </div>
  );
}

export default Homebar;
