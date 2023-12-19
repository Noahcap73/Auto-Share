const menuIcon = document.getElementById("menu-icon");
const dropDownMenu = document.getElementById("drop-nav");
const bannerSection = document.getElementById("banner");
const manWithCarImg = document.getElementById("man-w-car");

const toggleDropDownMenu = () => {
  dropDownMenu.classList.toggle("-translate-y-80");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  bannerSection.classList.toggle("-translate-y-24");
  manWithCarImg.classList.toggle("-translate-y-4");
};

menuIcon.addEventListener("click", function () {
  toggleDropDownMenu();
});
