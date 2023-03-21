// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// import '../public/firebase-messaging-sw'

const firebaseConfig = {
    apiKey: "AIzaSyC7cS_qhDP_LSZJNvkXHKfXQBzEtVrxDKc",
    authDomain: "nawaf-a8e08.firebaseapp.com",
    projectId: "nawaf-a8e08",
    storageBucket: "nawaf-a8e08.appspot.com",
    messagingSenderId: "800849035045",
    appId: "1:800849035045:web:53d22e4d8b18658c93e4cc",
    measurementId: "G-VBC31RLY14"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('../public/firebase-messaging-sw');
//   });
// }
