import firebase from "firebase/app";
require("firebase/auth");
const firebaseConfig = {
  apiKey: "AIzaSyDKWVNpipKO-SSex1GAnLShrBrtw902hqg",
  authDomain: "star-events-581b0.firebaseapp.com",
  projectId: "star-events-581b0",
  storageBucket: "star-events-581b0.appspot.com",
  messagingSenderId: "125579083679",
  appId: "1:125579083679:web:3c11662f5feb75bb6447aa",
  measurementId: "G-NHG60F5MHF",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
