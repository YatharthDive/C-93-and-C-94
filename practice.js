
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDV7A8MBC0A8w_CN6ZQ-p4aOP2IgPyZdPU",
    authDomain: "kwitter-bea51.firebaseapp.com",
    databaseURL: "https://kwitter-bea51-default-rtdb.firebaseio.com",
    projectId: "kwitter-bea51",
    storageBucket: "kwitter-bea51.appspot.com",
    messagingSenderId: "1020339142265",
    appId: "1:1020339142265:web:e2436e4fccff4345955ea8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function Add_User(){
    user_name=document.getElementById("User_Name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"Added The User"
    });
}