import React, { useState, useEffect } from "react";
import "./Modal.scss";
import CloseIcon from "@material-ui/icons/Close";

import { useSelector, useDispatch } from "react-redux";
import { createOrder, addAmount } from "../state/slices/ordersSlice";

function Modal({ setShowModal, modalInfo }) {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (orders.length === 0) {
      return setNum(0);
    }
    const present = orders.find((order) => order._id === modalInfo._id);
    if (present) {
      orders.forEach((order) => {
        if (order._id === modalInfo._id) {
          return setNum(order.food_amount);
        }
      });
    } else {
      return setNum(0);
    }
  }, []);

  const handleOrder = (arg) => {
    if (arg === "subtract") {
      if (num === 0) {
        return num;
      }
      setNum((num) => (num -= 1));
    } else {
      setNum((num) => (num += 1));
    }
  };
  const handleCreateOrder = () => {
    if (num === 0) {
      setShowModal(false);
      return;
    }

    if (orders.length === 0) {
      dispatch(createOrder({ ...modalInfo, food_amount: num }));
      setShowModal(false);
      return;
    }
    const present = orders.find((order) => order._id === modalInfo._id);
    if (present) {
      dispatch(
        addAmount({
          id: modalInfo._id,
          amount: num,
        })
      );
      setShowModal(false);
      return;
    } else {
      dispatch(createOrder({ ...modalInfo, food_amount: num }));
      setShowModal(false);
    }
  };

  return (
    <div className="foodorder">
      <div className="left">
        <h3 onClick={() => setShowModal(false)}>
          <CloseIcon />
        </h3>
        <img src={modalInfo.img_url} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <h3>{modalInfo.name}</h3>
          <p>{modalInfo.desc}</p>
          <h6>
            If you have any food allergies or special dietary requirements,
            please notify the restaurant directly before ordering
          </h6>
        </div>
        <div className="bottom">
          <div className="left">
            <button onClick={() => handleOrder("subtract", modalInfo)}>
              -
            </button>
            <h4>{num}</h4>
            <button
              onClick={() => {
                handleOrder("add", modalInfo);
              }}
            >
              +
            </button>
            <button onClick={handleCreateOrder}>Add order</button>
          </div>

          <div className="right_bottom">
            <h4>Available</h4>
            <h4>Ksh {modalInfo.price * num}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
