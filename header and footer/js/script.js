// alert("hke");


var icon = document.querySelectorAll("#faqs .faq #icon");



icon.forEach(function (value, index) {
  icon[index].addEventListener("click", function () {
    var faq = document.querySelectorAll('.faq');
    faq.forEach(function (value, index) {
      // if (value == index) return;
      // icon[index].classList.remove('rotate')
      // faq[index].classList.remove('increase');

    })

    icon[index].classList.toggle('rotate')
    faq[index].classList.toggle('increase');

  })

})



const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



var indexSlides = document.querySelectorAll('.slideShow');
slide_index = 1


function displaySlides(n) {
  if (n > indexSlides.length) {
    slide_index = 1
  }
  else if (n < 1) {
    slide_index = indexSlides.length
  }
  for (let i = 0; i < indexSlides.length; i++) {
    indexSlides[i].style.display = "none";
  }
  indexSlides[slide_index - 1].style.display = "block";
}


window.onload = function () {
  displaySlides(slide_index)
}

function nextSlide(n) {
  displaySlides(slide_index += n)
}
function previousSlide(n) {
  displaySlides(slide_index -= n)
}

setInterval(function () {
  slide_index += 1;
  displaySlides(slide_index)
}, 10000);


