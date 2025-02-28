document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        gap: '30px',
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            }
        }
      } );;
    splide.mount();
  } );