import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selector';

import CollectionPreview from '../collections-preview/collection-preview';
import './collection-overview.scss';

const CollectionOverview=({collections})=>{

console.log(collections);   
    return(
        <div className="collection-overview">
         {
             collections.map(cat=>
                  <CollectionPreview key={cat.id} items={cat.items}/>
                )
                   
        }
    </div>
    )
}
const mapStateToProps=createStructuredSelector({
    collections:selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionOverview);