// Password check for page 1
function checkPassword() {
    const input = document.getElementById('passwordInput').value;
      .getElementById("passwordInput")
  .value
  .replace(/\s+/g, " ")   // remove extra spaces inside
  .trim()                 // remove spaces at start & end
  .toLowerCase();         // ignore capital letters
    const correctPassword = "6 August";
     if (input === correctPassword) {
        window.location.href = "songs.html";
    } else {
        alert("Incorrect password");
    }
}


