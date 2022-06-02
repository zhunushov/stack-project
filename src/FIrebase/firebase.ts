// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyDw4cs8uLydybnX_mvI6sh0do6DwE0yIpk",
  authDomain: "stack-project-45de9.firebaseapp.com",
  projectId: "stack-project-45de9",
  storageBucket: "stack-project-45de9.appspot.com",
  messagingSenderId: "776020121672",
  appId: "1:776020121672:web:5f5001749565f2a500a07d"
});
const db = firebase.firestore()
const auth = firebase.auth()
export {db, auth, firebase}