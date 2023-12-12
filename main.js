const menuIcon = document.getElementById("menu-icon");
const dropDownMenu = document.getElementById("drop-nav");
const bannerSection = document.getElementById("banner");

const toggleDropDownMenu = () => {
  dropDownMenu.classList.toggle("-translate-y-80");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  bannerSection.classList.toggle("-translate-y-32");
};

const initialize = () => {
  let input = document.getElementById("location-search");
  new google.maps.places.Autocomplete(input),
    {
      types: ["geocode"],
    };
};

google.maps.event.addDomListener(window, "load", initialize);

menuIcon.addEventListener("click", function () {
  toggleDropDownMenu();
});
