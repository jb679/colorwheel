console.log('Script Loaded...');

const colors = ['red', 'green', 'yellow'];

function paint(color) {
    console.log(color);
    const circle = document.getElementById('circleID');
    circle.style = `background-color:${color}`;    
    console.log(circle);
}


function paintRandom() {
    console.log('Random button clicked');
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    paint(randomColor);
}