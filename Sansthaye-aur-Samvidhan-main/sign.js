document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Grab form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic form validation
    if (!name || !email || !password) {
        alert("Please fill in all fields.");
    } else {
        alert("Login successful, welcome " + name + "!");
        // You can add your login logic here, such as sending the data to a server
    }
});