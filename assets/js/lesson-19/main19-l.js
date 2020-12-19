console.log('Lesson 19');

window.document.getElementById("header");
console.log(window.document.getElementById("header"));


//window.location = '';

console.log();

/*let html = document.children[0];

for (let i = 0; i < html.children.length; i++) {
    let child = html.children[i];

    console.log(child.tagName.toLowerCase());

    for (let j = 0; j < child.children.length; j++) {
        let innerChild = child.children[j];

        console.log(`|---${innerChild.tagName.toLowerCase()}`);
    }
}*/


//const header = document.getElementById('header');
//console.log('header by id', header);

//const pByClass = document.getElementsByClassName('paragraph');
//console.log('paragraph', pByClass);

//const pByTag = document.getElementsByTagName('p');
//console.log('pByTag', pByTag);

/*const header = document.querySelector('#header');
const pByClass = document.querySelectorAll('.paragraph');
const pByTag = document.querySelectorAll('p');
console.log('header by id', header);
console.log('paragraph', pByClass);
console.log('pByTag', pByTag);
pByClass.forEach((el) => console.log(el));
*/

/*
const el = document.querySelector('#header');
console.log('el', el);
*/



const list = document.querySelector('ul');
const pointer = null;

function handler(e) {
    let target = e.target;

    console.log();

    if (target.nodeName === 'LI') {
        target.style.color = 'red';
        target.style.fontWeight = 'bold';

        if (pointer !== null) {
            pointer.removeAttribute('style');
        }

        pointer = target;
    }
}

list.addEventListener('click', handler);









