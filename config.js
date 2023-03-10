import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCUPXdhICP1fSQqt0z636rQUXJt_oOFpMA",
    authDomain: "pro-c71-template-master.firebaseapp.com",
    projectId: "pro-c71-template-master",
    storageBucket: "pro-c71-template-master.appspot.com",
    messagingSenderId: "884659543405",
    appId: "1:884659543405:web:31e42721dc087d8f564e64"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
