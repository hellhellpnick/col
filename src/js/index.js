import {
  onClickItemMenu,
  controlBurgerMenu,
  fixedPositionMenu,
  controlResizeWindow,
} from "./controlNav";
import { checkRadio } from "./actionForm";
import { formSelect } from "./selectForm";
import { sickSlider } from "./sickSlider";
const burgerBtn =
  document.querySelector(".burger");
const itemsMainNav = document.querySelectorAll(
  ".main-nav__item",
);
const itemsFooterNav = document.querySelectorAll(
  ".footer-nav__item",
);

const radioList = [
  document.querySelector("#radio1"),
  document.querySelector("#radio2"),
  document.querySelector("#radio3"),
];

document.addEventListener(
  "DOMContentLoaded",
  () => {
    window.addEventListener(
      "resize",
      controlResizeWindow,
    );

    window.addEventListener(
      "scroll",
      fixedPositionMenu,
    );

    radioList.forEach((item) =>
      item.addEventListener("click", () =>
        checkRadio(item),
      ),
    );

    burgerBtn.addEventListener(
      "click",
      controlBurgerMenu,
    );

    formSelect();
    sickSlider();
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
  },
);
