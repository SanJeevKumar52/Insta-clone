import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCu54XVgL3d4pPsku5GZpQh45EltsGuI-I",
  authDomain: "instagram-clone-ed993.firebaseapp.com",
  projectId: "instagram-clone-ed993",
  storageBucket: "instagram-clone-ed993.appspot.com",
  messagingSenderId: "182914540529",
  appId: "1:182914540529:web:3f771662cb31464df61a50",
  measurementId: "G-R9YHQFPRC6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage};