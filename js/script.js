//Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


//Swiper
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-prevv",
    },
  });

  var swiper_2 = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-nexttt",
      prevEl: ".swiper-button-prevvv",
    },
  });