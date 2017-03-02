//get id of user from localStorage
export default function (){
  for (let key in localStorage) {
    if (key.startsWith("firebase:authUser:")) {
      return JSON.parse(localStorage.getItem(key)).uid;
    }
  }
  return null;
}
