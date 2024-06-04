// Add animation when the page loads
document.addEventListener("DOMContentLoaded", function() {
    animateHeader();
});

// Function to animate the header
function animateHeader() {
    var header = document.querySelector('header');
    header.style.opacity = '0';
    setTimeout(function() {
        header.style.transition = 'opacity 1s ease';
        header.style.opacity = '1';
    }, 500);
}
