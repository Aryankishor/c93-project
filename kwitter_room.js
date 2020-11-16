
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBj27bEpGqTBpJKzMbO5WrEfP7--4OgWcc",
      authDomain: "kwitter-a32dc.firebaseapp.com",
      databaseURL: "https://kwitter-a32dc.firebaseio.com",
      projectId: "kwitter-a32dc",
      storageBucket: "kwitter-a32dc.appspot.com",
      messagingSenderId: "277408266970",
      appId: "1:277408266970:web:7da3bc1b4f7909000bc3e3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
