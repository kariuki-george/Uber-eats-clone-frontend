import React from "react";
import "./Modal.scss";

function Modal({ setShowModal, modalInfo }) {
  return (
    <div className="foodorder">
      <div className="left">
        <h3 onClick={() => setShowModal(false)}>x</h3>
        <img src="" alt="" />
      </div>
      <div className="right">
        <div className="top">
          <h3>Regular</h3>
          <p>ydvbbvj cudicbvdubcf dycvxycbdchjdvcdyibc dhcdvuicbd chd</p>
          <h6>
            f you have any food allergies or special dietary requirements,
            please notify the restaurant directly before ordering
          </h6>
        </div>
        <div className="bottom">
          <div className="left">
            <button>-</button>
            <h4>0</h4>
            <button>+</button>
          </div>
          <div className="right">
            <h4>Available</h4>
            <h4>Ksh 1111</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
