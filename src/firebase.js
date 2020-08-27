import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCNXfAqdfUdt4YRiex05_aFyLuJIGwRwgE",
    authDomain: "messenger-clone-351c7.firebaseapp.com",
    databaseURL: "https://messenger-clone-351c7.firebaseio.com",
    projectId: "messenger-clone-351c7",
    storageBucket: "messenger-clone-351c7.appspot.com",
    messagingSenderId: "1056034604162",
    appId: "1:1056034604162:web:b422c3e9daa6faa6de609b",
    measurementId: "G-Z1ND0MBBHZ"
});

const db = firebaseApp.firestore();

export default db;