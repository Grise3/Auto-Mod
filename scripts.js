async function loadComponents() {
    try {
        const headerResponse = await fetch('header.html');
        const headerHtml = await headerResponse.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;

        const footerResponse = await fetch('footer.html');
        const footerHtml = await footerResponse.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        const links = document.querySelectorAll('nav ul li a');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.style.color = "white";
                link.style.fontWeight = "bold";
            }
        });
    } catch (error) {
        console.error("Error loading components:", error);
    }
}

window.onload = loadComponents;
