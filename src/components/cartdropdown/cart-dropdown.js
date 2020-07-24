import React from 'react';

import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.scss';

const Cartdropdown =({cartItems})=>(
    <div className="cart-dropdown">
        {
            cartItems.map(item=>(
                <CartItem key={item.id} item={item}/>
            ))
        }
        
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps=({cart:{cartItems}})=>({
    cartItems:cartItems
})
export default connect(mapStateToProps)(Cartdropdown);