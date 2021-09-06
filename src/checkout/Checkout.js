import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { useSelector } from "react-redux";
function Checkout() {
  const { orders } = useSelector((state) => state.orders);
  const handlePlaceOrder = () => {};
  return (
    <div>
      <LeftSection orders={orders} />
      <RightSection subTotal={0} handlePlaceOrder={handlePlaceOrder} />
    </div>
  );
}

export default Checkout;
