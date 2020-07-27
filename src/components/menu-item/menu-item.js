import React from 'react';
import {withRouter} from 'react-router-dom';

import './menuitem.scss'
const MenuItem = (props)=>{
return(
    
        <div className={`${props.item.size} menu-item`} style={{
            backgroundImage:`url("${props.item.imageUrl}")`
        }} onClick={()=>props.history.push(`${props.match.url}shop/${props.item.linkUrl}`)}>
            <div className="content">
                <h3 className="title">{props.item.title}</h3>
                <span className="subtitle">Shop Now</span>
            </div>
            
        </div>
)
}

export default withRouter(MenuItem);