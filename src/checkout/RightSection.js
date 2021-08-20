import React from 'react'
import './RightSection.scss'

function RightSection() {
    return (
        <div className='rightSection'>
            <div className="placeorder">
        <button>Place Order</button>
        <h6>
          If you’re not around when the delivery person arrives, they’ll leave
          your order at the door. By placing your order, you agree to take full
          responsibility for it once it’s delivered.
        </h6>
      </div>
      <div className="fees">
        <h6>Subtotal</h6>
        <h6>Ksh 400</h6>
      </div>
      <div className="fees">
        <h6>Fees</h6>
      </div>
      <div className="fees">
        <h6>Service</h6>
        <h6>Ksh 40</h6>
      </div>
      <div className="fees">
        <h6>Delivery</h6>
        <h6>Ksh 80</h6>
      </div>
      <div className="total">
        <h5>Total</h5>
        <h5>Ksh 5000</h5>
      </div>
        </div>
    )
}

export default RightSection
