import React,{useEffect} from 'react';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionStart} from '../../redux/shop/shop.action';


import CollectionPageContainer from '../collection/collection.container';

import CollectionOverviewContainer  from '../../components/collection-overview/collection-overview-container';


const Shop =({fetchCollectionStart,match})=>{
    
    useEffect(()=>{
        fetchCollectionStart();
    },[fetchCollectionStart]);
    
    /* componentDidMount(){
        const {fetchCollectionStart} =this.props;
       fetchCollectionStart();
    } */

     
        return(
            <div className="shop">
                <Route exact path={`${match.path}`} 
                component={CollectionOverviewContainer}/> 
                <Route path={`${match.path}/:collectionId`} 
                 component={CollectionPageContainer }/> 
             </div>
        )
 
}

const mapDispatchToProps=dispatch=>({
    fetchCollectionStart:()=>dispatch(fetchCollectionStart())
})

export default connect(null,mapDispatchToProps)(Shop);