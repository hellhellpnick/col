const burgerBtn =
  document.querySelector(".burger");
const mainNav =
  document.querySelector(".main-nav");
const body =
  document.getElementsByTagName("body")[0];
const wrapperLogo = document.querySelector(
  ".section-header__nav-box",
);
const itemsMainNav = document.querySelectorAll(
  ".main-nav__item",
);

itemsMainNav.forEach((item) =>
  item.addEventListener("click", () => {
    if (
      !item.classList.contains(
        ".main-nav__item--active",
      )
    ) {
      itemsMainNav.forEach((element) =>
        element.classList.remove(
          "main-nav__item--active",
        ),
      );

      item.classList.add(
        "main-nav__item--active",
      );
    }
  }),
);

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    burgerBtn.classList.remove("burger--open");
    mainNav.classList.remove("main-nav--open");
    wrapperLogo.classList.remove(
      "section-header__nav-box--fixed",
    );
  }
});

burgerBtn.addEventListener("click", () => {
  if (
    burgerBtn.classList.contains("burger--open")
  ) {
    burgerBtn.classList.remove("burger--open");
    mainNav.classList.remove("main-nav--open");
    wrapperLogo.classList.remove(
      "section-header__nav-box--fixed",
    );
    body.style.overflow = "auto";
  } else {
    burgerBtn.classList.add("burger--open");
    mainNav.classList.add("main-nav--open");
    body.style.overflow = "hidden";

    if (
      !wrapperLogo.classList.contains(
        "section-header__nav-box--fixed",
      )
    ) {
      wrapperLogo.classList.add(
        "section-header__nav-box--fixed",
      );
    }
  }
});

$(".section-header__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});
