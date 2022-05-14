(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", toggleMenu);

  function toggleMenu() {
    menuBtnRef.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-open");
  }

  // window.addEventListener("resize", onresize);
  // function onresize() {
  //   width = document.body.clientWidth;
  //   console.log(width);
  //   if (width >= 768) {
  //     console.log("more than 768");
  //     console.log(mobileMenuRef.classList.contains("is-open"));
  //     if (mobileMenuRef.classList.contains("is-open")) {
  //       console.log("menu open, closing");
  //       toggelMenu();
  //     }
  //   }
  // }

})();