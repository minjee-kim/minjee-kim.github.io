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


function showMainContent() {
    document.querySelector('.loading-spinner').style.display = 'none';
    document.querySelector('main').style.display = 'block';
}

// Simulate a loading delay (3 seconds)
setTimeout(function () {
    showMainContent();
}, 3000); // 3000 milliseconds (3 seconds)
