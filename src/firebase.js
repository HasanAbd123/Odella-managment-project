import { initializeApp } from "firebase/app";
import {getMessaging} from "firebase/messaging"

const firebaseConfig = {
    apiKey: "AIzaSyC0FfjuV0wjS1W__EzJ2MBQ0IGZONGvruE",
    authDomain: "odella-f86e7.firebaseapp.com",
    databaseURL: "https://odella-f86e7-default-rtdb.firebaseio.com",
    projectId: "odella-f86e7",
    storageBucket: "odella-f86e7.appspot.com",
    messagingSenderId: "488432009966",
    appId: "1:488432009966:web:99f7cfa8317ef8c29fe9ff",
    measurementId: "G-MH2VZWSRDD"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const messaging =getMessaging(app)
 
