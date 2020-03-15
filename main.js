"use strict";
// ----------theme changer-----------------
document
  .getElementById("change-theme-btn")
  .addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
  });
//----------Slider----------
let responsiveSlider = function() {
  let slider = document.getElementById("slider");
  let sliderWidth = slider.offsetWidth;
  let slideList = document.getElementById("slideWrap");
  let count = 1;
  let items = slideList.querySelectorAll("li").length;
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");

  window.addEventListener("resize", function() {
    sliderWidth = slider.offsetWidth;
  });

  let prevSlide = function() {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  let nextSlide = function() {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });

  setInterval(function() {
    nextSlide();
  }, 8000);
};

window.onload = function() {
  responsiveSlider();
};

//------fancy smansy------//
const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

//--------dropzone-----------//

function setup() {
  let canvas = createCanvas(200, 200);
  background(0);

  canvas.drop(gotFile);
}

function gotFile(file) {
  createP(file.name + "" + file.size);
  let img = createImg(file.data);
  img.size(100, 100);
}
