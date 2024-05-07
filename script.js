// Add your JavaScript code here

window.onload = function() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Tartu,ee&units=metric&appid=6e10bbab8fbc4009241dd8a9b5fcd951')
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp);
            document.querySelector('.temperature').textContent = `${temperature}°C`;
        })
        .catch(error => console.error('Error:', error));

    // Check if slides and dots exist before calling showSlides
    let slides = document.getElementsByClassName("carousel-image");
    let dots = document.getElementsByClassName("dot");
    if (slides.length > 0 && dots.length > 0) {
        showSlides(slideIndex);
    }
};

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-image");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // This will hide all images
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  // This will display the current image
    dots[slideIndex-1].className += " active";
}




window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);

        fetch(this.action, {
            method: 'POST',
            body: formData
        })
        .then(function() {
            alert('Aitäh, info on saadetud');
        })
        .catch(function() {
            alert('Viga, info ei saadetud');
        });
    });
});