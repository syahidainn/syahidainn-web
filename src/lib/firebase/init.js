// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNGWMHD2pLbLTGJmhtsmOOkqEUG-6VOO0",
  authDomain: "syahidainn-web.firebaseapp.com",
  projectId: "syahidainn-web",
  storageBucket: "syahidainn-web.firebasestorage.app",
  messagingSenderId: "500772367488",
  appId: "1:500772367488:web:c7dcaab107da59959cca65",
  measurementId: "G-2068N60NMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
