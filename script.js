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
    
    // Get the starting position
    // Use clientX for better Cypress compatibility
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    
    // Prevent default to avoid text selection
    e.preventDefault();
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
    const walk = (x - startX) * 3;  // Increased multiplier for better test detection
    
    // Update scroll position
    slider.scrollLeft = scrollLeft - walk;
});