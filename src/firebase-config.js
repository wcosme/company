const Rebase = require('re-base')
const firebase = require('firebase')


  // Initialize Firebase
  const FirebaseConfig = {
    apiKey: "AIzaSyBW1vNbV9qQCSK9yBFqtqMpt7NxKa_5IP4",
    authDomain: "wcosme-portfolio.firebaseapp.com",
    databaseURL: "https://wcosme-portfolio.firebaseio.com",
    projectId: "wcosme-portfolio",
    storageBucket: "wcosme-portfolio.appspot.com",
    messagingSenderId: "149521067662"
  }

  const app = firebase.initializeApp(FirebaseConfig)
  const config = Rebase.createClass(app.database())

  export default config