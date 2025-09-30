// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXMInIbjqY9-jvLiHqB36UldzpRCM5lf4",
  authDomain: "netflix-gpt-8c731.firebaseapp.com",
  projectId: "netflix-gpt-8c731",
  storageBucket: "netflix-gpt-8c731.firebasestorage.app",
  messagingSenderId: "622886536697",
  appId: "1:622886536697:web:a77b979d8d54a623662928",
  measurementId: "G-5L6HEBZBXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();