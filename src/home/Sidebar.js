import React from "react";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="results">
        <h3>bacon</h3>
        <span>2 results for "bacon"</span>
      </div>
      <div className="sort">
        <h5>sort</h5>
        <div >
          <input type="checkbox" name="" id="" />
          <h6 htmlFor="">Picked for you</h6>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <h6 htmlFor="">Most popular</h6>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <h6 htmlFor="">Rating</h6>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <h6 htmlFor="">Delivery time</h6>
        </div>
      </div>
      <div className="price">
        
        <h5>price range</h5>
        <div><span>$</span>
        <span>$$</span>
        <span>$$$</span>
        <span>$$$$</span></div>
        
      </div>
      <div className="delivery">
        <h5>Max delivery Fee</h5>
        <span>slider</span>
      </div>
      <div className="dietary">
        <h5>Dietary</h5>
        <span>vegetarian</span>
        <span>vegan</span>
        <span>Gluten free</span>
      </div>
    </div>
  );
}

export default Sidebar;
