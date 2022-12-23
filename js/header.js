var drop = document.querySelector('#service-dropdown');
var dropArrow = document.querySelector('#arrow');
var dropArrowUp = document.querySelector('#arrow-up');
var bar = document.querySelector('#bar');
var time = document.querySelector('#time');
var link = document.querySelector('#links');
var body = document.querySelector('body');

document.addEventListener('click', ()=>{
    // drop.style.transform = "translateY(-500px)";

})



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

