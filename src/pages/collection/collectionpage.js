import React from 'react';
import {connect} from 'react-redux';

import {selectShopCollection} from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item';
import './collectionpage.scss';

const CollectionPage=({collection:{title,items}})=>{
    return(
        <div className="collection-page">
            <h1>{title}</h1>
            <div className="item">
                {
                  items.map(item=>
                    <CollectionItem key={item.id} item={item}/>
                    )  
                }
            </div>
            
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>({
    collection:selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);