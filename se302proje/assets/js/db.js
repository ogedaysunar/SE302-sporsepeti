  var config = {
    apiKey: "AIzaSyDL--Ni0Jcno-IcsDefYq64ZHZQAi2gnsc",
    authDomain: "sporsepeti-65ea9.firebaseapp.com",
    databaseURL: "https://sporsepeti-65ea9.firebaseio.com",
    projectId: "sporsepeti-65ea9",
    storageBucket: "sporsepeti-65ea9.appspot.com",
    messagingSenderId: "932394206290"
  };
    firebase.initializeApp(config);


    // logout function
  function logout1(){
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

  // valid email function
    function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //----------------- LOADING ICON START. -------------------//
  function notLoading() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

  function showLoading() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("myDiv").style.display = "none";
  }
  //----------------- LOADING ICON FINISH. -------------------//


  //----------------- LOGİN RESET PASSWORD AND LOGOUT START. -------------------//
function login1(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if(validateEmail(email)){
    showLoading();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.

      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/internal-error') {
        alert('Sunucumuz beklenmeyen bir hata ile karşılaştı. Lütfen tekrar deneyiniz.');
      }else if(errorCode == 'auth/email-already-exists'){
        alert("Girdiğiniz e-mail başkası tarafından kullanılıyor. Lütfen başka bir e-mail giriniz.");
      }else if(errorCode == 'auth/wrong-password'){
        alert('Hatalı Şifre!');
      }else{
        alert("Bir hata oluştu. Sayfayı yenileyip tekrar deneyiniz.");
      }

      notLoading();
    });
  }else{
    alert("Lütfen geçerli bir e-mail girin.");
    notLoading();
  }
}

function resetSifre(){
  var resetEmail = prompt("Lütfen E-mailinizi giriniz.");
  sendPasswordReset(resetEmail);
}

function sendPasswordReset(email) {
  // [START sendpasswordemail]
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    // Password Reset Email Sent!
    alert('Şifre resetleme e-mailinize gönderilmiştir.');
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
      if (errorCode == 'auth/invalid-email') {
        alert("Lütfen geçerli bir e-mail giriniz.");
      } else if (errorCode == 'auth/user-not-found') {
        alert("Böyle bir kullanıcı bulunmamaktadır.");
      }
        console.log(error);
  });
  // END
}

// VERIFICATION E-MAIL
function sendEmailVerification() {
  // START sendemailverification
  firebase.auth().currentUser.sendEmailVerification().then(function() {
    // Email Verification sent!
  });
  //END
}
