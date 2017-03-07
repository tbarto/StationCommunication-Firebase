import {fbApp} from './firebase';
/*
* return user id 
*/
export default function (){

  //Check firebase.auth then localStorage
  if (fbApp.auth().currentUser){
    return fbApp.auth().currentUser.uid;
  }
  for (let key in localStorage) {
    if (key.startsWith("firebase:authUser:")) {
      return JSON.parse(localStorage.getItem(key)).uid;
    }
  }
  return null;
}
