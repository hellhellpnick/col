const formSelect = () => {
  let select, i, j, l, ll, selElmnt, a, b, c;
  select = document.getElementsByClassName(
    "form-contact__select",
  );
  l = select.length;

  for (i = 0; i < l; i++) {
    selElmnt =
      select[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML =
      selElmnt.options[
        selElmnt.selectedIndex
      ].innerHTML;
    select[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute(
      "class",
      "select-items select-hide",
    );

    for (j = 1; j < ll; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        let y, i, k, s, h, sl, yl;
        s =
          this.parentNode.parentNode.getElementsByTagName(
            "select",
          )[0];
        sl = s.length;
        h = this.parentNode.previousSibling;

        for (i = 0; i < sl; i++) {
          if (
            s.options[i].innerHTML ==
            this.innerHTML
          ) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y =
              this.parentNode.getElementsByClassName(
                "same-as-selected",
              );
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute(
              "class",
              "same-as-selected",
            );
            break;
          }
        }
        h.click();
      });

      b.appendChild(c);
    }

    select[i].appendChild(b);
    a.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle(
        "select-hide",
      );
      this.classList.toggle(
        "select-arrow-active",
      );
    });
  }

  function closeAllSelect(elmnt) {
    let selectItems,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    selectItems = document.getElementsByClassName(
      "select-items",
    );
    y = document.getElementsByClassName(
      "select-selected",
    );
    xl = selectItems.length;
    yl = y.length;

    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove(
          "select-arrow-active",
        );
      }
    }

    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        selectItems[i].classList.add(
          "select-hide",
        );
      }
    }
  }

  document.addEventListener(
    "click",
    closeAllSelect,
  );
};

export { formSelect };
