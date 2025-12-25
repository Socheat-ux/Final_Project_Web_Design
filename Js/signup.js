function openSignup() {
    document.getElementById("signupModal").classList.remove("hidden");
}

function closeSignup() {
    document.getElementById("signupModal").classList.add("hidden");
}

function signupUser() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    const user = { name, email };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");
    closeSignup();
}

