import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button';
import './collection-item.scss';
const CollectionItem =({item,add})=>{
    const {imageUrl,name,price} = item
    return(
        <div className="collection-item">
            <img src={imageUrl}/>
            <ul className="details">
                <li>{name}</li>
                <li>${price}</li>
            </ul>
            <CustomButton inverted onClick={()=>add(item)}>ADD TO CART</CustomButton>
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    add:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);