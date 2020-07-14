import React from 'react';
import './menuitem.scss'
const MenuItem = (props)=>{
return(
    
        <div className={`${props.item.size} menu-item`} style={{
            backgroundImage:`url("${props.item.imageUrl}")`
        }}>
            <div className="content">
                <h3 className="title">{props.item.title}</h3>
                <span className="subtitle">Shop Now</span>
            </div>
            
        </div>
)
}

export default MenuItem;