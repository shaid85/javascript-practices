let button = document.getElementById('click');
console.log(button);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);

const newDiv = document.getElementsByTagName('div');
let createdElement = document.createElement('p');
createdElement.innerText = "This is new Dom Text";
newDiv[0].appendChild(createdElement);

let createdElement2 = document.createElement('b');
createdElement2.innerText = "This is new DOM Bold Text";
newDiv[0].replaceChild(createdElement2,createdElement);


const catBtn = document.getElementById('catBtn');
const catmenu = document.querySelector('.dropdown');

const toggleDropdown = () => {
    catmenu.classList.toggle("active");
}

catBtn.addEventListener("click", () => toggleDropdown());
