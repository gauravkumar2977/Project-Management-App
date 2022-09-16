import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fbConfig = {
    apiKey: "AIzaSyBhzcMB_Fj4eRIgr0j0loGylbPMUoByIIU",
    authDomain: "project-management-app-e3eb1.firebaseapp.com",
    projectId: "project-management-app-e3eb1",
    storageBucket: "project-management-app-e3eb1.appspot.com",
    messagingSenderId: "619299097407",
    appId: "1:619299097407:web:11e7ab310268883e23618a",
    measurementId: "G-L2GDDNJCLP"
  };
  firebase.initializeApp(fbConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;