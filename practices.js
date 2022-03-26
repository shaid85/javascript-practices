let button = document.getElementById('click');
console.log(button);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);

const newDiv = document.getElementsByTagName('div');
let createdElement = document.createElement('p');
createdElement.innerText = "This is new Dom Text";
newDiv[0].appendChild(createdElement);
