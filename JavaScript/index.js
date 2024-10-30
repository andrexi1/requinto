const flipBook = (elBook) => {
  elBook.style.setProperty("--c", 0);
  const pages = elBook.querySelectorAll(".page");
  const totalPages = pages.length - 1;

  pages.forEach((page, idx) => {
    page.style.setProperty("--i", idx);
    page.addEventListener("click", (evt) => {
      const curr = evt.target.closest(".back") ? idx : idx + 1;
      updatePage(curr);
    });
  });

  const updatePage = (newPage) => {
    currentPage = Math.max(0, Math.min(newPage, totalPages));
    elBook.style.setProperty("--c", currentPage);
  };

  let currentPage = 0;

  document.getElementById("prevBtn").addEventListener("click", () => {
    updatePage(currentPage - 1);
  });
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    updatePage(currentPage + 1);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      updatePage(currentPage - 1);
    } else if (event.key === "ArrowRight") {
      updatePage(currentPage + 1);
    }
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