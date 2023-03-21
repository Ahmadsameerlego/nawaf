
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);


const firebaseConfig = {
    apiKey: "AIzaSyC7cS_qhDP_LSZJNvkXHKfXQBzEtVrxDKc",
    authDomain: "nawaf-a8e08.firebaseapp.com",
    projectId: "nawaf-a8e08",
    storageBucket: "nawaf-a8e08.appspot.com",
    messagingSenderId: "800849035045",
    appId: "1:800849035045:web:53d22e4d8b18658c93e4cc",
    measurementId: "G-VBC31RLY14"
};
    // eslint-disable-next-line
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };



  self.registration.showNotification(notificationTitle, notificationOptions);

});
/* eslint-enable */