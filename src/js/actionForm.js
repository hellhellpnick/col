import {
  radioList,
  formContact,
} from "./constants";
import Inputmask from "inputmask";

let correctEmail, correctName;

const checkRadio = (item) => {
  radioList.forEach(
    (element) => (element.checked = false),
  );

  item.checked = true;
};

const submitForm = () => {
  formContact.addEventListener("submit", (e) => {
    const modalWindow = document.querySelector(
      ".modal-window",
    );
    const btn = modalWindow.querySelector(
      ".modal-window__button",
    );

    btn.addEventListener("click", () => {
      modalWindow.classList.remove(
        "modal-window--active",
      );
    });

    if (correctEmail && correctName) {
      modalWindow.classList.add(
        "modal-window--active",
      );
    }

    e.preventDefault();
  });
};

const listenerInput = () => {
  const inputs = document.querySelectorAll(
    ".form-contact__wrapper",
  );
  const regEmail = new RegExp(
    "[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+",
  );
  const phoneInput =
    document.getElementById("phone");
  let inS = new Inputmask("+38 (999)999-99-99");

  inS.mask(phoneInput);
  inputs[0]
    .querySelector(".form-contact__wrapper-input")
    .addEventListener("input", (e) => {
      if (e.target.value.length >= 3) {
        inputs[0].classList.remove(
          "form-contact__wrapper--error",
        );

        correctName = true;

        inputs[0].querySelectorAll(
          ".form-contact__wrapper-accept",
        )[1].style.display = "block";
        inputs[0].querySelectorAll(
          ".form-contact__wrapper-accept",
        )[0].style.display = "none";
      } else {
        inputs[0].classList.add(
          "form-contact__wrapper--error",
        );

        correctName = false;

        inputs[0].querySelectorAll(
          ".form-contact__wrapper-accept",
        )[0].style.display = "block";
        inputs[0].querySelectorAll(
          ".form-contact__wrapper-accept",
        )[1].style.display = "none";
      }
    });

  inputs[2]
    .querySelector(".form-contact__wrapper-input")
    .addEventListener("input", (e) => {
      console.log(regEmail.test(e.target.value));
      if (regEmail.test(e.target.value)) {
        inputs[2].classList.remove(
          "form-contact__wrapper--error",
        );

        correctEmail = true;

        inputs[2].querySelectorAll(
          ".form-contact__wrapper-accept",
        )[1].style.display = "block";
        inputs[2].querySelectorAll(
          ".form-contact__wrapper-accept",
        )[0].style.display = "none";
      } else {
        inputs[2].classList.add(
          "form-contact__wrapper--error",
        );

        correctEmail = false;

        inputs[2].querySelectorAll(
          ".form-contact__wrapper-accept",
        )[0].style.display = "block";
        inputs[2].querySelectorAll(
          ".form-contact__wrapper-accept",
        )[1].style.display = "none";
      }
    });
};

export { checkRadio, submitForm, listenerInput };
