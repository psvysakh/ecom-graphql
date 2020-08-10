import shopActionType from "./shop.type";


export const fetchCollectionStart=()=>({
        type:shopActionType.FETCH_COLLECTION_START
    })

export const fetchCollectionSuccess=(collections)=>({
    type:shopActionType.FETCH_COLLECTION_SUCCESS,
    payload:collections
})

export const fetchCollectionFailure=(errorMessage)=>({
    type:shopActionType.FETCH_COLLECTION_FAILURE,
    payload:errorMessage
})

/* export const fetchCollectionStartAsync=()=>{
    return dispatch=>{
        const collectionRef =firestore.collection('collections');
            dispatch(fetchCollectionStart())
        collectionRef.get()
        .then(snapshot=>{
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionMap));
            updateCollections(shopdata);
            this.setState({loading:false});
        }).catch(err=>{
            dispatch(fetchCollectionFailure(err.message));
        })
    }
} */