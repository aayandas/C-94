
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDz7U-YjW4b6me2OcV2O4BsyqHwiGiTpcM",
    authDomain: "kwitter-d6942.firebaseapp.com",
    databaseURL: "https://kwitter-d6942-default-rtdb.firebaseio.com",
    projectId: "kwitter-d6942",
    storageBucket: "kwitter-d6942.appspot.com",
    messagingSenderId: "837806032183",
    appId: "1:837806032183:web:96f6c25c3a7f4f90d746b2"
  };

  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}