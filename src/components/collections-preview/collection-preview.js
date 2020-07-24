import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './collection-preview.scss';  
const CollectionPreview=(props)=>{
    return(
        <div className="collection-preview">
           <h1 className="title">{props.title}</h1>
           <div className="item">
                {props.items.filter((item,idx)=>idx <4).map((item)=>{
                    return(
                    <CollectionItem key={item.id} item={item}/>
                    )
                })}
           </div>
        </div>
    )
}

export default CollectionPreview;