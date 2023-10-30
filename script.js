// Home Page JS

const slider = document.querySelector('.slider');
let count = 0;

function slideRight() {
    count++;
    if (count > 5) {
        count = 0;
    }
    slider.style.transform = `translateX(-${count * 100}%)`;
}

function slideLeft() {
    count--;
    if (count < 0) {
        count = 5;
    }
    slider.style.transform = `translateX(-${count * 100}%)`;
}

setInterval(slideRight, 3000); 

