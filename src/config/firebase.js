import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBb94W-A0o7q95SdMNClBfej_Dv6a1MTcE",
  authDomain: "fir-44320.firebaseapp.com",
  projectId: "fir-44320",
  storageBucket: "fir-44320.appspot.com",
  messagingSenderId: "621388988200",
  appId: "1:621388988200:web:762db9d156a3e6128cda1d",
  measurementId: "G-CSR3EBYJR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
export const dbFirestore = getFirestore(app);
