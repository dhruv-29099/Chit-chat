// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAUAGAWY3QWTdhD8M4hYj-mqn_RFqF2ut4",
    authDomain: "chit-chat-57429.firebaseapp.com",
    databaseURL: "https://chit-chat-57429-default-rtdb.firebaseio.com",
    projectId: "chit-chat-57429",
    storageBucket: "chit-chat-57429.appspot.com",
    messagingSenderId: "781037122559",
    appId: "1:781037122559:web:c26eeec59c4247c095adca"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name =localStorage.getItem("user_name");
room_name =localStorage.getItem("room_name");


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}





