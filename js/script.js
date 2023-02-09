var icon = document.querySelectorAll("#faqs .faq #icon");

icon.forEach(function (value, i) {
  icon[i].addEventListener("click", function () {
    var faq = document.querySelectorAll(".faq");

    icon.forEach(function (el, index) {
      if (el == value) return;
      icon[index].classList.remove("rotate");
      faq[index].classList.remove("increase");
    });
    icon[i].classList.toggle("rotate");
    faq[i].classList.toggle("increase");
  });
});
let overlay = document.querySelector(".cohort-annoucement .overlay")
let annoucement = document.querySelector(".cohort-annoucement")
let closeBanner = document.querySelector(".close-banner")
overlay.addEventListener('click', function () {
  this.parentNode.classList.toggle("hide")
})
closeBanner.addEventListener("click", function() {
  annoucement.classList.toggle("hide")
})
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var indexSlides = document.querySelectorAll(".slideShow");
slide_index = 1;

function displaySlides(n) {
  if (n > indexSlides.length) {
    slide_index = 1;
  } else if (n < 1) {
    slide_index = indexSlides.length;
  }
  for (let i = 0; i < indexSlides.length; i++) {
    indexSlides[i].style.display = "none";
  }
  indexSlides[slide_index - 1].style.display = "block";
}

window.onload = function () {
  displaySlides(slide_index);
};

function nextSlide(n) {
  displaySlides((slide_index += n));
}
function previousSlide(n) {
  displaySlides((slide_index -= n));
}

setInterval(function () {
  slide_index += 1;
  displaySlides(slide_index);
}, 10000);

var chats = document.querySelector("#chat");
window.addEventListener("scroll", () => {
  chats.classList.toggle("blue", window.scrollY >= 700);
  // if (window.scrollY =100<=300){
  //   chats.style.color="#fec33b";
  // }
  // else if (window.scrollY >= 300){
  //   chats.style.color="blue";
  // }
  // else{
  //   chats.style.color="green";
  // }
});
