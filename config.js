import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD62m3uKfHebBuxlaLGlMOTkykUkCRoP68",
  authDomain: "project-71-6dea6.firebaseapp.com",
  projectId: "project-71-6dea6",
  storageBucket: "project-71-6dea6.appspot.com",
  messagingSenderId: "875781044153",
  appId: "1:875781044153:web:8965bfeee7fc317fa8e868"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
