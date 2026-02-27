// Password check for page 1
function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const correctPassword = "August 6th";

    if (input === correctPassword) {
        window.location.href = "songs.html";
    } else {
        alert("Incorrect password");
    }
}
