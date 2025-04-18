// Hide Password / EYE
const showHiddenPassword = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)

    iconEye.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";
        iconEye.classList.remove("ri-eye-off-line");
        iconEye.classList.add("ri-eye-line");
    } else {
        input.type = "password";
        iconEye.classList.remove("ri-eye-line");
        iconEye.classList.add("ri-eye-off-line");
    }
    });
};
showHiddenPassword('login-pass', 'login-eye');

// Login credensials
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;
  
    // Static credentials
    const correctEmail = "admin@tyohar.com";
    const correctPassword = "1";
  
    if (email === correctEmail && password === correctPassword) {
      // Redirect to homescreen.html
      window.location.href = "./html/homescreen.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });




  