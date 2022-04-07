const wrapperLogo = document.querySelector(
  ".section-header__nav-box",
);
const burgerBtn =
  document.querySelector(".burger");
const mainNav =
  document.querySelector(".main-nav");
const body =
  document.getElementsByTagName("body")[0];
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
        wrapperLogo.classList.remove(
          "section-header__nav-box--fixed",
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
        wrapperLogo.classList.remove(
          "section-header__nav-box--fixed",
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
      }
    }),
  );
};

const controlBurgerMenu = () => {
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
};

const fixedPositionMenu = () => {
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
};

const controlResizeWindow = () => {
  if (window.innerWidth > 1024) {
    burgerBtn.classList.remove("burger--open");
    mainNav.classList.remove("main-nav--open");
    wrapperLogo.classList.remove(
      "section-header__nav-box--fixed",
    );
  }
};

export {
  onClickItemMenu,
  controlBurgerMenu,
  fixedPositionMenu,
  controlResizeWindow,
};
