// This code goes in script.js on the first page
const text = "hello there...omg, i cannot wait to show you what my corner of the web has to offer.....";
const typingSpeed = 100;
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        setTimeout(() => {
            // Add fade-out class to body after typing completes
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = "page2.html"; // Redirect to second page
            }, 1000); // Time for the fade-out effect before redirection
        }, 1000);
    }
}

window.onload = typeWriter;
