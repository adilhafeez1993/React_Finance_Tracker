import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV_qQhSGoj3fvudT-u8MCQFPgnhrac9gQ",
  authDomain: "mymoney-52c20.firebaseapp.com",
  projectId: "mymoney-52c20",
  storageBucket: "mymoney-52c20.appspot.com",
  messagingSenderId: "411298935183",
  appId: "1:411298935183:web:f6e2f6268723af56af5bfa",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
