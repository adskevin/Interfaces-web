
var intervalo = 3000;

function slide1(){
    document.getElementById("banner").src = "img/banner1.png";
    setTimeout("slide2()", intervalo);
}

function slide2(){
    document.getElementById("banner").src = "img/banner2.png";
    setTimeout("slide3()", intervalo);
}

function slide3(){
    document.getElementById("banner").src = "img/banner3.png";
    setTimeout("slide4()", intervalo);
}

function slide4(){
    document.getElementById("banner").src = "img/banner4.png";
    setTimeout("slide1()", intervalo);
}