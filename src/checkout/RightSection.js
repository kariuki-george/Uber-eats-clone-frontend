import React, { useState, useEffect } from "react";
import "./RightSection.scss";

function RightSection({ subTotal, handlePlaceOrder }) {
  const [subtotal, setSubtotal] = useState(0);
  const [service, setService] = useState(0);
  const [delivery, setDelivery] = useState(0);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setService(subTotal * 0.1);
    setDelivery(subTotal * 0.1);
    setTotal(subTotal + service + delivery);
  }, [subTotal]);

  return (
    <div className="rightSection">
      <div className="placeorder">
        <button onClick={handlePlaceOrder}>Place Order</button>
        <h6>
          If you’re not around when the delivery person arrives, they’ll leave
          your order at the door. By placing your order, you agree to take full
          responsibility for it once it’s delivered.
        </h6>
      </div>
      <div className="fees">
        <h6>Subtotal</h6>
        <h6>Ksh {subtotal}</h6>
      </div>

      <div className="fees">
        <h6>Service</h6>
        <h6>Ksh {service}</h6>
      </div>
      <div className="fees">
        <h6>Delivery</h6>
        <h6>Ksh {delivery}</h6>
      </div>
      <div className="total">
        <h5>Total</h5>
        <h5>Ksh {total}</h5>
      </div>
    </div>
  );
}

export default RightSection;
