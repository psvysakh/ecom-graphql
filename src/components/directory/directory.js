import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss'
class Directory extends React.Component{
    state={
        sections:[
            {
                title:"Hats",
                imageUrl:"https://purepng.com/public/uploads/large/purepng.com-white-hathatsstandard-sizenicewhiteclipart-1421526360867p1zoc.png",
                id:1,
                linkUrl:"hat"
            },
            {
                title:"Jackets",
                imageUrl:"https://lh3.googleusercontent.com/proxy/cgof5tbmrdv9p4MnZZAzsIvgDOKCdfdjwhxlF5Ea3Um3nfmH2kBDvQHUYAe0v2RprYoILV-Wx6LNUY_7k-WsAjCgXX0vjlv9ojBmkylPH8OzRFpPPLUXqjPfrk8reg",
                id:2,
                linkUrl:"jackets"
            },
            {
                title:"Shoes",
                imageUrl:"https://i.dlpng.com/static/png/324837_preview.png",
                id:3,
                linkUrl:"shoes"
            },
            {
                title:"Men",
                imageUrl:"https://www.freepngimg.com/thumb/model/26650-7-mens-fashion.png",
                id:4,
                size:"large",
                linkUrl:"mens"
            },
            {
                title:"Women",
                imageUrl:"https://pluspng.com/img-png/women-shopping-png-hd-women-shopping-hd-free-png-image-2832.png",
                id:5,
                size:"large",
                linkUrl:"womens"
            }
            
        ]
    }
    render(){
        
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(item=>(
                        <MenuItem key={item.id} item={item}/>
                    ))
                }
                
            </div>
        )
    }
}

export default Directory;