const menuIcon = document.getElementById("menu-icon");
const dropDownMenu = document.getElementById("drop-nav");

const toggleDropDownMenu = () => {
  dropDownMenu.classList.toggle("-translate-y-80");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
};

menuIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropDownMenu();
});
