import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA-1qKm9cvFoefTDDZfL21Bc2I-He8eSC4",
  authDomain: "ingsta-b29b5.firebaseapp.com",
  projectId: "ingsta-b29b5",
  storageBucket: "ingsta-b29b5.appspot.com",
  messagingSenderId: "1015266564945",
  appId: "1:1015266564945:web:3e43fbe5d71ff7d918d170",
  measurementId: "G-VG7GL68RJ4"
};

export default firebase.initializeApp(firebaseConfig);

export const apiKey = firebaseConfig.apiKey;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();