

// ************************************************* //
// * ++++++++ 01. Header sticky & navbar +++++++++ * //
// ************************************************* //

$(window).on('scroll', function() {
  if($(this).scrollTop() > 450 ) {
    $(".asb19__header").addClass("fixed__header");
    // $(".header-top").slideUp();
  } else {
    $(".asb19__header").removeClass("fixed__header");
    // $(".header-top").slideDown();
  }
});

$(".asb19__miles--single").on("mouseover", function () {
  $(".asb19__miles--single").removeClass("active");
  $(this).toggleClass("active");
})

// ************************************************* //
// * ++++++++      02. Fancybox          +++++++++ * //
// ************************************************* //
Fancybox.bind('[data-fancybox="gallery"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});
  Fancybox.bind('[data-fancybox="yt-shorts"]', {
    mainClass: 'custom-fancybox-modal',
    // iframe: {
    //   preload: false,
    //   css: {
    //     width: '362px',
    //     height: '643px',
    //     aspectRatio: '9 / 16' // Ensures correct aspect ratio
    //   }
    // }
  });

$(document).ready(function(){
  if ($(window).width() > 991) {
    $(".asb19__header .nav-link.dropdown-toggle").removeAttr("data-bs-toggle");
  }
})




var newsSwiper = new Swiper(".asb19__news--swiper", {
  autoPlay: false,
  loop: true,
  centeredSlides: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next-newsSW",
    prevEl: ".swiper-button-prev-newsSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2.5
    }
  }
});
var reviewSwiper = new Swiper(".asb19__review--swiper", {
  autoPlay: false,
  loop: true,
  centeredSlides: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next-reviewSW",
    prevEl: ".swiper-button-prev-reviewSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3.8
    }
  }
});
var brandSwiper = new Swiper(".asb19__brands--swiper", {
  autoPlay: false,
  // loop: true,
  // centeredSlides: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next-brandSW",
    prevEl: ".swiper-button-prev-brandSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 6
    }
  }
});


// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// let players = {}; // Store multiple player instances

// function onYouTubeIframeAPIReady() {
//   document.querySelectorAll('.youtube-video').forEach((element, index) => {
//     let videoId = element.getAttribute('data-video-id');
//     let playerId = `player-${index}`;

//     element.id = playerId; // Assign unique ID

//     players[playerId] = new YT.Player(playerId, {
//       height: '560',
//       width: '315',
//       videoId: videoId,
//       playerVars: {
//         'playsinline': 1,
//         'autoplay': 0, // No initial autoplay
//         'mute': 1, // Mute required for autoplay on hover
//         'controls': 0,
//         'modestbranding': 1,
//         'rel': 0
//       }
//     });

//     // Play video on hover
//     element.addEventListener('mouseenter', () => {
//       if (players[playerId] && players[playerId].playVideo) {
//         players[playerId].playVideo();
//       }
//     });

//     // Pause video on mouse leave
//     element.addEventListener('mouseleave', () => {
//       if (players[playerId] && players[playerId].pauseVideo) {
//         players[playerId].pauseVideo();
//       }
//     });
//   });
// }


// $('.popup-youtube').magnificPopup({
//   type: 'iframe',
//   iframe: {
//     patterns: {
//       youtube: {
//         index: 'youtube.com/',
//         id: function (url) {
//           var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
//           if (!m || !m[1]) return null;
//           return m[1];
//         },
//         src: '//www.youtube.com/embed/%id%?autoplay=1'
//       },
//       vimeo: {
//         index: 'vimeo.com/',
//         id: function (url) {
//           var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
//           if (!m || !m[5]) return null;
//           return m[5];
//         },
//         src: '//player.vimeo.com/video/%id%?autoplay=1'
//       }
//     }
//   }
// });
