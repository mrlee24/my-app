import firebase from 'firebase'
import 'firebase/firestore'

const configOptions = {
    apiKey: "AIzaSyBZbS5nhN_QxOnFyogMP3sZ0jqZRsiEFss",
    authDomain: "tenant-manage.firebaseapp.com",
    databaseURL: "https://tenant-manage.firebaseio.com",
    projectId: "tenant-manage",
    storageBucket: "tenant-manage.appspot.com",
    messagingSenderId: "854725763245",
    appId: "1:854725763245:web:f04a6885c76cbdac83a624",
    measurementId: "G-TPF9EDD0WW"
  };
  
  firebase.initializeApp(configOptions);

  const db = firebase.firestore()

  // firebase.auth().onAuthStateChanged(user => {
  //   store.dispatch("fetchUser", user);
  // });

  export {
    firebase,
    db
  }
  