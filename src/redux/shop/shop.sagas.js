import {takeLatest,all,call,put} from 'redux-saga/effects';
import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.util';
import {
fetchCollectionSuccess,
fetchCollectionFailure
} from './shop.action';

import ShopActionTypes from './shop.type';

export function* fetchCollectionAsync(){
    try{
        const collectionRef =firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionSnapshotToMap,snapshot);
        yield put(fetchCollectionSuccess(collectionMap));
    }catch(error){
        yield put(fetchCollectionFailure(error.message));
    }
   
}

export function* fetchCollectionStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionAsync
        )
}

export function* shopSagas(){
    yield all([
        call(fetchCollectionStart)
    ])
}