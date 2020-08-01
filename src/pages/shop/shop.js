import React from 'react';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateShopCollections} from '../../redux/shop/shop.action';

import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.util';

import WithSpinner from '../../components/with-spinner/with-spinner';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collectionpage';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component{
    state={
        loading:true
    }
    unsubscribeFromSnapshot =null;
    
    componentDidMount(){
        const{updateCollections}=this.props;
        const collectionRef =firestore.collection('collections');

        collectionRef.get()
        .then(snapshot=>{
            const shopdata = convertCollectionSnapshotToMap(snapshot);
            updateCollections(shopdata);
            this.setState({loading:false});
        })
    }

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return(
            <div className="shop">
                <Route exact path={`${match.path}`} 
                render={(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} 
                render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>}/> 
             </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    updateCollections:shopdata=>dispatch(updateShopCollections(shopdata))
})

export default connect(null,mapDispatchToProps)(Shop);