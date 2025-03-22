const images = [
    { class: 'image1', description: 'Description of City Skyline' },
    { class: 'image2', description: 'Description of Beach' },
    { class: 'image3', description: 'Description of Mountain' },
    { class: 'image4', description: 'Description of Tracks' },
    { class: 'image5', description: 'Description of Tree' }
];

let currentIndex = 0; // Current image index
let timer = 0; // Timer value
const imageElement = document.getElementById('carousel-image'); // Image element
const descriptionElement = document.getElementById('image-description'); // Description element
const timerElement = document.getElementById('timer'); // Timer display
const intervalTime = 4000; // 4-second interval
let isAutoAdvanceOn = true; // Track whether auto-advance is active

let slideInterval = setInterval(nextImage, intervalTime); // Start auto-advance

// Function to display the current image
function showImage(index) {
    imageElement.className = 'carousel-image ' + images[index].class;
    descriptionElement.textContent = images[index].description;
}

// Function to move to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    resetTimer();
}

// Function to move to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    resetTimer();
}

// Function to reset the timer and restart the interval
function resetTimer() {
    timer = 0; // Reset the timer
    if (isAutoAdvanceOn) {
        clearInterval(slideInterval); // Clear the existing interval
        slideInterval = setInterval(nextImage, intervalTime); // Restart the interval
    }
}

// Function to toggle auto-advance
function toggleAutoAdvance() {
    if (isAutoAdvanceOn) {
        clearInterval(slideInterval); // Stop the interval
        document.getElementById('toggle-auto-advance').textContent = 'Resume Auto-Advance';
    } else {
        slideInterval = setInterval(nextImage, intervalTime); // Resume the interval
        document.getElementById('toggle-auto-advance').textContent = 'Pause Auto-Advance';
    }
    isAutoAdvanceOn = !isAutoAdvanceOn; // Update the state
}

// Event listeners for buttons
document.getElementById('next-btn').addEventListener('click', nextImage);
document.getElementById('prev-btn').addEventListener('click', prevImage);
document.getElementById('toggle-auto-advance').addEventListener('click', toggleAutoAdvance);

// Timer logic to increment every second
setInterval(() => {
    timer += 1;
    timerElement.textContent = `Timer: ${timer}`;
}, 1000);

// Display the initial image
showImage(currentIndex);
