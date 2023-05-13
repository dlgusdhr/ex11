// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3vhWgyFf8lhWMfDkh869UJooVkZRmEQc",
  authDomain: "react02-3efca.firebaseapp.com",
  projectId: "react02-3efca",
  storageBucket: "react02-3efca.appspot.com",
  messagingSenderId: "867481057731",
  appId: "1:867481057731:web:ab8d0e7039d09cc6f46576",
  measurementId: "G-L3RHYYMNZB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);