import React from 'react';
import './collection-item.scss';
const CollectionItem =(props)=>{
    return(
        <div className="collection-item">
            <img src={props.imageUrl}/>
            <ul className="details">
                <li>{props.name}</li>
                <li>${props.price}</li>
            </ul>
        </div>
    )
}

export default CollectionItem;