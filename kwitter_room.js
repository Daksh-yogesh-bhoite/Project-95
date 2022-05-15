function addroom(){
    roomname=document.getElementById("room_name").value;
    localStorage.setItem("roomname",roomname);
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;