  
  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBzoePEBmQN-_mbix4l3sgNNfzErMXLuPs",
    authDomain: "subaru-firebase.firebaseapp.com",
    projectId: "subaru-firebase",
    storageBucket: "subaru-firebase.appspot.com",
    messagingSenderId: "930655322821",
    appId: "1:930655322821:web:3093a78e33bb0a8b3fe6ac",
    measurementId: "G-11KNHRH7MT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{projectStorage, projectFirestore, timestamp}