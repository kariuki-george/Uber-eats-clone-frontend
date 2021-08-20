import React from "react";
import './Filter.scss'
function Filter() {
  return (
    <div className='filter'>
      <div className="choice">
        <img
          src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png"
          alt=""
        />
        <h5>Deals</h5>
      </div>
      <div className="choice">
        <img
          src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png"
          alt=""
        />
        <h5>Top Eats</h5>
      </div>
      <div className="choice">
        <img
          src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/pizza.png"
          alt=""
        />
        <h5>Pizza</h5>
      </div>
      <div className="choice">
        <img
          src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/fastfood.png"
          alt=""
        />
        <h5>Fast Food</h5>
      </div>
      <div className="choice">
        <img
          src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/bbq.png"
          alt=""
        />
        <h5>BBG</h5>
      </div>
      <div className="choice">
        <img
          src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/american.png"
          alt=""
        />
        <h5>American</h5>
      </div>
    </div>
  );
}

export default Filter;
