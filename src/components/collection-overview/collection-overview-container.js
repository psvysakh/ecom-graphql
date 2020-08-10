import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {selectShopIsFetching} from '../../redux/shop/shop.selector';

import WithSpinner from '../with-spinner/with-spinner';

import CollectionOverview from '../collection-overview/collection-overview';

const mapStateToProps=createStructuredSelector({
    isLoading:selectShopIsFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer;