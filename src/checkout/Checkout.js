import React, { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { useSelector } from "react-redux";
function Checkout() {
  const { cart } = useSelector((state) => state.user.userData);
  const [hotel, setHotel] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (hotel !== "") {
      const list = cart.filter((dish) => dish.restaurant_name === hotel);
      console.log(list);
      setOrders(list);
    }
  }, [hotel]);

  const handlePlaceOrder = () => {};

  return (
    <div>
      <LeftSection orders={orders} setHotel={setHotel} />
      <RightSection subTotal={0} handlePlaceOrder={handlePlaceOrder} />
    </div>
  );
}

export default Checkout;
