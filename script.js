const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    
    // Get starting X position - try both pageX and clientX
    startX = e.pageX || e.clientX;
    scrollLeft = slider.scrollLeft;
    
    // Prevent default behavior
    e.preventDefault();
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    
    // Get current X position
    const x = e.pageX || e.clientX;
    
    // Calculate distance moved
    const walk = (x - startX) * 3;
    
    // Update scroll
    slider.scrollLeft = scrollLeft - walk;
});
