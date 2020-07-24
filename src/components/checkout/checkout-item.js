import React from 'react';
import './checkout-item.scss';
const CheckoutItem=({item})=>(
 <div className="checkout-item">
     <div className="item-body">
        <div className="item-block">
            <img src={item.imageUrl}/>
        </div>
        <div className="item-block">
            <span>{item.name}</span>
        </div>
        <div className="item-block">
            <span>{item.quantity}</span>
        </div>
        <div className="item-block">
            <span>{item.price}</span>
        </div>
        
     </div>
 </div>
)

export default CheckoutItem;