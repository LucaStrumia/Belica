let btnMenu = document.getElementById('btn-menu');
let mainNav = document.getElementById('main-nav');
btnMenu.addEventListener('click', function(){
  mainNav.classList.toggle('mostrar');
});

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const slider2 = document.querySelector("#slider2");
let sliderSection2 = document.querySelectorAll(".slider__section2");
let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];

const slider3 = document.querySelector("#slider3");
let sliderSection3 = document.querySelectorAll(".slider__section3");
let sliderSectionLast3 = sliderSection3[sliderSection3.length -1];

const slider4 = document.querySelector("#slider4");
let sliderSection4 = document.querySelectorAll(".slider__section4");
let sliderSectionLast4 = sliderSection4[sliderSection4.length -1];

const slider5 = document.querySelector("#slider5");
let sliderSection5 = document.querySelectorAll(".slider__section5");
let sliderSectionLast5 = sliderSection4[sliderSection4.length -1];


const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

const btnLeft2 = document.querySelector("#btn-left2");
const btnRight2 = document.querySelector("#btn-right2");

const btnLeft3 = document.querySelector("#btn-left3");
const btnRight3 = document.querySelector("#btn-right3");

const btnLeft4 = document.querySelector("#btn-left4");
const btnRight4 = document.querySelector("#btn-right4");

const btnLeft5 = document.querySelector("#btn-left5");
const btnRight5 = document.querySelector("#btn-right5");

const btnLeft6 = document.querySelector("#btn-left6");
const btnRight6 = document.querySelector("#btn-right6");

const btnLeft7 = document.querySelector("#btn-left7");
const btnRight7 = document.querySelector("#btn-right7");

const btnLeft8 = document.querySelector("#btn-left8");
const btnRight8 = document.querySelector("#btn-right8");

const btnLeft9 = document.querySelector("#btn-left9");
const btnRight9 = document.querySelector("#btn-right9");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);

slider3.insertAdjacentElement('afterbegin', sliderSectionLast3);

slider4.insertAdjacentElement('afterbegin', sliderSectionLast4);

slider5.insertAdjacentElement('afterbegin', sliderSectionLast5);


function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}
function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Next2() {
  let sliderSectionFirst2 = document.querySelectorAll(".slider__section2")[0];
  slider2.style.marginLeft = "-145%";
  slider2.style.transition = "all 0.5s";
  setTimeout(function(){
    slider2.style.transition = "none";
    slider2.insertAdjacentElement('beforeend', sliderSectionFirst2);
    slider2.style.marginLeft = "-100%";
  }, 500);
}
function Prev2() {
  let sliderSection2 = document.querySelectorAll(".slider__section2");
  let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];
  slider2.style.marginLeft = "-55%";
  slider2.style.transition = "all 0.5s";
  setTimeout(function(){
    slider2.style.transition = "none";
    slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);
    slider2.style.marginLeft = "-100%";
  }, 500);
}

function Next3() {
  let sliderSectionFirst3 = document.querySelectorAll(".slider__section3")[0];
  slider3.style.marginLeft = "-145%";
  slider3.style.transition = "all 0.5s";
  setTimeout(function(){
    slider3.style.transition = "none";
    slider3.insertAdjacentElement('beforeend', sliderSectionFirst3);
    slider3.style.marginLeft = "-100%";
  }, 500);
}
function Prev3() {
  let sliderSection3 = document.querySelectorAll(".slider__section3");
  let sliderSectionLast3 = sliderSection3[sliderSection3.length -1];
  slider3.style.marginLeft = "-55%";
  slider3.style.transition = "all 0.5s";
  setTimeout(function(){
    slider3.style.transition = "none";
    slider3.insertAdjacentElement('afterbegin', sliderSectionLast3);
    slider3.style.marginLeft = "-100%";
  }, 500);
}

function Next4() {
  let sliderSectionFirst4 = document.querySelectorAll(".slider__section4")[0];
  slider4.style.marginLeft = "-145%";
  slider4.style.transition = "all 0.5s";
  setTimeout(function(){
    slider4.style.transition = "none";
    slider4.insertAdjacentElement('beforeend', sliderSectionFirst4);
    slider4.style.marginLeft = "-100%";
  }, 500);
}
function Prev4() {
  let sliderSection4 = document.querySelectorAll(".slider__section4");
  let sliderSectionLast4 = sliderSection4[sliderSection4.length -1];
  slider4.style.marginLeft = "-55%";
  slider4.style.transition = "all 0.5s";
  setTimeout(function(){
    slider4.style.transition = "none";
    slider4.insertAdjacentElement('afterbegin', sliderSectionLast4);
    slider4.style.marginLeft = "-100%";
  }, 500);
}

function Next5() {
  let sliderSectionFirst5 = document.querySelectorAll(".slider__section5")[0];
  slider5.style.marginLeft = "-145%";
  slider5.style.transition = "all 0.5s";
  setTimeout(function(){
    slider5.style.transition = "none";
    slider5.insertAdjacentElement('beforeend', sliderSectionFirst5);
    slider5.style.marginLeft = "-100%";
  }, 500);
}
function Prev5() {
  let sliderSection5 = document.querySelectorAll(".slider__section5");
  let sliderSectionLast5 = sliderSection5[sliderSection5.length -1];
  slider5.style.marginLeft = "-55%";
  slider5.style.transition = "all 0.5s";
  setTimeout(function(){
    slider5.style.transition = "none";
    slider5.insertAdjacentElement('afterbegin', sliderSectionLast5);
    slider5.style.marginLeft = "-100%";
  }, 500);
}

function Next6() {
  let sliderSectionFirst3 = document.querySelectorAll(".slider__section3")[0];
  slider3.style.marginLeft = "-20 %";
  slider3.style.transition = "all 0s";
  setTimeout(function(){
    slider3.style.transition = "none";
    slider3.insertAdjacentElement('beforeend', sliderSectionFirst3);
    slider3.style.marginLeft = "0%";
  }, 0);
}
function Prev6() {
  let sliderSection3 = document.querySelectorAll(".slider__section3");
  let sliderSectionLast3 = sliderSection3[sliderSection3.length -1];
  slider3.style.marginLeft = "-10";
  slider3.style.transition = "all 0s";
  setTimeout(function(){
    slider3.style.transition = "none";
    slider3.insertAdjacentElement('afterbegin', sliderSectionLast3);
    slider3.style.marginLeft = "-0%";
  }, 0);
}

function Next7() {
  let sliderSectionFirst5 = document.querySelectorAll(".slider__section5")[0];
  slider5.style.marginLeft = "-20 %";
  slider5.style.transition = "all 0s";
  setTimeout(function(){
    slider5.style.transition = "none";
    slider5.insertAdjacentElement('beforeend', sliderSectionFirst5);
    slider5.style.marginLeft = "0%";
  }, 0);
}
function Prev7() {
  let sliderSection5 = document.querySelectorAll(".slider__section5");
  let sliderSectionLast5 = sliderSection5[sliderSection5.length -1];
  slider5.style.marginLeft = "-10";
  slider5.style.transition = "all 0s";
  setTimeout(function(){
    slider5.style.transition = "none";
    slider5.insertAdjacentElement('afterbegin', sliderSectionLast5);
    slider5.style.marginLeft = "-0%";
  }, 0);
}

function Next8() {
  let sliderSectionFirst2 = document.querySelectorAll(".slider__section2")[0];
  slider2.style.marginLeft = "-20 %";
  slider2.style.transition = "all 0s";
  setTimeout(function(){
    slider2.style.transition = "none";
    slider2.insertAdjacentElement('beforeend', sliderSectionFirst2);
    slider2.style.marginLeft = "0%";
  }, 0);
}
function Prev8() {
  let sliderSection2 = document.querySelectorAll(".slider__section2");
  let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];
  slider2.style.marginLeft = "-10";
  slider2.style.transition = "all 0s";
  setTimeout(function(){
    slider2.style.transition = "none";
    slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);
    slider2.style.marginLeft = "-0%";
  }, 0);
}
function Next9() {
  let sliderSectionFirst4= document.querySelectorAll(".slider__section4")[0];
  slider4.style.marginLeft = "-20 %";
  slider4.style.transition = "all 0s";
  setTimeout(function(){
    slider4.style.transition = "none";
    slider4.insertAdjacentElement('beforeend', sliderSectionFirst4);
    slider4.style.marginLeft = "0%";
  }, 0);
}
function Prev9() {
  let sliderSection4 = document.querySelectorAll(".slider__section4");
  let sliderSectionLast4 = sliderSection4[sliderSection4.length -1];
  slider4.style.marginLeft = "-10";
  slider4.style.transition = "all 0s";
  setTimeout(function(){
    slider4.style.transition = "none";
    slider4.insertAdjacentElement('afterbegin', sliderSectionLast4);
    slider4.style.marginLeft = "-0%";
  }, 0);
}

btnRight.addEventListener('click', function(){
  Next();
});
btnLeft.addEventListener('click', function(){
  Prev();
});
setInterval(function(){
  Next();
}, 5000);

btnRight2.addEventListener('click', function(){
  Next2();
});
btnLeft2.addEventListener('click', function(){
  Prev2();
});

btnRight3.addEventListener('click', function(){
  Next3();
});
btnLeft3.addEventListener('click', function(){
  Prev3();
});

btnRight4.addEventListener('click', function(){
  Next4();
});
btnLeft4.addEventListener('click', function(){
  Prev4();
});

btnRight5.addEventListener('click', function(){
  Next5();
});
btnLeft5.addEventListener('click', function(){
  Prev5();
});

btnRight6.addEventListener('click', function(){
  Next6();
});
btnLeft6.addEventListener('click', function(){
  Prev6();
});

btnRight7.addEventListener('click', function(){
  Next7();
});
btnLeft7.addEventListener('click', function(){
  Prev7();
});

btnRight8.addEventListener('click', function(){
  Next8();
});
btnLeft8.addEventListener('click', function(){
  Prev8();
});

btnRight9.addEventListener('click', function(){
  Next9();
});
btnLeft9.addEventListener('click', function(){
  Prev9();
});

$(document).ready(function() {
  $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });
});