import {takeLatest,put,all,call} from 'redux-saga/effects';

import userActionType from './user.type'; 

import {
    auth,
    googleProvider,
    createUser,
    getCurrentUser
} from '../../firebase/firebase.util';
import {
signInSuccess,
signInFailure,
signOutSuccess,
signOutFailure,
signUpSuccess,
signUpFailure
} from './user.action';

export function* fetchUser(user,additionalData){
    try{
        const userRef = yield call(createUser,user,additionalData);
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({
            id:userSnapshot.id,
            ...userSnapshot.data()
        }));
    }catch(error){
        yield put(signInFailure(error.message));
    }
}

export function* signInWithGoogle(){
try{
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield fetchUser(user);
    
}catch(error){
    yield put(signInFailure(error.message));
}
}

export function* signInEmail({payload:{email,password}}){
    try{
      const {user}=yield auth.signInWithEmailAndPassword(email,password);
      yield fetchUser(user);
   
    }catch(error){
        yield put(signInFailure(error.message));
    }
}
export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield fetchUser(userAuth);
    }catch(error){
        yield put(signInFailure(error.message));
    }
}

export function* userSignOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(error){
        yield put(signOutFailure(error.message));
    }
}

export function* signUp({payload:{email,password,displayName}}){
    try{
        const {user} =yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({user,additionalData:{displayName}}));
    }catch(error){
        yield put(signUpFailure(error.message));
    }
}

export function* signInAfterSignUp({payload:{user,additionalData}}){
   yield fetchUser(user,additionalData);
}




export function* onGoogleSignInStart(){
    yield takeLatest(userActionType.GOOGLE_SIGNIN_START,
        signInWithGoogle
        )
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionType.EMAIL_SIGNIN_START,
        signInEmail
        )
}

export function* onCheckUserSession(){
   yield takeLatest(userActionType.CHECK_USER_SESSION,
    isUserAuthenticated)
}

export function* onSignOut(){
    yield takeLatest(userActionType.SIGNOUT_START,
        userSignOut)
}



export function* onSignUp(){
    yield takeLatest(userActionType.SIGNUP_START,
        signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(userActionType.SIGNUP_SUCCESS,
            signInAfterSignUp)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOut),
        call(onSignUp),
        call(onSignUpSuccess)
    ])
}