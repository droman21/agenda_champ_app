import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA7J6S8AcHgEKWG81lmgPX3zurTaYLgJnk",
    authDomain: "agendachamp-1b33b.firebaseapp.com",
    databaseURL: "https://agendachamp-1b33b.firebaseio.com",
    projectId: "agendachamp-1b33b",
    storageBucket: "agendachamp-1b33b.appspot.com",
    messagingSenderId: "936058783664",
    appId: "1:936058783664:web:5530f4eed09bac0c967875",
    measurementId: "G-VTVGGT7GJD"
});

export {firebaseConfig as firebase};
