document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".dropdown button");
  const dropdown = document.getElementById("dropdown");
  const header = document.querySelector("header");

  function toggleMenu() {
    dropdown.classList.toggle("show");
    if (dropdown.classList.contains("show")) {
      const buttonRect = button.getBoundingClientRect();
      dropdown.style.left = `${buttonRect.left}px`;
      dropdown.style.top = `${buttonRect.bottom + window.scrollY}px`;
    }
  }

  button.addEventListener("click", toggleMenu);


  window.addEventListener("click", function (event) {
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  });

  window.addEventListener("scroll", () => {
    const headerHeight = header.offsetHeight;
    button.style.top =
      window.scrollY > headerHeight
        ? "0px"
        : `${headerHeight - window.scrollY}px`;


    if (dropdown.classList.contains("show")) {
      const buttonRect = button.getBoundingClientRect();
      dropdown.style.top = `${buttonRect.bottom}px`;
    }
  });
});
