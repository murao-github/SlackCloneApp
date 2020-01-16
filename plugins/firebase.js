import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyATKLPrR5ZaLrLv_b0lEcbTR4sx0fPF2lk",
    authDomain: "slack-clone-app-e9bca.firebaseapp.com",
    databaseURL: "https://slack-clone-app-e9bca.firebaseio.com",
    projectId: "slack-clone-app-e9bca",
    storageBucket: "slack-clone-app-e9bca.appspot.com",
    messagingSenderId: "344201903098"
  };
  firebase.initializeApp(config);
}

const db = firebase.firestore();
export { firebase, db };
