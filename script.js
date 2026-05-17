// Carousel Navigation Logic
function moveCarousel(index) {
    const carousel = document.getElementById('mainCarousel');
    // Move viewport horizontally
    carousel.style.transform = `translateX(-${index * 100}vw)`;
}

// Accordion Card Logic
function toggleCard(element) {
    // Check if it's already expanded
    const isExpanded = element.classList.contains('expanded');
    
    // Close all other cards before opening this one
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.classList.remove('expanded'));

    // Toggle the clicked one
    if (!isExpanded) {
        element.classList.add('expanded');
    }
}

function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    
    // Display the modal via flexbox to keep it centered
    modal.style.display = 'flex'; 
    modalImg.src = imgSrc;
}

// Close the modal when clicking the X
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// --- Dark Mode Logic ---
function toggleTheme() {
    const rootElement = document.documentElement;
    const currentTheme = rootElement.getAttribute('data-theme');
    const toggleIcon = document.querySelector('#themeToggle i');

    if (currentTheme === 'dark') {
        // Switch to Light Mode
        rootElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        toggleIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        // Switch to Dark Mode
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

// Check for saved user preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const toggleIcon = document.querySelector('#themeToggle i');
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
    }
});

// Optional but highly recommended: Close the modal if the user clicks anywhere outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}