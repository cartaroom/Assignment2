import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
   apiKey: "",
   authDomain: "",
   databaseURL: "",
   projectId: "cartaroom-114ed",
   storageBucket: "",
   messagingSenderId: ""
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;