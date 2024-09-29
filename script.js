const color = [ '#FFB3BA',
    '#FFDFBA', 
    '#FFFFBA', 
    '#BAFFC9', 
    '#BAE1FF', 
    '#FFABAB', 
    '#FFC3A0', 
    '#FF677D', 
    '#D4A5A5', 
    '#392F5A', 
    '#A8DADC', 
    '#F1FAEE', 
    '#F7B7A3', 
    '#FFE156', 
    '#FF6F61' ];

let currentColorIndex = 0;

function changeColor() {
    document.body.style.backgroundColor = color[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % color.length;

}


document.getElementById('colorButton').addEventListener('click', changeColor);