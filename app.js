var buttonElement = document.querySelector('#btn1');

var divChangeColor;

console.log(buttonElement)

function divCreator() {
    var divElement = document.createElement('div');
    divElement.setAttribute('class', 'divRed');
    divElement.setAttribute('onmouseover', 'colorChange()');

    divElement.style.backgroundColor = 'gray';
    divElement.style.width = 100;
    divElement.style.height = 100;
    divElement.style.margin = '1em';

    var divMain = document.querySelector('main');
    divMain.appendChild(divElement);

    divChangeColor = document.querySelectorAll('.divRed');

    if(divChangeColor !== undefined){
        console.log(divChangeColor);
    }else{
        console.log("igual a undefined");
    }
}

function colorChange(num = 0) {
    var newColor = getRandomColor();
    divChangeColor[num].style.backgroundColor = newColor;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

buttonElement.onclick = divCreator;





