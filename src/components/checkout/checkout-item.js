import React from 'react';
import {connect} from 'react-redux';

import {addItem,removeItem,clearItemFromCart} from '../../redux/cart/cart.action';

import './checkout-item.scss';
const CheckoutItem=({item,add,remove,clear})=>{
    const {imageUrl,name,quantity,price}=item;
 return(<div className="checkout-item">
     <div className="item-body">
        <div className="item-block">
            <img src={imageUrl}/>
        </div>
        <div className="item-block">
            <span>{name}</span>
        </div>
        <div className="item-block add">
            <span className="sub" onClick={()=>remove(item)}>&#10094;</span>
            <span>{quantity}</span>
            <span className="add" onClick={()=>add(item)}>&#10095;</span>
        </div>
        <div className="item-block">
            <span>{price}</span>
        </div>
        <div className="item-block">
            <span className="remove" onClick={()=>clear(item)}>&#10005;</span>
        </div>
     </div>
 </div>)
}
const mapDispatchToProps=dispatch=>({
    add:item=>dispatch(addItem(item)),
    remove:item=>{console.log(item);dispatch(removeItem(item))},
    clear:item=>dispatch(clearItemFromCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);