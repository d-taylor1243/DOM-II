import { text } from 'express';
import './less/index.less'

let navBar = Array.from(document.getElementsByClassName('nav')[0].children);
let bottomButtons = Array.from(document.getElementsByClassName('btn'));
let body = document.getElementsByTagName('body')[0];
let header= document.getElementsByTagName('header')[0];
function textContentReset(str, element) {
    element.textContent = str;    
}

//let dblClickE = function (event) {
   // let content = event.target.textContent;
    //let element = event.target;
    //event.target.textContent = "You've double-clicked me!";
    //setTimeout(textContentReset(content, element), 2000);
//}


navBar.forEach(child => child.addEventListener('mouseover', e => e.target.style.backgroundColor = 'green'));
navBar.forEach(child => child.addEventListener('mouseout', e => e.target.style.backgroundColor = 'white'));
bottomButtons.forEach(button => button.addEventListener('mousedown', e => e.target.textContent = "You are firing a mousedown event!"));
bottomButtons.forEach(button => button.addEventListener('mouseup', e => e.target.textContent = "Sign Me Up!"));
//click is press and release on a mousebutton, mousedown is simply press
window.addEventListener('keydown', e => e.code == 'g' || 'G' ? body.style.backgroundColor = 'green' : '');
window.addEventListener('load', e => console.log('page loaded! This could be a great event for running diagnostic checking functions.'));
//header.getElementsByTagName('h1')[0].addEventListener('dblclick', e => dblClickE(e));