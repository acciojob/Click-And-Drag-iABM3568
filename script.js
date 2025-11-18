// Get the items container
const slider = document.querySelector('.items');

// Variables to track drag state
let isDown = false;
let startX;
let scrollLeft;

// Mouse down - start dragging
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    
    // Store the actual pageX position
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
});

// Mouse leave - stop dragging
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

// Mouse up - stop dragging
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

// Mouse move - drag if mouse is down
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    
    // Calculate the distance moved
    const x = e.pageX;
    const walk = (x - startX) * 3;
    
    // Update scroll position
    slider.scrollLeft = scrollLeft - walk;
});