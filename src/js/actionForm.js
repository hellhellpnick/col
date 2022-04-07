const checkRadio = (item) => {
  const radioList = [
    document.querySelector("#radio1"),
    document.querySelector("#radio2"),
    document.querySelector("#radio3"),
  ];
  radioList.forEach(
    (element) => (element.checked = false),
  );

  item.checked = true;
};

export { checkRadio };
