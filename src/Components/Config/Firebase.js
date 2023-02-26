import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyANwYj_6X_KHeTYwaBlXfDHlMnY-iM0sLo",
  authDomain: "rcctechz-admin-dashboard.firebaseapp.com",
  projectId: "rcctechz-admin-dashboard",
  storageBucket: "rcctechz-admin-dashboard.appspot.com",
  messagingSenderId: "288779746417",
  appId: "1:288779746417:web:a7eac5172367b51cc26fd0",
  measurementId: "G-2Z3CQLWKQ3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
