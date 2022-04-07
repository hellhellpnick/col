const sickSlider = () => {
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
};

export { sickSlider };
