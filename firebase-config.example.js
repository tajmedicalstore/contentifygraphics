// Rename this file to firebase-config.js and paste the Web App config
// from Firebase Console > Project settings > Your apps > Web app.
// Firebase web config is intended to be present in browser code; security
// comes from Authentication + Firestore/Storage Security Rules.
window.firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
window.ADMIN_EMAIL_FOR_RULES = "YOUR_ADMIN_EMAIL";
