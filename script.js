// ... (previous JS code) ...

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const contactButton = document.getElementById('contactButton');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

// Show modal on button click
contactButton.addEventListener('click', () => {
    contactModal.style.display = 'block';
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

// Close modal if the user clicks outside the modal
window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// Close modal on pressing the Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.style.display === 'block') {
        contactModal.style.display = 'none';
    }
});
