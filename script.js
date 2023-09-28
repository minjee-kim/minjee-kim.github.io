// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() {
    const articleLinks = document.querySelectorAll("nav ul li a");
    const articles = document.querySelectorAll("main section");

    articleLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Remove the "#" character
            articles.forEach(article => {
                article.style.display = "none";
            });
            document.getElementById(targetId).style.display = "block";
        });
    });
});


// Function to show the main content
function showMainContent() {
    document.querySelector('.loading-spinner').style.display = 'none';
    document.querySelector('main').style.display = 'block';
}

// Wait for the entire page to load before showing the main content
window.onload = function () {
    showMainContent();
};


// Delay the display of the main content for 3 seconds (3000 milliseconds)
setTimeout(function () {
    showMainContent();
}, 3000);
