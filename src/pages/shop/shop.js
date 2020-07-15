import React from 'react';
import SHOP_DATA from '../../shop.data';
import Collection from '../../components/collections-preview/collection-preview';
class Shop extends React.Component{
    state={
        collections:SHOP_DATA
    }
    render(){
        const {collections} = this.state;
        return(
            <div>
                {
                    collections.map(({id,...dataProps})=>{
                        return(
                            <Collection key={id} {...dataProps}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Shop;