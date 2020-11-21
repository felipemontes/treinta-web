import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDTO03Y3zni3EabT72dD4ZhWptnTyiBgqw",
    authDomain: "treinta-web.firebaseapp.com",
    databaseURL: "https://treinta-web.firebaseio.com",
    projectId: "treinta-web",
    storageBucket: "treinta-web.appspot.com",
    messagingSenderId: "238608879603",
    appId: "1:238608879603:web:b7b045bdb3e214a8340c86"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;