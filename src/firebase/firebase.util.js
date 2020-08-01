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

export const createUser =async (userAuth, additionalData)=>{
if(!userAuth) return;
const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapshot = await userRef.get();

if(!snapshot.exists){
  const {displayName, email} = userAuth;
  const createdAt = new Date();
  try{
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })

  }catch(error){
    console.log('error creating users',error);
  }
}
return userRef;
}

export const addCollectionAndDocuments=async (collectionKey,objectsToAdd)=>{
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj=>{
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);
  })

  return await batch.commit();
}

export const convertCollectionSnapshotToMap=collections=>{
  const transformedCollection = collections.docs.map(doc=>{
    const {title,items} =doc.data();
    return{
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  });

return transformedCollection.reduce((acc,collection)=>{
  acc[collection.title.toLowerCase()]=collection;
  return acc;
},{})

}

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;