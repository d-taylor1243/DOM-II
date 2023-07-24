//import { text } from 'express';
import './less/index.less'

let navBar = Array.from(document.getElementsByClassName('nav')[0].children);
let bottomButtons = Array.from(document.getElementsByClassName('btn'));
let body = document.getElementsByTagName('body')[0];
let header = document.getElementsByTagName('header')[0];
let pText = Array.from(document.getElementsByTagName('p'));
let bodyImgs = Array.from(document.getElementsByClassName('img-content'))
const input = document.querySelector("input");

function textContentReset(str, element) {
    element.textContent = str;    
}

let dblClickE = function (event) {
    let content = event.target.textContent;
    let element = event.target;
    event.target.textContent = "You've double-clicked me!";
    setTimeout(textContentReset, 2000, content, element);
    
}

function zoom(event) {
    event.preventDefault();
    //event.target.setAttribute('style', 'transform: scale('+event.deltaY*(0.01)+')');
    //event.target.style.scale = event.target.style.scale + event.deltaY*(-0.01);
    let scale = event.target.scale += event.deltaY * -0.01;
    console.log(scale);
    event.target.scale = scale;
    event.target.style.transform = `scale(${scale})`
}

navBar.forEach(child => child.addEventListener('mouseover', e => e.target.style.backgroundColor = 'green'));
navBar.forEach(child => child.addEventListener('mouseout', e => e.target.style.backgroundColor = 'white'));
bottomButtons.forEach(button => button.addEventListener('mousedown', e => e.target.textContent = "You are firing a mousedown event!"));
bottomButtons.forEach(button => button.addEventListener('mouseup', e => e.target.textContent = "Sign Me Up!"));
//click is press and release on a mousebutton, mousedown is simply press
window.addEventListener('keydown', e => e.key == ('g' || 'G') ? body.style.backgroundColor = 'green' : body.style.backgroundColor = "");
window.addEventListener('load', e => console.log('page loaded! This could be a great event for running diagnostic checking functions.'));
header.getElementsByTagName('h1')[0].addEventListener('dblclick', e => dblClickE(e));
pText.forEach(p => p.addEventListener('click', e => e.target.style.color = 'red'));
pText.forEach(p => p.addEventListener('focus', e => e.target.style.color = 'blue'));
bodyImgs.forEach(img => img.scale = 1);
bodyImgs.forEach(img => img.addEventListener('wheel', e => e.target.outerHTML = ''));
document.body.addEventListener('mousemove', e => {const { clientX, clientY} = e});
document.body.addEventListener('mouseenter', e => e.target.style.fontWeight = 'bold');
document.body.addEventListener('mouseleave', e => e.target.style.fontWeight = 'initial');