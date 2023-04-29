
import firebase from 'firebase';
import "firebase/storage";




export const firebaseConfig = {
    apiKey: "AIzaSyD_K44dXNfpsKdNaEABCST05YG8K-faEvg",
    authDomain: "legacystudio-a292a.firebaseapp.com",
    projectId: "legacystudio-a292a",
    storageBucket: "legacystudio-a292a.appspot.com",
    messagingSenderId: "385594237641",
    appId: "1:385594237641:web:d00f69012a88be7c2b2318",
    measurementId: "G-TBXTHYYFRT"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, storage, auth, provider, timeStamp };
