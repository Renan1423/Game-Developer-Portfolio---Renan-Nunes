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

// Optional but highly recommended: Close the modal if the user clicks anywhere outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}