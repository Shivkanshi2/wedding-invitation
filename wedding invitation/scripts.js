// JavaScript for additional interactive animations
document.addEventListener("DOMContentLoaded", () => {
    const highlights = document.querySelectorAll('.highlight');

    highlights.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate-highlight');
        }, index * 500); // Animates each highlight one after another
    });
});
