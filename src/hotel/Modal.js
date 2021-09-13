import React, { useState, useEffect } from "react";
import "./Modal.scss";
import CloseIcon from "@material-ui/icons/Close";
import addToCart from "../services/cart";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { clearState } from "../state/slices/authReducer";

function Modal({ setShowModal, modalInfo }) {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const { cart, _id } = useSelector((state) => state.user.userData);
  const { isError, isSuccess, errorMessage } = useSelector(
    (state) => state.user
  );
  const [num, setNum] = useState(0);

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
      dispatch(clearState());
      dispatch(
        addToCart({
          user_id: _id,
          restaurant_id: modalInfo.restaurant_id,
          food_id: modalInfo._id,
          food_amount: num,
          cart,
          food_name: modalInfo.name,
          food_price: modalInfo.price,
        })
      );
      setShowModal(false);
      return;
    }
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Added to cart successfully");
      return dispatch(clearState());
    }
    if (isError) {
      toast.error(errorMessage);
      return dispatch(clearState());
    }
  }, [isSuccess, isError]);

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
