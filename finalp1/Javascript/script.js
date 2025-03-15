
//Submit Form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const comment = document.getElementById('comment').value.trim();

    let errorMessages = [];

    // Validate Name
    if (!name) {
        errorMessages.push('Name is required.');
    }

    // Validate Email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        errorMessages.push('A valid email is required.');
    }

    // Validate Subject
    if (!subject) {
        errorMessages.push('Subject is required.');
    }

    // Validate Comment
    if (!comment) {
        errorMessages.push('Comment is required.');
    }

    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n')); // Show validation errors
    } else {
        alert('Thank you for your submission!');
        this.submit(); // Proceed to "thankyou.html"
    }
});

// JavaScript for Wild card page
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');

    // Log a message when the audio is played
    audio.addEventListener('play', () => {
        console.log('Music is now playing!');
    });

    // Show an alert when the video ends
    const video = document.querySelector('video');
    video.addEventListener('ended', () => {
        alert('Hope you enjoyed the video about space!');
    });
});
