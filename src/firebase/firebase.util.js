import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDK5C6Q0TFiBAtbhl15PNRdI1vDIDO2wAc",
    authDomain: "ecom-7700a.firebaseapp.com",
    databaseURL: "https://ecom-7700a.firebaseio.com",
    projectId: "ecom-7700a",
    storageBucket: "ecom-7700a.appspot.com",
    messagingSenderId: "28909259666",
    appId: "1:28909259666:web:b1ac6e279891a021cf8f4b"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;