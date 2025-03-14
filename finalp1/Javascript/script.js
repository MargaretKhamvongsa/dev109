
// Submit Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default Entry
    window.location.href = 'thankyou.html'; // Navigate Thank You Screen
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
