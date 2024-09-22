document.addEventListener("DOMContentLoaded", function() {
    // Example: Alert when a link is clicked
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            alert('You clicked a link to ' + this.innerText);
        });
    });
});

function focusOnSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
