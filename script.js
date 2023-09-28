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

// Function to hide the loading screen
function hideLoadingScreen() {
    document.querySelector('.loading-screen').style.display = 'none';
}

// Call the hideLoadingScreen() function after 3 seconds (3000 milliseconds)
setTimeout(hideLoadingScreen, 3000);
