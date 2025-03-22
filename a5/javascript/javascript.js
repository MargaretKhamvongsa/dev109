// Image classes and descriptions
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
const intervalTime = 4000; // 4 seconds interval

// Display image and description
function showImage(index) {
    imageElement.className = 'carousel-image ' + images[index].class;
    descriptionElement.textContent = images[index].description;
}

// Next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    resetInterval();
}

// Previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    resetInterval();
}

// Reset interval and timer
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextImage, intervalTime);
    timer = 0;
}

let isAutoAdvanceOn = true; // Track whether auto-advance is active

// Function to toggle auto-advance
function toggleAutoAdvance() {
    if (isAutoAdvanceOn) {
        clearInterval(slideInterval); // Stop the slideshow
        document.getElementById('toggle-auto-advance').textContent = 'Resume Auto-Advance';
    } else {
        slideInterval = setInterval(nextImage, intervalTime); // Resume the slideshow
        document.getElementById('toggle-auto-advance').textContent = 'Pause Auto-Advance';
    }
    isAutoAdvanceOn = !isAutoAdvanceOn; // Toggle the state
}

// Event listeners
document.getElementById('toggle-auto-advance').addEventListener('click', toggleAutoAdvance);
document.getElementById('next-btn').addEventListener('click', nextImage);
document.getElementById('prev-btn').addEventListener('click', prevImage);

let slideInterval = setInterval(nextImage, intervalTime); // Slideshow interval

setInterval(() => {
    timer += 1; // Increment timer
    timerElement.textContent = `Timer: ${timer}`; // Update timer display
}, 1000);

// Initial image display
showImage(currentIndex);
