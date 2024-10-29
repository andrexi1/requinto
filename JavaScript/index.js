const flipBook = (elBook) => {
  elBook.style.setProperty("--c", 0);
  elBook.querySelectorAll(".page").forEach((page, idx) => {
    page.style.setProperty("--i", idx);
    page.addEventListener("click", (evt) => {
      const curr = evt.target.closest(".back") ? idx : idx + 1;
      elBook.style.setProperty("--c", curr);
    });
  });
};

document.querySelectorAll(".book").forEach(flipBook);
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
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    if (currentPageIndex < pages.length - 1) {
      currentPageIndex++;
      goToPage(currentPageIndex);
    }
  } else if (event.key === 'ArrowLeft') {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      goToPage(currentPageIndex);
    }}});