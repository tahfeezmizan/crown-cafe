// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeGwBP7jufkkKY_UA7n7Ou3vMtZ9AzHTk",
    authDomain: "crown-cafe-ea80d.firebaseapp.com",
    projectId: "crown-cafe-ea80d",
    storageBucket: "crown-cafe-ea80d.appspot.com",
    messagingSenderId: "1032953945230",
    appId: "1:1032953945230:web:09a32affc1ba52df93bddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)