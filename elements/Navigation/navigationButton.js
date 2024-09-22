var is_activated = false;

function navigation_popup(button) {
    var navigationPanel = document.getElementById('navigation-panel');
    button.classList.toggle("change");
    navigationPanel.classList.toggle("active");
    if (is_activated) {
        navigationPanel.classList.toggle("inactive");
    }else {
        is_activated = true
    }
    
    // if (navigationPanel.classList.contains('hidden')) {
    //     navigationPanel.classList.remove('hidden');
    // } else {
    //     navigationPanel.classList.add('hidden');
    // }
}