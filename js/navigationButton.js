function navigation_popup(button) {
    var navigationPanel = document.getElementById('navigation-panel');
    button.classList.toggle("change");
    if (navigationPanel.classList.contains('hidden')) {
        navigationPanel.classList.remove('hidden');
    } else {
        navigationPanel.classList.add('hidden');
    }
}