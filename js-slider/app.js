const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach((slide, idx) => {
    slide.style.left = `${idx * 100}%`;
});

const slidelength = slides.length;
const backward = () => {
    // console.log("Backward Clicked", counter, slidelength);
    if (counter < 0) {
        counter += 1;
        slideImage(counter);
    }
};
const forward = () => {
    // console.log("Forward Clicked", counter, slidelength);
    if (counter > -1 * (slidelength - 1)) {
        counter -= 1;
        slideImage(counter);
    } else {
        slideImage((counter = 0));
    }
};
const slideImage = (counter) => {
    slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${counter * 100}%)`;
    });
};
