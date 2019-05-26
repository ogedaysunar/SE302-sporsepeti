var config = {
  apiKey: "AIzaSyBNfOO1x3dIAneKNuPooxSKxWGuINmn3xo",
  authDomain: "isikunireportsystem.firebaseapp.com",
  databaseURL: "https://isikunireportsystem.firebaseio.com",
  projectId: "isikunireportsystem",
  storageBucket: "isikunireportsystem.appspot.com",
  messagingSenderId: "939467137797"
};
firebase.initializeApp(config);

// valid e-mail
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// show page witout loading icon
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// show loading icon
function showLoading() {
  document.getElementById("loader").style.display = "block";
  document.getElementById("myDiv").style.display = "none";
}

// open or close block
function ready(toogleID){
  if(document.getElementById(toogleID).style.display == "block"){
    document.getElementById(toogleID).style.display = "none"
  }else{
    document.getElementById(toogleID).style.display = "block"
  }
}

// manual SIGN-IN WITH FIREBASE AUTHENTICATE.
function manualSign_in(){
	// call firebase sign-in method
  var email = localStorage.getItem("superAdminEmail");
  var password = localStorage.getItem("superAdminPassword");

	firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message
		 if (errorCode == 'auth/wrong-password') {
				alert('Yanlış Parola.');
		 }else if(errorCode == 'auth/network-request-failed'){
				alert('Lütfen internet bağlantınızı kontrol edin.');
		 }else if (errorCode == 'auth/invalid-email') {
				alert("Böyle bir e-mail bulunmamaktadır.");
		 }else{
				alert(errorMessage);
	   }
	});
}

function currentTime(){
  var currentdate = new Date();
  var datetime =  currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
  console.log(datetime);
  return datetime;
}

function currentDay(){
  var dateObj = new Date();
  var month = ("0" + (dateObj.getMonth() + 1)).slice(-2); //months from 1-12
  var day = ("0" + dateObj.getDate()).slice(-2)
  var year = dateObj.getFullYear();
  return newdate = year + "-" + month + "-" + day;
}

// checks user status and then drect to them home pages.
function isUserSignIn(user){
  firebase.database().ref("Users").on("child_added",function(snapshot){
    firebase.database().ref("Users").child(snapshot.key).on("child_added",function(snapshot2){
      if(snapshot2.key == user.uid){
        if(snapshot2.val().status == "Admin"){
          // run code for admin
          document.getElementById("formAdminLogin").action = "home.html";
          document.getElementById("formAdminLogin").submit();
        }else if(snapshot2.val().status == "Concilor"){
          // run code for concilor
          document.getElementById("formAdminLogin").action = "concilorhome.html";
          document.getElementById("formAdminLogin").submit();
        }else{
          // run code for manager
          document.getElementById("formAdminLogin").action = "managerhome.html";
          document.getElementById("formAdminLogin").submit();
        }
      }
    });
  });
}
