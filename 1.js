const carousel = document.querySelector('.carousel');
let currAngle = 0;

// To rotate automatically like the video
function autoRotate() {
    currAngle -= 0.5; // Change speed here
    carousel.style.transform = `rotateY(${currAngle}deg)`;
    requestAnimationFrame(autoRotate);
}

autoRotate();

// Optional: Add drag to rotate
let isDragging = false;
let startX;

window.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    let x = e.pageX;
    let dist = (x - startX) * 1.0;
    currAngle += dist;
    carousel.style.transform = `rotateY(${currAngle}deg)`;
    startX = x;
});

window.addEventListener('mouseup', () => isDragging = false);