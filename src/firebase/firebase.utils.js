import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAP9Ptph7NG1XJ97wvPNGZVXTgICguom1A",
    authDomain: "crwn-db-39bf9.firebaseapp.com",
    projectId: "crwn-db-39bf9",
    storageBucket: "crwn-db-39bf9.appspot.com",
    messagingSenderId: "820012023826",
    appId: "1:820012023826:web:9c4128d9a6e65bf85698cb",
    measurementId: "G-263VQFXKGT"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;