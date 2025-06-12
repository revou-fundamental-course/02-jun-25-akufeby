function showWelcome() {
  const name = document.getElementById('nameInput').value;
  const welcomeMessage = document.getElementById('welcome-message');
  welcomeMessage.textContent = `Hi ${name}!`;
}

function validateForm() {
  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  document.getElementById('formOutput').innerHTML = `
    <h3>Submitted Info:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  return false; // prevent form from refreshing
}
