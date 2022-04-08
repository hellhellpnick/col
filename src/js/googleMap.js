import { Loader } from "@googlemaps/js-api-loader";
import { styleGoogleMap } from "./constants";

const loader = new Loader({
  apiKey:
    "AIzaSyDiYNTwRmV7fWKKum_mPBJrmYz0muPqFDc",
});

const loadGoogleMap = () => {
  loader.load().then(() => {
    const listCard =
      document.querySelectorAll(".card-info");
    const listInfo = document.querySelectorAll(
      ".address-card__item",
    );
    const positionMarkers = [
      {
        lat: 49.84832511172899,
        lng: 24.025274806908662,
      },
      {
        lat: 49.80201027403274,
        lng: 24.031422427258523,
      },
      {
        lat: 49.84506760428454,
        lng: 24.030086799705536,
      },
      {
        lat: 49.8466173372668,
        lng: 24.030086799705526,
      },
    ];

    const map = new google.maps.Map(
      document.getElementById("map"),
      {
        zoom: 12,
        center: positionMarkers[0],
        styles: styleGoogleMap,
      },
    );

    const marker1 = new google.maps.Marker({
      position: positionMarkers[0],
      map: map,
      title: "Ти навів на мене!",
      icon: `images/icons/icon-map-address-hover.png`,
    });

    const marker2 = new google.maps.Marker({
      position: positionMarkers[1],
      map: map,
      title: "Ти навів на мене!",
      icon: `images/icons/icon-map-address.png`,
    });

    const marker3 = new google.maps.Marker({
      position: positionMarkers[2],
      map: map,
      title: "Ти навів на мене!",
      icon: `images/icons/icon-map-address.png`,
    });

    const marker4 = new google.maps.Marker({
      position: positionMarkers[3],
      map: map,
      title: "Ти навів на мене!",
      icon: `images/icons/icon-map-address.png`,
    });

    const markersList = [
      marker1,
      marker2,
      marker3,
      marker4,
    ];
    markersList.forEach((item, index) => {
      google.maps.event.addListener(
        item,
        "click",
        () => {
          markersList.forEach((elem) => {
            elem.setIcon(
              `images/icons/icon-map-address.png`,
            );
          });
          listCard.forEach((elem) =>
            elem.classList.remove(
              "card-info--active",
            ),
          );
          listInfo.forEach((elem) =>
            elem.classList.remove(
              "address-card__item--active",
            ),
          );

          listCard[index].classList.add(
            "card-info--active",
          );
          listInfo[index].classList.add(
            "address-card__item--active",
          );
          item.setIcon(
            `images/icons/icon-map-address-hover.png`,
          );
        },
      );
    });

    listInfo.forEach((item, index) => {
      item.addEventListener("click", () => {
        listCard.forEach((elem) =>
          elem.classList.remove(
            "card-info--active",
          ),
        );
        listInfo.forEach((elem) =>
          elem.classList.remove(
            "address-card__item--active",
          ),
        );
        markersList.forEach((elem) => {
          elem.setIcon(
            `images/icons/icon-map-address.png`,
          );
        });

        listCard[index].classList.add(
          "card-info--active",
        );
        item.classList.add(
          "address-card__item--active",
        );
        markersList[index].setIcon(
          `images/icons/icon-map-address-hover.png`,
        );
      });
    });

    /* const closeAllCardMap = (el) => {
    const element = el.path[0];
    const activeCard =
      document.getElementsByClassName(
        "card-info--active",
      );
    console.log(element === activeCard[0]);

    if (element !== activeCard[0]) {
      listCard.forEach((elem) =>
        elem.classList.remove(
          "card-info--active",
        ),
      );
    }
  };

  document.addEventListener(
    "click",
    closeAllCardMap,
  ); */
  });
};

export { loadGoogleMap };
