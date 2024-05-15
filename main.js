window.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('myForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      fetch('https://cop-meiler.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ name, email, message }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          form.reset(); // Reset the form
          alert('Aitäh, kiri saadetud'); // Display a message
        })
        .catch(error => {
          console.error(error);
          alert('Kirja ei õnnestunud saata');
        });
    });
  } else {
    console.error('No element with id "myForm" found');
  }
});