const images = [
    { class: 'image1', description: 'Description of City Skyline' },
    { class: 'image2', description: 'Description of Beach' },
    { class: 'image3', description: 'Description of Mountain' },
    { class: 'image4', description: 'Description of Tracks' },
    { class: 'image5', description: 'Description of Tree' }
];

let currentIndex = 0;
let timer = 0;
const imageElement = document.getElementById('carousel-image');
const descriptionElement = document.getElementById('image-description');
const timerElement = document.getElementById('timer');
const intervalTime = 4000;

let slideInterval = setInterval(nextImage, intervalTime);
let isAutoAdvanceOn = true;

function showImage(index) {
    imageElement.className = 'carousel-image ' + images[index].class;
    descriptionElement.textContent = images[index].description;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    resetInterval();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    resetInterval();
}

function resetInterval() {
    if (isAutoAdvanceOn) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextImage, intervalTime);
    }
    timer = 0;
}

function toggleAutoAdvance() {
    if (isAutoAdvanceOn) {
        clearInterval(slideInterval);
        document.getElementById('toggle-auto-advance').textContent = 'Resume Auto-Advance';
    } else {
        slideInterval = setInterval(nextImage, intervalTime);
        document.getElementById('toggle-auto-advance').textContent = 'Pause Auto-Advance';
    }
    isAutoAdvanceOn = !isAutoAdvanceOn;
}

document.getElementById('next-btn').addEventListener('click', nextImage);
document.getElementById('prev-btn').addEventListener('click', prevImage);
document.getElementById('toggle-auto-advance').addEventListener('click', toggleAutoAdvance);

setInterval(() => {
    timer += 1;
    timerElement.textContent = `Timer: ${timer}`;
}, 1000);

showImage(currentIndex);
