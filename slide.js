let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

// Initialize the first image as active
images[currentIndex].classList.add('active');

// Function to change the image
function changeImage(direction) {
    // Remove 'active' class from the current image
    images[currentIndex].classList.remove('active');

    // Calculate the new index
    currentIndex = (currentIndex + direction + images.length) % images.length;

    // Add 'active' class to the new image
    images[currentIndex].classList.add('active');
}
