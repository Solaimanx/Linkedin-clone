import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGWwnK85oIdOLFydzy3zls7iiphNN1etI",
  authDomain: "linkedin-clone-34f99.firebaseapp.com",
  projectId: "linkedin-clone-34f99",
  storageBucket: "linkedin-clone-34f99.appspot.com",
  messagingSenderId: "669965437839",
  appId: "1:669965437839:web:11656b5cc9f7fad6b899fa",
  measurementId: "G-560KMNHSSS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
