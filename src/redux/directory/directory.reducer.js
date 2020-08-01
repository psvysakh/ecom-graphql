const INITIAL_STATE={
    sections:[
        {
            title:"Hats",
            imageUrl:"https://purepng.com/public/uploads/large/purepng.com-white-hathatsstandard-sizenicewhiteclipart-1421526360867p1zoc.png",
            id:1,
            linkUrl:"hats"
        },
        {
            title:"Jackets",
            imageUrl:"https://pngimg.com/uploads/leather_jacket/leather_jacket_PNG1.png",
            id:2,
            linkUrl:"jackets"
        },
        {
            title:"Sneakers",
            imageUrl:"https://i.dlpng.com/static/png/324837_preview.png",
            id:3,
            linkUrl:"sneakers"
        },
        {
            title:"Mens",
            imageUrl:"https://www.freepngimg.com/thumb/model/26650-7-mens-fashion.png",
            id:4,
            size:"large",
            linkUrl:"mens"
        },
        {
            title:"Womens",
            imageUrl:"https://pluspng.com/img-png/women-shopping-png-hd-women-shopping-hd-free-png-image-2832.png",
            id:5,
            size:"large",
            linkUrl:"womens"
        }
        
    ]
}

const directoryReducer=(state=INITIAL_STATE,action)=>{
switch(action.type){
    default:
        return state
}
}

export default directoryReducer;