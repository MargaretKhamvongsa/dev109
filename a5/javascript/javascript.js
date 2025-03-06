// Image classes and descriptions
const images = [
    { class: 'image1', description: 'Description of Image 1' },
    { class: 'image2', description: 'Description of Image 2' },
    { class: 'image3', description: 'Description of Image 3' },
    { class: 'image4', description: 'Description of Image 4' },
    { class: 'image5', description: 'Description of Image 5' }
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

// Event listeners
document.getElementById('next-btn').addEventListener('click', nextImage);
document.getElementById('prev-btn').addEventListener('click', prevImage);

let slideInterval = setInterval(nextImage, intervalTime); // Slideshow interval

setInterval(() => {
    timer += 1; // Increment timer
    timerElement.textContent = `Timer: ${timer}`; // Update timer display
}, 1000);

// Initial image display
showImage(currentIndex);
