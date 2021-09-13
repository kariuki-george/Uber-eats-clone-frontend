import React, { useEffect, useState } from "react";
import "./LeftSection.scss";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

function LeftSection({ orders, setHotel }) {
  const { cart } = useSelector((state) => state.user.userData);

  const [checkedHotel, setCheckedHotel] = useState("");
  const [checked, setChecked] = useState(false);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const list = [];
    cart.forEach((food) => list.push(food.restaurant_name));
    setHotels([...new Set(list)]);
  }, []);

  useEffect(() => {
    setHotel(checkedHotel);
  }, [checked]);

  return (
    <div className="leftSection">
      <Navbar />

      {checked || <h2>Choose where to order from</h2>}

      <section>
        {checked ? (
          <li>
            <h3>{checkedHotel} </h3>

            <input
              type="checkbox"
              value={true}
              onChange={() => {
                setCheckedHotel("");
                setChecked(!checked);
              }}
            />
          </li>
        ) : (
          hotels.map((hotel) => {
            return (
              <li key={hotel}>
                <h4>{hotel} </h4>

                <input
                  type="checkbox"
                  name={hotel}
                  onChange={() => {
                    setCheckedHotel(hotel);
                    setChecked(!checked);
                  }}
                />
              </li>
            );
          })
        )}
      </section>

      <div className="map">map</div>
      <div className="location">
        <div>
          <h5>Kinoo</h5>
          <h6>Kikuyu</h6>
        </div>
        <div>
          <h5>Meet at door</h5>
          <h6>Add delivery instructions</h6>
        </div>
      </div>
      <div className="items">
        <ul>
          {orders.map((order) => {
            return (
              <li>
                <div>
                  <h5>{order.food_amount}</h5>
                  <h4>{order.food_name}</h4>
                </div>
                <div>
                  <h5>{order.food_amount * order.food_price}</h5>
                </div>
                {orders.length > 1 && (
                  <div>
                    <input type="checkbox" name="" id="" />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <input type="text" placeholder="Add a note for the store" />
    </div>
  );
}

export default LeftSection;
