// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
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

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});