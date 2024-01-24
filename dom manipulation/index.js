//1. add a <p> with red text that says 'hey im red'
const pElement = document.createElement('p');
document.body.appendChild(pElement);
pElement.innerHTML = 'hey im red!';
pElement.style.color = "red"


//2. an h3 with blue text that says "I'm a blue h3"
const h3Element = document.createElement('h3');
document.body.appendChild(h3Element);
h3Element.textContent = "I'm a blue h3!"
h3Element.style.color = "blue";


//3. a <div> with a black border and pink background color with the following elements inside of it:
//another <h1> that says “I’m in a div”
//a <p> that says “ME TOO!”
const div = document.createElement('div');
document.body.appendChild(div);
div.style.cssText = 'border-color: black; background-color: pink;';

//EDIT CLASS OR ADD ID ATTRIBUTE
div.setAttribute('id', 'new-container')

//ADD CLASS ATTRIBUTE
div.classList.add('new')

const h1 = document.createElement('h1')
h1.textContent = "I'm in a div";

//places h1 inside of the div
div.appendChild(h1);

const para = document.createElement('p');
div.appendChild(para);
para.textContent = 'ME TOO!'


//4. adding element before another element

// let h1Element = document.getElementById('intro-text');

// let olElement = document.createElement('ol');

// let h3Element = document.querySelector('h3');

// document.body.insertBefore(olElement, h3Element)


