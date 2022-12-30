let servicesLinks = document.querySelectorAll(
  "#service-dropdown div:first-child a"
);

servicesLinks.forEach((el) => {
  el.addEventListener("click", function (ev) {
    ev.preventDefault();
    let target = this.dataset.target;
    sessionStorage.setItem("target", target);
    location.href = "services.html#mainServices";
  });
});
