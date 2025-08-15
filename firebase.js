// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZypafzXFJp6llDReV3KdwAr1MrcvfZ6M",
  authDomain: "team-grade.firebaseapp.com",
  projectId: "team-grade",
  storageBucket: "team-grade.firebasestorage.app",
  messagingSenderId: "905391416822",
  appId: "1:905391416822:web:3acfde98ecdf54b33853d7",
  measurementId: "G-VJLYTE7MYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
