import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
     apiKey: "AIzaSyAQxmDhXkH7IvbnCTMbI0HsGH1x52K5QLg",
   authDomain: "cartaroom-114ed.firebaseapp.com",
   databaseURL: "https://cartaroom-114ed.firebaseio.com",
   projectId: "cartaroom-114ed",
   storageBucket: "cartaroom-114ed.appspot.com",
   messagingSenderId: "739947088985"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
