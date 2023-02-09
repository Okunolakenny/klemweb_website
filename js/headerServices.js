let servicesLinks = document.querySelectorAll(
  "#service-dropdown div:first-child a"
  );
  
  let coursesLink = document.querySelectorAll("#courses .content h3  a");
  
  let handleSection = function (ev) {
    ev.preventDefault();
    let target = this.dataset.target;
    sessionStorage.setItem("target", target);
    location.href = "services.html#mainServices";
  }

servicesLinks.forEach((el) => {
  el.addEventListener("click", handleSection);
});
coursesLink.forEach((el) => {
  el.addEventListener("click", handleSection);
});
