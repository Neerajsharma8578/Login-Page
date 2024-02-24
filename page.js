document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Here you can implement your login logic, for example, sending data to a server and validating credentials
    console.log("Login clicked with username: " + username + " and password: " + password);
});

document.getElementById("signupForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    // Here you can implement your sign up logic, for example, sending data to a server and creating a new user
    console.log("Sign Up clicked with new username: " + newUsername + " and password: " + newPassword);
});