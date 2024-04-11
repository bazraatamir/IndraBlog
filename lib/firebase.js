import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBChbl3lMrswVTZIBZLguX_KVdROsH8boo",
  authDomain: "indra-blog-419004.firebaseapp.com",
  projectId: "indra-blog-419004",
  storageBucket: "indra-blog-419004.appspot.com",
  messagingSenderId: "1053894209387",
  appId: "1:1053894209387:web:eceb0230cd17f39b00e62e",
  measurementId: "G-37MDX9KW1D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

