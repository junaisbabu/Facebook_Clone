import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAnYqxK_neaBLwS2qSjQ_H3yVGQoBSqML4",
    authDomain: "facebook-app-6e588.firebaseapp.com",
    projectId: "facebook-app-6e588",
    storageBucket: "facebook-app-6e588.appspot.com",
    messagingSenderId: "843927606972",
    appId: "1:843927606972:web:e1c9e8361bf9501aec22b9",
    measurementId: "${config.measurementId}"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;