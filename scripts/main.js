"use strict";
/* global $ */
$(".navbar-nav>li>a").click(function ()
 {
  $(".navbar-collapse").collapse("hide");
});

/* The greeting ;)

function myFunction(){
var myHeading = document.querySelector('.bienvenida');
var yourName = prompt('Why hello, please tell me your name..');
myHeading.innerHTML = 'Welcome to my page, ' + yourName ;
}
*/
var myHeading = document.querySelector('.bienvenida');

function mOver(obj) {
  obj.setAttribute ("width","310px");
  obj.setAttribute ("height","310px");
  obj.setAttribute ("border","5px");
  myHeading.innerHTML = "Yeah, that is me!"
}

function mOut(obj) {
  obj.setAttribute ("width","300px");
  obj.setAttribute ("height","300px");
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to my presentation page' ;
}
/*code for the extra fact*/
var i = 0;
var txt = 'I have a lot of creativity';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("extraFact").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
