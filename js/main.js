var tabs = document.querySelectorAll(".tab__btn");
var section = document.querySelector(".page-promo");
var checkbox = document.querySelectorAll("input");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    section.classList.add("show");
    section.setAttribute("data-slide", tab.getAttribute("data-slide"));

    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    tab.classList.toggle("active");
  });
});

checkbox.forEach(chkbox => {
  chkbox.addEventListener("click", () => {
    section.classList.add("show");
  });
});
