import React from 'react';

import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview';

import CollectionPage from '../collection/collectionpage';

const Shop=({match})=>{
    return(
        <div className="shop">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> 
         </div>
    )
}

export default Shop;