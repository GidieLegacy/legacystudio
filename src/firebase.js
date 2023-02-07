
import firebase from 'firebase';
import "firebase/storage";




export const firebaseConfig = {
    apiKey: "AIzaSyBK5kexXqYGeaTLVteY-7lw8OimVA5Ge_o",
    authDomain: "legacystudio-16726.firebaseapp.com",
    projectId: "legacystudio-16726",
    storageBucket: "legacystudio-16726.appspot.com",
    messagingSenderId: "1075378501883",
    appId: "1:1075378501883:web:b8b9f4f3f6e5a4baf5985e",
    measurementId: "G-EB1WVB8YH5"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };