import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Hotel.scss";
import toast from "react-hot-toast";
import Footer from "../components/Footer";
import Modal from "./Modal";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurantbyId, getMenu } from "../services/restaurants";

import Slider from "../components/Slider";
import { clearState } from "../state/slices/restaurantSlice";

function Hotel() {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const location = useLocation();
  const id = location.pathname.split(":")[1];
  const dispatch = useDispatch();
  const {
    errorMessage,

    menu,
    restaurant,
    isError,
  } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(clearState());
    dispatch(getRestaurantbyId(id));
    dispatch(getMenu(id));
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isError]);
  return (
    <div className="hotel">
      <Navbar />
      <div className="hero">
        <img src={restaurant.img_url} alt="" />
        <h3>{restaurant.username}</h3>
      </div>
      <div className="menu">
        <h5>menu</h5>
      </div>
      <div className="Menu">
        <h4>Menu</h4>
        <ul>
          {menu.map((food) => {
            return (
              <li
                key={food._id}
                onClick={() => {
                  setModalInfo(food);
                  setShowModal(true);
                }}
              >
                <img src={food.img_url} alt="" />
                <div>
                  <h5>{food.name}</h5>
                  <h6>Ksh {food.price}</h6>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <span>
        If you have any food allergies or special dietary requirements, please
        notify the restaurant directly before ordering.
      </span>
      {showModal && <Modal setShowModal={setShowModal} modalInfo={modalInfo} />}
      <Footer />
      <Slider />
    </div>
  );
}

export default Hotel;
