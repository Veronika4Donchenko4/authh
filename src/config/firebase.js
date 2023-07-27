
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCFHN9Dp48m3HZMb92h7Wbh6722hUuA4Pg",
  authDomain: "fir-course-30512.firebaseapp.com",
  projectId: "fir-course-30512",
  storageBucket: "fir-course-30512.appspot.com",
  messagingSenderId: "1094744236028",
  appId: "1:1094744236028:web:b0ae6dd29a7e0d4007dc79",
  measurementId: "G-3EP6925SK1"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)