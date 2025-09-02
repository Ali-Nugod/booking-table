let email = document.getElementById("email");
let error = document.querySelector(".error");
let form = document.getElementById("signupForm");

email.onfocus = function() {
  error.style.display = 'none';
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
  
    if (email.value.trim() === "") {
      error.style.display= "block";
    } else {
      window.location.href = "login.html";
    }
});
