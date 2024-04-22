let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let secland = document.querySelector(".sec-land")
let show = document.getElementById("show");
let show2 = document.getElementById("show2");
let show3 = document.getElementById("show3");
let show4 = document.getElementById("show4");
let show5 = document.getElementById("show5");
let page = document.querySelector(".page");
let pagethawr = document.querySelector(".Thawr-Mount")
let pageHira = document.querySelector(".Hira")
let pageAishah = document.querySelector(".Aishah")
let pageMuseums = document.querySelector(".Museums")
let open  = document.getElementById("open");
let close  = document.getElementById("close");
let menu = document.querySelector(".menu");

// menu app
open.onclick = function(){
    menu.style.display = 'block';
    open.style.display = 'none';
    close.style.display = "block";
}
close.onclick = function(){
    close.style.display = "none";
    menu.style.display = 'none';
    open.style.display = 'block';
}



// pages add
show.onclick = function(){
    page.style.display = 'block';
    secland.style.display = 'none';

}
show2.onclick = function(){
    pagethawr.style.display = 'block';
    secland.style.display = 'none';


}
show3.onclick = function(){
    pageHira.style.display = 'block';
    secland.style.display = 'none';


}
show4.onclick = function(){
    pageAishah.style.display = 'block';
    secland.style.display = 'none';


}
show5.onclick = function(){
    pageMuseums.style.display = 'block';
    secland.style.display = 'none';


}



