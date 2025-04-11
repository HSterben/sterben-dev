document.addEventListener('DOMContentLoaded', function() {
    // Navbar animation
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.add('animate');
    }

    // Existing sigil animation code
    const sigilPath = document.getElementById('sigil-path');
    if (sigilPath) {
        // Reset the animation
        sigilPath.style.animation = 'none';
        sigilPath.offsetHeight; // Trigger reflow
        sigilPath.style.animation = 'draw 5s ease forwards 0.7s';
    }
    console.log("Done");
}); 