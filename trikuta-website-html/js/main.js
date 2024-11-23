AOS.init();
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    nav: true,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 5
      },
      1000: {
        items: 6
      }
    }
  })