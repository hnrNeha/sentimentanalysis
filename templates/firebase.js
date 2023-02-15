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
var analysisdb=firebase.database().ref("analysis");
document.getElementById("analysis").addEventListener("submit",submitform);

  function login() {
    const username= document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(username, pwd)
      .then((userCredential) => {
        // Signed in
        window.location.href="form.html";
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }
function submitform(e){
  e.preventDefault();
  var first_name = document.getElementById("fname").value;
  var last_name = document.getElementById("lname").value;
  var user_name = document.getElementById("uname").value;
  var con_email = document.getElementById("email").value;
  var con_phn = document.getElementById("con-ph").value;
  var con_pass = document.getElementById("con-pwd").value;
  var con_cnfpass = document.getElementById("con-cnfpwd").value;
  if (first_name.trim() == null || first_name.trim() == "") {
    alert("Please enter First name!!");
  } else if (last_name.trim() == null || last_name.trim() == "") {
    alert("Please enter last name!!");
  }else if (user_name.trim() == null || user_name.trim() == "") {
    alert("Please enter user name!!");
  } else if (con_phn.trim() == null || con_phn.trim() == "") {
    alert("Please enter valid phone number!");
  } else if (isNaN(con_phn)) {
    alert("Please enter valid phone number!");
  } else if (con_pass.trim() != con_cnfpass.trim()) {
    alert("Password and Confirm password doesn't match");
  } else {
  firebase
        .auth()
        .createUserWithEmailAndPassword(con_email, con_cnfpass)
        .then(function (userCredential) {
          // Signed in
         // console.log("details validated");
             saveinfo(first_name, last_name,user_name, con_email,con_phn,con_pass,con_cnfpass);
             document.getElementById("analysis").reset();
             window.location.href="slog.html";
              })
        .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);

        });
  }
}
const saveinfo=(first_name, last_name,user_name, con_email,con_phn,con_pass,con_cnfpass) =>{
  var newform=analysisdb.push();
  newform.set({
          first_name : first_name,
          last_name :last_name,
          user_name : user_name,
          con_email : con_email,
          con_phn :con_phn,
          con_pass : con_pass,
          con_cnfpass : con_cnfpass
  });
}

const getElementVal=(id) =>{
  return document.getElementById(id).value;
}



