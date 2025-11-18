// Your code here.
// Get the items container
const slider = document.querySelector('.items');

// Variables to track drag state
let isDown = false;           // Is mouse button pressed?
let startX;                   // Where did the drag start?
let scrollLeft;               // What was the scroll position when drag started?

// Mouse down - start dragging
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    
    // Get the starting position
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

// Mouse leave - stop dragging if mouse leaves container
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
    if (!isDown) return;  // Only drag if mouse is down
    
    e.preventDefault();
    
    // Calculate how far the mouse has moved
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;  // Multiply by 2 for faster scroll
    
    // Update scroll position
    slider.scrollLeft = scrollLeft - walk;
});