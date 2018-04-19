var state = false;
function showNav(){
    if(state){
        document.getElementById("mobile").style.height = "0px";
        document.getElementById("mobile-btn").style.backgroundColor = "#fff";
        state = false;
    }
    else{
        document.getElementById("mobile").style.height = "300px";
        document.getElementById("mobile-btn").style.backgroundColor = "#f1f1f1";
        state = true;
    }      
}


// Move Slides
var currentSlide = 1;
// Slides
var first = document.getElementById("slide0");
var second = document.getElementById("slide1");
var third = document.getElementById("slide2");


document.getElementById("right").addEventListener('click', moveRight);
function moveRight() {
    switch (currentSlide) {
        case 1:
            first.style.opacity = 0;
            second.style.opacity = 1;
            currentSlide = 2;
            break;
        case 2:
            second.style.opacity = 0;
            third.style.opacity = 1;
            currentSlide = 3;
            break;
        case 3:
            third.style.opacity = 0;
            first.style.opacity = 1;
            currentSlide = 1;
            break;
    }
}setInterval(moveRight, 5000);

document.getElementById("left").addEventListener('click', function () {
    switch (currentSlide) {
        case 1:
            first.style.opacity = 0;
            third.style.opacity = 1;
            currentSlide = 3;
            break;
        case 2:
            second.style.opacity = 0;
            first.style.opacity = 1;
            currentSlide = 1;
            break;
        case 3:
            third.style.opacity = 0;
            second.style.opacity = 1;
            currentSlide = 2;
            break;
    }
});