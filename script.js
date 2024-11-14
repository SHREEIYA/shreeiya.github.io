const text = "hello there...omg, i cannot wait to show you what my corner of the web has to offer.....";
const typingSpeed = 100; // Speed of typing in milliseconds
let index = 0;

// Target the span for the typewriter effect
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        // Start the fade-out effect once typing is complete
        setTimeout(transitionToNextPage, 1000); // Delay for a short pause
    }
}

// Function to handle the fade-out and redirection
function transitionToNextPage() {
    document.body.classList.add('fade-out'); // Add fade-out class to body
    setTimeout(() => {
        window.location.href = "page 2.html"; // Replace with the URL of your next page
    }, 1000); // Delay to allow fade-out animation to complete
}

window.onload = typeWriter; // Start typing when the page loads

