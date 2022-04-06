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
const itemsFooterNav = document.querySelectorAll(
  ".footer-nav__item",
);

const nav = document.querySelector(
  ".section-header__nav",
);

const onClickItemMenu = (
  arrChild,
  classChild,
  otherArrChild,
  otherClassChild,
) => {
  arrChild.forEach((item, index) =>
    item.addEventListener("click", () => {
      if (!item.classList.contains(classChild)) {
        arrChild.forEach((element) =>
          element.classList.remove(classChild),
        );
        otherArrChild.forEach((element) =>
          element.classList.remove(
            otherClassChild,
          ),
        );

        burgerBtn.classList.remove(
          "burger--open",
        );
        mainNav.classList.remove(
          "main-nav--open",
        );
        body.style.overflow = "auto";
        otherArrChild[index].classList.add(
          otherClassChild,
        );
        item.classList.add(classChild);
      } else {
        burgerBtn.classList.remove(
          "burger--open",
        );
        mainNav.classList.remove(
          "main-nav--open",
        );
        body.style.overflow = "auto";
        otherArrChild[index].classList.add(
          otherClassChild,
        );
        item.classList.add(classChild);
      }
    }),
  );
};

onClickItemMenu(
  itemsMainNav,
  "main-nav__item--active",
  itemsFooterNav,
  "footer-nav__item--active",
);

onClickItemMenu(
  itemsFooterNav,
  "footer-nav__item--active",
  itemsMainNav,
  "main-nav__item--active",
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

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add(
      "section-header__nav--fixed",
    );
    nav.style.offsetHeight =
      nav.childNodes[0].nextElementSibling.offsetHeight;
  } else {
    nav.classList.remove(
      "section-header__nav--fixed",
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
  prevArrow: $(
    ".card-slider__button-arrow--left",
  ),
  nextArrow: $(
    ".card-slider__button-arrow--right",
  ),
  dots: true,
});
