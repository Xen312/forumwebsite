function toggleVisibility(containerClass) {
    const container = document.querySelector(`.${containerClass} .pdf-list`);
    const hiddenItems = container.querySelectorAll('.hidden');

    const button = container.parentElement.querySelector('.see-more');
    
    // Check if the items are currently hidden or visible
    if (button.textContent === 'See more') {
        hiddenItems.forEach(item => item.style.display = 'flex'); // Show hidden items
        button.textContent = 'See less';
        container.style.maxHeight = container.scrollHeight + 'px'; // Expand the container
    } else {
        hiddenItems.forEach(item => item.style.display = 'none'); // Hide the items again
        button.textContent = 'See more';
        container.style.maxHeight = '200px'; // Return to original height
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.logo-slider');
    const logos = document.querySelectorAll('.logo');
    let currentIndex = 0;
  
    function slideLogos() {
      // Remove 'active' class from all logos
      logos.forEach(logo => logo.classList.remove('active'));
  
      // Move the slider to the next logo
      currentIndex = (currentIndex + 1) % logos.length;
      slider.style.transform = `translateX(-${currentIndex * 50}%)`;
  
      // Add 'active' class to the current logo for opacity effect
      logos[currentIndex].classList.add('active');
    }
  
    // Initial setup: make the first logo visible
    logos[currentIndex].classList.add('active');
  
    // Slide and fade the logos every 5 seconds in an infinite loop
    setInterval(slideLogos, 5000);
  });
  
  