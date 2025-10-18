document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("h-screen");

    if (isOpen) {
      mobileMenu.classList.remove("h-screen");
      mobileMenu.classList.add("h-0");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      document.body.style.overflow = "";
    } else {
      mobileMenu.classList.add("h-screen");
      mobileMenu.classList.remove("h-0");
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  });
});
 