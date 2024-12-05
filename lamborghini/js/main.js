const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
});


const swiper = new Swiper('.swiper', {
    loop: true,
    
  
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  
  });

  let map;

  async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: 37.23162800198393, lng: -8.628639926978368 },
      zoom: 14,
    });
  }
  
  initMap();

