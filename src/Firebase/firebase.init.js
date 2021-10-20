import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confiq";

const firebaseAuth = () => {
  initializeApp(firebaseConfig);
};
export default firebaseAuth;
