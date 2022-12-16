// HEADER FIXED
window.onscroll = function () {
  if (window.pageYOffset > 140) {
    document.querySelector("#header").classList.add("active");
  } else {
    document.querySelector("#header").classList.remove("active");
  }
};

//ISOTOPE
let btns = $("#servicos .button-group button");

btns.click(function (e) {
  $("#servicos .button-group button").removeClass("active");
  e.target.classList.add("active");

  let selector = $(e.target).attr("data-filter");
  $("#servicos .grid").isotope({
    filter: selector,
  });
});

window.on("Load", function () {
  $("#servicos .grid").isotope({
    filter: "*",
  });
});

//MAGNIFY
$(".grid .popup-link").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
    tPrev: "Anterior",
    tNext: "Próxima",
    tCounter: "%curr% de %total%",
  },
});

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 6000,
  dots: true,
  lazyLoad: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
