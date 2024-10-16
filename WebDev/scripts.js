
document.querySelectorAll('.toc a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        const content = targetSection.nextElementSibling;
        if (content && content.classList.contains('collapsible-content')) {
            content.style.display = 'block';
        }
    });
});

document.querySelectorAll('h2, h3').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        if (content && content.classList.contains('collapsible-content')) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
});
