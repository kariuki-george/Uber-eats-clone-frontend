import React, { useState, useEffect } from "react";
import "./Backdrop.scss";
import { hideSlide } from "../state/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";

function Backdrop() {
  const { show } = useSelector((state) => state.slider);
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    show ? setDisplay(true) : setDisplay(false);
  }, [show]);
  const handleSlider = () => {
    dispatch(hideSlide());
  };
  return display && <div className="backdrop" onClick={handleSlider}></div>;
}

export default Backdrop;
