import { loadGoogleMap } from "./googleMap";
import {
  onClickItemMenu,
  controlBurgerMenu,
  fixedPositionMenu,
  controlResizeWindow,
} from "./controlNav";
import {
  checkRadio,
  submitForm,
  listenerInput,
} from "./actionForm";
import { formSelect } from "./selectForm";
import { sickSlider } from "./sickSlider";
import {
  burgerBtn,
  itemsMainNav,
  itemsFooterNav,
  radioList,
} from "./constants";

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

    loadGoogleMap();
    submitForm();
    listenerInput();
  },
);
