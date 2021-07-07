import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWvvD4cx7bka_IMJgjlLWW8gyj8MwCTP8",
  authDomain: "geximx.firebaseapp.com",
  projectId: "geximx",
  storageBucket: "geximx.appspot.com",
  messagingSenderId: "265109997138",
  appId: "1:265109997138:web:30fc324e3a2678187c018b",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
