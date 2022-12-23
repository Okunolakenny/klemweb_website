// navigation bar
var drop = document.querySelector('#service-dropdown');
var dropArrow = document.querySelector('#arrow');
var dropArrowUp = document.querySelector('#arrow-up');
var bar = document.querySelector('#bar');
var time = document.querySelector('#time');
var link = document.querySelector('#links')



bar.onclick = function () {
    bar.style.display = "none";
    time.style.display = "block";
    link.style.transform = "translateY(0)";

}

time.onclick = function () {
    time.style.display = "none";
    bar.style.display = "block";
    link.style.transform = "translateY(-180vh)";

}
dropArrow.onclick = function () {

    dropArrow.style.visibility = "hidden";
    dropArrowUp.style.visibility = "visible";
    drop.style.transform = "translateY(0)";

}

dropArrowUp.onclick = function () {

    dropArrowUp.style.visibility = "hidden";
    dropArrow.style.visibility = "visible";
    drop.style.transform = "translateY(-500px)";

}
// footer year update
var year = new Date().getFullYear();

document.querySelector('#footer-date').innerHTML = year;

// faq integration
var icon = document.querySelectorAll("#faqs .faq #icon");



icon.forEach(function (value, index) {
  icon[index].addEventListener("click", function () {
    var faq = document.querySelectorAll('.faq');
    faq.forEach(function (value, index) {
 })
icon[index].style.transition=".5s ease-in-out";
    icon[index].classList.toggle('rotate')
    faq[index].classList.toggle('increase');

  })

})

// students swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });