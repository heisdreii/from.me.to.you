// Password check for page 1
function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const correctPassword = "6 August";

    if (input === correctPassword) {
        window.location.href = "songs.html";
    } else {
        alert("Incorrect password");
    }
}

