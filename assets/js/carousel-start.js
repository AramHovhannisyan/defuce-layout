const opts = {
  type   : 'loop',
  width: 650,
  pagination: false,
  breakpoints: {
    768: {
      destroy: true,
    },
  }
}

var splide = new Splide( '.splide', opts );

splide.mount();