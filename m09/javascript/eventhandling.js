document.getElementById('clear-button').addEventListener('click', function(event) {
    var elements = document.getElementsByClassName('dot');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }

    event.stopPropagation();
});

addEventListener('click', function(event) {
    var dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = (event.pageX - (dot.offsetWidth / 2)) + 'px';
    dot.style.top = (event.pageY - (dot.offsetHeight / 2)) + 'px';

    var dotSize = document.getElementById('dot-size').value;
    var dotColor = document.getElementById('dot-color').value;
    dot.style.height = dotSize + 'px';
    dot.style.width = dotSize + 'px';
    dot.style.backgroundColor = dotColor;

    document.body.appendChild(dot);
});
