import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../services/restaurants";
import { clearState } from "../state/slices/restaurantSlice";
import Sidebar from "./Sidebar";
import Mainbar from "./Homebar";
import "./Home.scss";
import toast from "react-hot-toast";

function Home() {
  const { restaurants, errorMessage, isError } = useSelector(
    (state) => state.restaurant
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearState());
    dispatch(getRestaurants({}));
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isError]);
  return (
    <div className="home">
      <Navbar />
      <div>
        <Sidebar />

        <Mainbar restaurants={restaurants} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
