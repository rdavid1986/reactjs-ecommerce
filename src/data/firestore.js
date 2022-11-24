import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHcvNZGm3H0AcvEQ0XI_PoCnodHdhnnnw",
  authDomain: "coderhouse-ecommerce-3ce4e.firebaseapp.com",
  projectId: "coderhouse-ecommerce-3ce4e",
  storageBucket: "coderhouse-ecommerce-3ce4e.appspot.com",
  messagingSenderId: "39191967506",
  appId: "1:39191967506:web:3e3f558ec89fdb86e925cb",
  measurementId: "G-CD6NJF502H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function testDataBase() {
    console.log(app);
}