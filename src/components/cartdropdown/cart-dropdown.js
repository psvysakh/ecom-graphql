import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.scss';

const Cartdropdown =({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
        { cartItems.length ?
            cartItems.map(item=>(
                <CartItem key={item.id} item={item}/>
            )) : <span>Cart is Empty</span>
        }
        
        <CustomButton onClick={()=>{history.push('/checkout');
            dispatch(toggleCartHidden());}
    }>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cartdropdown));