/* universal window onload*/
window.onload = function(){
var x = localStorage.getItem("mode");
var y = document.getElementById("toggler");


if(x == 1){
document.body.classList.add("light-theme");
document.body.classList.remove("dark-theme");
y.style.justifyContent ="flex-end";
}
else if(x == 2){
document.body.classList.add("dark-theme");	
document.body.classList.remove("light-theme");
y.style.justifyContent ="flex-start";			
}
else{
document.body.classList.add("dark-theme");	
document.body.classList.remove("light-theme");
y.style.justifyContent ="flex-start";			
}
}




/* dark mode together */
document.getElementById("toggler").onclick = function(){
var x = document.getElementById("toggler"); 

if(x.style.justifyContent ==="flex-end") {
x.style.justifyContent ="flex-start";
document.body.classList.add("dark-theme");
document.body.classList.remove("light-theme");
localStorage.setItem("mode", 2);		
}
else{
x.style.justifyContent ="flex-end";	
document.body.classList.add("light-theme");			
document.body.classList.remove("dark-theme");	
localStorage.setItem("mode", 1);
}				
}


/* opening menu */
document.getElementById("menu").onclick = function(){
var x = document.getElementById("sidebar");
x.style.left ="0";		
document.body.classList.add("side-blur");
document.body.classList.add("point");
}

/* closing menu */
document.getElementById("close").onclick = function(){
var x = document.getElementById("sidebar");
x.style.left ="-100%";		
document.body.classList.remove("side-blur");
document.body.classList.remove("point");
}
/* closing menu onclick any link */
var elements = document.getElementsByTagName('a'); for(var i = 0, len = elements.length; i < len; i++) { elements[i].onclick = function () { 
var x = document.getElementById("sidebar");
x.style.left ="-100%";		
document.body.classList.remove("side-blur");
document.body.classList.remove("point");
} }









/* scrollspy */

let section = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('#side-links a');

window.onscroll = () =>{
document.getElementById("notification").style.display ="flex";
section.forEach(sec =>{

let top = window.scrollY;

let offset = sec.offsetTop - 200;

let height = sec.offsetHeight;

let id = sec.getAttribute('id');

if(top >= offset && top < offset + height){

navLinks.forEach(links =>{

links.classList.remove('active');

document.querySelector('#side-links a[href*="'+ id +'"]').classList.add("active");

});

};

});
 
};



document.querySelector('a[href*="#one"]').onclick = function(){
var x = document.getElementById("sidebar");
x.style.left ="-100%";		
document.body.classList.remove("side-blur");
document.body.classList.remove("point");
document.getElementById("one").scrollTo(0,0);
}
