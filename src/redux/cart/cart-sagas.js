import {all,call,takeLatest,put} from 'redux-saga/effects';

import userActionType from '../user/user.type';

import {
clearCart
} from './cart.action';

export function* emptyCart(){
    yield put(clearCart());
}

export function* onSignOut(){
    yield takeLatest(userActionType.SIGNOUT_SUCCESS,
        emptyCart)
}

export function* cartSagas(){
    yield all([
        call(onSignOut)
    ]  )
}