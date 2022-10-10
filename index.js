/* universal window onload*/
window.onload = function(){
var x = localStorage.getItem("mode");
var y = document.getElementById("toggler");
document.getElementById("details-reset").click();

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

/* preloader */
setTimeout(function pra(){
document.getElementById("loader").style.top ="-200%";
document.body.classList.remove("loader");				
},5000);


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




/* details image input button */
document.getElementById("b-upload").onclick = function(){
document.getElementById("i-upload").click();				
}
/* details image input validation */
document.getElementById("details-submit").onclick = function(){
var x = document.getElementById("i-upload"); 
if(x.value ==""){
event.preventDefault();
alert("Please select image for DP");			
}		
}
/* details image input validation2 */
setInterval(function valli(){
var x = document.getElementById("i-upload"); 
var y = document.getElementById("i-upload-done");
if(x.value ==""){
y.style.display ="none";
}						
else{
y.style.display ="block";
}
},500);





/* chat toggle */
document.getElementById("chat-toggle").onclick = function(){
var x = document.getElementById("sidebar");
x.style.left ="-100%";		
document.body.classList.remove("side-blur");
document.body.classList.remove("point");
document.getElementById("chat").style.display ="block";			
document.getElementById("chat-close").style.display ="flex";				
document.body.classList.add("chat");
document.querySelector('a[href*="#one"]').click();
}

/* chat-close */
document.getElementById("chat-close").onclick = function(){
document.getElementById("chat").style.display ="none";					
document.getElementById("chat-close").style.display ="none";
document.body.classList.remove("chat");
}






/* dropdown */
document.getElementById("drop-more-one").onclick = function(){
var a = document.getElementById("drop-one")	;
var b = document.getElementById("drop-two")	;
var c = document.getElementById("drop-three");
var d = document.getElementById("drop-four")	;
var e = document.getElementById("drop-five")	;

var o = document.getElementById("drop-more-one");
var t = document.getElementById("drop-more-two");
var th = document.getElementById("drop-more-three");
var f = document.getElementById("drop-more-four");
var fi = document.getElementById("drop-more-five");


if(a.style.height =="130px"){
a.style.height ="50px";				
o.style.transform ="none"; 
}
else{
a.style.height ="130px";		
b.style.height ="50px";	
c.style.height ="50px";	
d.style.height ="50px";	
e.style.height ="50px";	

o.style.transform ="rotate(180deg)";
t.style.transform ="none";
th.style.transform ="none";		
f.style.transform ="none";
fi.style.transform ="none";		
}			
}







document.getElementById("drop-more-two").onclick = function(){
var a = document.getElementById("drop-one")	;
var b = document.getElementById("drop-two")	;
var c = document.getElementById("drop-three");
var d = document.getElementById("drop-four")	;
var e = document.getElementById("drop-five")	;

var o = document.getElementById("drop-more-one");
var t = document.getElementById("drop-more-two");
var th = document.getElementById("drop-more-three");
var f = document.getElementById("drop-more-four");
var fi = document.getElementById("drop-more-five");


if(b.style.height =="130px"){
b.style.height ="50px";				
t.style.transform ="none"; 
}
else{
b.style.height ="130px";		
a.style.height ="50px";	
c.style.height ="50px";	
d.style.height ="50px";	
e.style.height ="50px";	

t.style.transform ="rotate(180deg)";
o.style.transform ="none";
th.style.transform ="none";		
f.style.transform ="none";
fi.style.transform ="none";		
}			
}






document.getElementById("drop-more-three").onclick = function(){
var a = document.getElementById("drop-one")	;
var b = document.getElementById("drop-two")	;
var c = document.getElementById("drop-three");
var d = document.getElementById("drop-four")	;
var e = document.getElementById("drop-five")	;

var o = document.getElementById("drop-more-one");
var t = document.getElementById("drop-more-two");
var th = document.getElementById("drop-more-three");
var f = document.getElementById("drop-more-four");
var fi = document.getElementById("drop-more-five");


if(c.style.height =="130px"){
c.style.height ="50px";				
th.style.transform ="none"; 
}
else{
c.style.height ="130px";		
b.style.height ="50px";	
a.style.height ="50px";	
d.style.height ="50px";	
e.style.height ="50px";	

th.style.transform ="rotate(180deg)";
t.style.transform ="none";
o.style.transform ="none";		
f.style.transform ="none";
fi.style.transform ="none";		
}			
}





document.getElementById("drop-more-four").onclick = function(){
var a = document.getElementById("drop-one")	;
var b = document.getElementById("drop-two")	;
var c = document.getElementById("drop-three");
var d = document.getElementById("drop-four")	;
var e = document.getElementById("drop-five")	;

var o = document.getElementById("drop-more-one");
var t = document.getElementById("drop-more-two");
var th = document.getElementById("drop-more-three");
var f = document.getElementById("drop-more-four");
var fi = document.getElementById("drop-more-five");


if(d.style.height =="130px"){
d.style.height ="50px";				
f.style.transform ="none"; 
}
else{
d.style.height ="130px";		
b.style.height ="50px";	
c.style.height ="50px";	
a.style.height ="50px";	
e.style.height ="50px";	

f.style.transform ="rotate(180deg)";
t.style.transform ="none";
th.style.transform ="none";		
o.style.transform ="none";
fi.style.transform ="none";		
}			
}





document.getElementById("drop-more-five").onclick = function(){
var a = document.getElementById("drop-one")	;
var b = document.getElementById("drop-two")	;
var c = document.getElementById("drop-three");
var d = document.getElementById("drop-four")	;
var e = document.getElementById("drop-five")	;

var o = document.getElementById("drop-more-one");
var t = document.getElementById("drop-more-two");
var th = document.getElementById("drop-more-three");
var f = document.getElementById("drop-more-four");
var fi = document.getElementById("drop-more-five");


if(e.style.height =="130px"){
e.style.height ="50px";				
fi.style.transform ="none"; 
}
else{
e.style.height ="130px";		
b.style.height ="50px";	
c.style.height ="50px";	
d.style.height ="50px";	
a.style.height ="50px";	

fi.style.transform ="rotate(180deg)";
t.style.transform ="none";
th.style.transform ="none";		
f.style.transform ="none";
o.style.transform ="none";		
}			
}


/* finally, dropdown ended*/