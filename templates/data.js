const firebaseConfig = {
  apiKey: "AIzaSyBq40mNsVG8cV4Us1KC1vazugvZ_8SXIz4",
  authDomain: "analysis-573d0.firebaseapp.com",
  databaseURL: "https://analysis-573d0-default-rtdb.firebaseio.com",
  projectId: "analysis-573d0",
  storageBucket: "analysis-573d0.appspot.com",
  messagingSenderId: "1028646946354",
  appId: "1:1028646946354:web:f7bc82b22782fb7b90de2b"
};
//firebase.initializeApp(firebaseConfig);
//var insertdb=firebase.database().ref("analysis");
//document.getElementById("insert").addEventListener("submit",submitform1);
//function submitform1(e){
//  e.preventDefault();
//  var etext = document.getElementById("etext").value;
//  if (etext.trim() == null || etext.trim() == "") {
//    alert("Please enter feedback!!");
//  }
//  }else {
//   firebase
//        .auth()
//        .createUserWithEmailAndPassword(con_email, con_cnfpass)
//        .then(function (userCredential) {
//          // Signed in
//         // console.log("details validated");
//             saveinfo(first_name, last_name,user_name, con_email,con_phn,con_pass,con_cnfpass);
//             document.getElementById("analysis").reset();
//             window.location.href="slog.html";
//              })
//        .catch((error) => {
//        var errorMessage = error.message;
//        alert(errorMessage);
//
//        });
//  }
//}
//  }

firebase.initializeApp(firebaseConfig);
var insertdb=firebase.database().ref("insert");
document.getElementById("insert").addEventListener("submit",submitform1);
function submitform1(){
//  e.preventDefault();
//  var f_email = document.getElementById("f_email").value;
//  var f_pwd= document.getElementById("f_pwd").value;
  var etext = document.getElementById("etext").value;
  var uname= document.getElementById("uname").value;
  if (etext.trim() == null || etext.trim() == "") {
    alert("Please enter feedback!");
  } else if (uname.trim() == null || uname.trim() == "") {
   alert("Please enter username!!");
//  }else if (etext.trim() == null || etext.trim() == "") {
//    alert("Please enter feedback!!");
  }else {
//  firebase
//      .auth()
//      .signInWithEmailAndPassword(username,pwd)
//      .then((userCredential) => {
////          // Signed in
////         // console.log("details validated");
//             userId=userCredential.user.uid;
             saveinfo1(uname,etext);

//             document.getElementById("analysis").reset();
//             window.location.href="slog.html";
        }
  }
//
const saveinfo1=(uname,etext) =>{
  var newform1=insertdb.push();
   newform1.set({
//          f_email : f_email,
//          f_pwd : f_pwd,

          uname:uname,
          etext : etext


      });

}
//const saveinfo1=(etext) =>{
//    var user2=document.getElementById("email").value;
//    firebase.database().ref("insert").child("user2").push().update({
//            etext:etext
//});
//}
const getElementVal1=(id) =>{
  return document.getElementById(id).value;
}

//function selectdata()
//{
//firebase.database().ref('insert').once('value',
//function(allrecords){
//allrecords.forEach(
//function(currentrecord){
//var email=currentrecord.val().f_email;
//var feedback=currentrecord.val().etext;
//additems(email,feedback);
//}
//);
//});
//}
////window.onload=selectdata;
//var stdNo=0;
//
//function additems(email,feedback){
//var tbody=document.getElementById('tbody1');
//var trow=document.createElement('tr');
//var td1=document.createElement('td');
//var td2=document.createElement('td');
//td1.innerHTML=++stdNo;
//td2.innerHTML=++stdNo;
//trow.appendChild(td1);
//trow.appendChild(td2);
//tbody.appendChild(trow);
//}
//
//function allitemstable(index){
//stdNo=0;
//tbody.innerHTML="";
//index.forEach(element => {
//additems(element.email,element.feedback);
//});
//}
//function getdata(){
//const dbref=ref(insertdb);
//get(child(dbref,"insert"))
//.then((snapshot)=>
//{
//var index=[];
//snapshot.forEach(childSnapshot =>{
//index.push(childSnapshot.val());
//});
//allitemstable(index);
//});
//
// }
//
//function display(){
//insertdb.on("value",function(snapshot){
//snapshot.forEach(function(element){
//document.querySelector('#root').innerHTML += '<div>${element.val()}</div>'
//});
//})
//}
//function getdata(){
//firebase.database().ref("insert").on('value',function(snapshot){
//snapshot.forEach(function( ))})
//}