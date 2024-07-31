
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-X9EjwICLU91Dl0i5eecVuoEhUC31jTU",
  authDomain: "test-e1df3.firebaseapp.com",
  projectId: "test-e1df3",
  storageBucket: "test-e1df3.appspot.com",
  messagingSenderId: "200905178684",
  appId: "1:200905178684:web:04281deaf996227e9b8d39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
