document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  fetch('http://localhost:3000/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ name, email, message }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});