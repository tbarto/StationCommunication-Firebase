import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCkPEPEqdN2ec77f-A-VX5KUIZnI-ruiLo",
  authDomain: "stationcommunication.firebaseapp.com",
  databaseURL: "https://stationcommunication.firebaseio.com",
  storageBucket: "stationcommunication.appspot.com",
  messagingSenderId: "297622943834"
};

export const fbApp = firebase.initializeApp(firebaseConfig);
export const fb = fbApp.database();
// const fbApp = firebase.initializeApp(firebaseConfig)
//
// export default fbApp;
