// Clear button
document.getElementById('clear-button').addEventListener('click', function(event) {
    // Get dots
    var elements = document.getElementsByClassName('dot');
    
    // Remove all Dots
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }

    // Stop propagation
    event.stopPropagation();
});

// Document Click
addEventListener('click', function(event) {
    // Check target
    if (event.target.id !== 'clear-button' && event.target.id !== 'dot-settings' && event.target.tagName !== 'INPUT' && event.target.tagName !== 'LABEL') {
        // Create dot
        var dot = document.createElement('div');
        dot.className = 'dot';

        // Get Dot Size
        var dotSize = document.getElementById('dot-size').value;
        // Get color
        var dotColor = document.getElementById('dot-color').value;

        // Set Dot Size
        dot.style.height = dotSize + 'px';
        dot.style.width = dotSize + 'px';
        // Set color
        dot.style.backgroundColor = dotColor;

        // Position dot
        dot.style.left = (event.pageX - (dotSize / 2)) + 'px';
        dot.style.top = (event.pageY - (dotSize / 2)) + 'px';

        // Append dot
        document.body.appendChild(dot);
    }
});
