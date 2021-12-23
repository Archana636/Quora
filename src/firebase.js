import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyDG2mnrOkS0tafAjU1SqzXfaJS7AMKMSMg",
//   authDomain: "quora-clone-akky.firebaseapp.com",
//   projectId: "quora-clone-akky",
//   storageBucket: "quora-clone-akky.appspot.com",
//   messagingSenderId: "902318949999",
//   appId: "1:902318949999:web:8df2b97a20eece0209ef9a",
//   measurementId: "G-LJBYVXT22Z",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCi1fLKZ6jHWrfVahUMoL-vzeM7xJ0VG-c",
  authDomain: "quora-39d2f.firebaseapp.com",
  projectId: "quora-39d2f",
  storageBucket: "quora-39d2f.appspot.com",
  messagingSenderId: "73675634778",
  appId: "1:73675634778:web:d54d530563ee03b0104063",
  measurementId: "G-PD5K9ZCJHL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
