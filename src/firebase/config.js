// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpy2QzFDlstOwCOBkLEBzSTTErdRxwGik",
  authDomain: "react-cursos-ce662.firebaseapp.com",
  projectId: "react-cursos-ce662",
  storageBucket: "react-cursos-ce662.appspot.com",
  messagingSenderId: "416337157531",
  appId: "1:416337157531:web:2f73574c0346ec595ed53e",
  measurementId: "G-7QVF95PXYN"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);


//  export const analytics = getAnalytics(app);


