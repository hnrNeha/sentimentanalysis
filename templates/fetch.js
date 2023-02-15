 window.onload=(function(){
 const firebaseConfig = {
  apiKey: "AIzaSyBq40mNsVG8cV4Us1KC1vazugvZ_8SXIz4",
  authDomain: "analysis-573d0.firebaseapp.com",
  databaseURL: "https://analysis-573d0-default-rtdb.firebaseio.com",
  projectId: "analysis-573d0",
  storageBucket: "analysis-573d0.appspot.com",
  messagingSenderId: "1028646946354",
  appId: "1:1028646946354:web:f7bc82b22782fb7b90de2b"
};

firebase.initializeApp(firebaseConfig);
var stdNo=0;
var arr=[];
var userDataRef = firebase.database().ref("insert").orderByKey();
userDataRef.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();              // childData will be the actual contents of the child
      var e_text = childSnapshot.val().etext;
      var u_name=  childSnapshot.val().uname;

      var tbody=document.getElementById('tbody1');
      var trow=document.createElement('tr');
      var td1=document.createElement('td');
      var td2=document.createElement('td');
      var td3=document.createElement('td');


      td1.innerHTML=++stdNo;
      td2.innerHTML=u_name;
      td3.innerHTML=e_text;

      trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      tbody.appendChild(trow);
      arr.push(childSnapshot.val().etext);


//      const d= [e_text];
//      const s=JSON.stringify(d);
//      $.ajax({
//      url:"/show",
//      type:"POST",
//      contentType:"application/json",
//      data:JSON.stringify(s)});


////
//      const d=[]
//      const d= [td3]
//      const s=JSON.stringify(d);
//      $.ajax({
//      url:"/show",
//      type:"POST",
//      contentType:"application/json",
//      data:JSON.stringify(s)});

//
//
////      document.getElementById('admindata').innerHTML = e_text;
//      var al=document.getElementById('list');
//      var ebtext=document.createElement('li');
//      var header=document.createElement('h5');
//      header.innerHTML='user';
//      ebtext.innerHTML="feedback: "+e_text;
//      al.appendChild(header);
//      al.appendChild(ebtext);
 });
      console.log(arr);
      const d= arr;
      const s=JSON.stringify(d);
      $.ajax({
      url:"/show",
      type:"POST",
      contentType:"application/json",
      data:JSON.stringify(s)});

 });
}());


function retrieve(){

  document.getElementById('admindata').addEventListener('click', e => {
  var tbody=document.getElementById('tbody1');
  tbody.innerHTML="";
  readFilteredIssues(e);


});
}

function readFilteredIssues(e) {

var a=document.getElementById('myInput').value;
var stdNo=0;
var arr=[];

firebase.database().ref("insert").orderByChild("uname").equalTo(a).on("child_added", (snap) => {
      var e_text = snap.val().etext;
      var u_name= snap.val().uname;

      var tbody=document.getElementById('tbody1');
      var trow=document.createElement('tr');
      var td1=document.createElement('td');
      var td2=document.createElement('td');
      var td3=document.createElement('td');


      td1.innerHTML=++stdNo;
      td2.innerHTML=u_name;
      td3.innerHTML=e_text;

      trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      tbody.appendChild(trow);
      arr.push(snap.val().etext);
//      console.log(arr);

});
//      document.getElementById("admitdata").()
      console.log(arr);
      const d= arr;
      const s=JSON.stringify(d);
      $.ajax({
      url:"/show",
      type:"POST",
      contentType:"application/json",
      data:JSON.stringify(s)});


}
