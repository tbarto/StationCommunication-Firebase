import {fbApp} from './firebase';

export default function (){

  //Check firebase.auth then localStorage
  if (fbApp.auth().currentUser){
    console.log('fb auth had user');
    return fbApp.auth().currentUser.uid;
  }
  console.log('fb did not have user...checking localStorage');
  for (let key in localStorage) {
    if (key.startsWith("firebase:authUser:")) {
      return JSON.parse(localStorage.getItem(key)).uid;
    }
  }
  return null;
}
