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


function addRoom(){
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
   
         purpose:"adding room_name"
   });
   localStorage.setItem("room_name",room_name);
   

       }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
  console.log("Room_names - " + Room_names)
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row; 
//End code
   });});}
getData();

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location ="dhruv.html";
   }
   function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location ="index.html";
   }

   