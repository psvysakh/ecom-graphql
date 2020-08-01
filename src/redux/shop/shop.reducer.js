import shopActionType from './shop.type';
const INITIAL_STATE={
    collections:null
}

  const shopReducer=(state=INITIAL_STATE,action)=>{
      switch(action.type){
         case shopActionType.ADD_SHOP_DATA:
             return{
                 ...state,
                 collections:action.payload
             }
          default:
              return state
      }
  }

  export default shopReducer;