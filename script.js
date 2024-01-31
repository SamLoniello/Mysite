function loadContent(section) {
    const contentDiv = document.getElementById('content');
    const poemIframe = document.getElementById('poem-iframe');
    document.querySelectorAll('.drawer-placement-left sl-menu-item').forEach(item => item.classList.remove('active'));
    document.getElementById(section).classList.add('active');

    switch (section) {
        case 'about':
            contentDiv.innerHTML = `
                <section id="introduction">
                    <h1>Welcome to My Page!</h1>
                    <p>Hi, I'm Sam Loniello... [brief introduction]</p>
                    <div id="photo-gallery">
                        <!-- Photo elements here -->
                    </div>
                </section>
                <section id="latest-news">
                    <h2>Latest News</h2>
                    <div class="news-content">
                        <!-- News articles/cards go here -->
                    </div>
                </section>
            `;
            poemIframe.style.display = 'none';
            break;
        case 'blog':
            contentDiv.innerHTML = '<h1>Blog</h1><p>Latest blog posts will be displayed here.</p>';
            poemIframe.style.display = 'none';
            break;
        case 'poems':
            contentDiv.innerHTML = '';
            poemIframe.style.display = 'block';
            break;
        case 'projects':
            contentDiv.innerHTML = '<h1>Projects</h1><p>Details of my projects will be displayed here.</p>';
            poemIframe.style.display = 'none';
            break;
        default:
            contentDiv.innerHTML = '<p>Select a section from the menu.</p>';
            poemIframe.style.display = 'none';
    }
}


(function initialize() {
    const drawer = document.querySelector('.drawer-placement-left');
    const openButton = drawer.nextElementSibling;
    openButton.addEventListener('click', () => drawer.show());
    loadContent('about'); // Load 'about' content by default on page load
})();
