import firebase from "firebase";

const firebaseConfig = {
 apiKey: "AIzaSyCYJfggSJndl3uJnxaVUkxVkHXcUr4bBtI",
 authDomain: "fb-clone-6bbd2.firebaseapp.com",
 projectId: "fb-clone-6bbd2",
 storageBucket: "fb-clone-6bbd2.appspot.com",
 messagingSenderId: "526659799192",
 appId: "1:526659799192:web:59895d0c9b49a5fd1da8ed"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;