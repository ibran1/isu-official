$(document).ready(function () {


  //scrol div ug-programme
  // gsap.registerPlugin(ScrollTrigger);


  // const accordeon = gsap.timeline({
  //   defaults: {
  //     ease: 'none',
  //     duration: 1
  //   },
  //   scrollTrigger: {
  //     trigger: ".ugProgrameCurriculumOuter",
  //     start: "top top",
  //     end: "+=" + (window.innerHeight*3 - 900),
  //     scrub: true,
  //     markers: true,
  //     pin: '.ugProgrameCurriculumOuter'    
  //   }
  // }) 

  // // switch from one to two
  // accordeon.to("#pin1", { height: 100 }, 0)
  // accordeon.to("#pin2", { height: window.innerHeight - 500 }, 0)
  // // switch from two to three
  // accordeon.to("#pin2", { height: 100 }, 1)
  // accordeon.to("#pin3", { height: window.innerHeight - 200 }, 1)
  // // close last
  // accordeon.to("#pin3", { height: 100 }, 2)

  // gsap.set('.spacer.bot', { marginTop: "-=" + (window.innerHeight - 300) })

  // $(window).scroll(function() {
  // 	var windscroll = $(window).scrollTop();
  // 	if (windscroll >= 4900) {
  // 		$('.ugProgramCurriculumBoxOuter').each(function(i) {
  //       // The number at the end of the next line is how pany pixels you from the top you want it to activate.
  // 			if ($(this).position().top <= windscroll - 0) {
  // 				$('.ugProgramCurriculumBoxOuter.active').removeClass('active');
  // 				$('.ugProgramCurriculumBoxOuter').eq(i).addClass('active');
  // 			}
  // 		});

  // 	} else {

  // 		$('.ugProgramCurriculumBoxOuter.active').removeClass('active');
  // 		$('.ugProgramCurriculumBoxOuter:first').addClass('active');
  // 	}

  // 	}).scroll();
  // $(window).scroll(function () {
  //   var windscroll = $(window).scrollTop();
  //   console.log(windscroll);
  //   if (windscroll == 5025) {
  //     $('#pin2').addClass('active')
  //   }
  //   if (windscroll >= 5468) {
  //     $('#pin2').addClass('active')
  //   }
  //   if (windscroll >= 5930) {
  //     $('#pin3').addClass('active')
  //   }
  //   if (windscroll >= 6380) {
  //     $('#pin4').addClass('active')
  //   }
  // }).scroll();





  // $('.ugProgrameCurriculumOuter .ugProgramCurriculumBoxOuter').click(function () {
  //   var id = $(this).attr('id')
  //   $(`#${id}`).addClass('active').siblings().removeClass('active')
  //   console.log(id)
  // })
  // $('.ugProgramCurriculumBoxOuter .ugProgramCurriculumContainer').click(function () {
  //   var id = $(this).attr('id')
  //   $(`#${id}`).addClass('active').siblings().removeClass('active')
  //   console.log(id)
  // })




  //scrol div ug-programme

  //mac js
  $(function () {
    if (
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1
    ) {
      $("body").addClass("safari-mac");
    }
  });



  // Swipers Start

  var mosacSlider = new Swiper(".mosacSlider", {
    spaceBetween: 10,
    parallax: true,
    loop: false,
    speed: 2000,
    freeMode: false,
    navigation: {
      nextEl: ".experienceNext",
      prevEl: ".experiencePrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        freeMode: true,
        speed: 1500,
      },

      768: {
        slidesPerView: 4,
        freeMode: true,
        autoplay: false,
        speed: 1500,
      },
    },
  })
  var experienceMasterSlider = new Swiper(".iconSlider", {
    slidesPerView: 6,
    spaceBetween: 10,
    parallax: true,
    loop: true,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".experienceNext",
      prevEl: ".experiencePrev",
    },
    autoplay: {
      delay: -100,
      disableOnInteraction: false
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        freeMode: true,
        autoplay: false,
        speed: 1500,
      },

      768: {
        slidesPerView: 4,
        freeMode: true,
        autoplay: false,
        speed: 1500,
      },
      1024: {
        slidesPerView: 6,
        freeMode: false,
        slidesPerGroup: 1,

      },
      1366: {
        slidesPerView: 6,
        freeMode: false,
        slidesPerGroup: 1,
      },
    },
  })
  var experienceMasterSlider = new Swiper(".experienceMasterSlider", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".experienceNext",
      prevEl: ".experiencePrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },

      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
        freeMode: false,
        slidesPerGroup: 4,
      },
      1366: {
        slidesPerView: 4,
        freeMode: false,
        slidesPerGroup: 1,
      },
    },
  })

  var coachingSlider = new Swiper(".coachingSlider", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".coachingSliderNext",
      prevEl: ".coachingSliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },

      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 2.6,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1366: {
        slidesPerView: 2.6,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
    },
  })
  var celebrationSwiper = new Swiper(".celebrationSwiper", {
    slidesPerView: 3.5,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,

    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".celebrationSliderNext",
      prevEl: ".celebrationSliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },

      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 2.6,
        freeMode: false,
        slidesPerGroup: 3,
        spaceBetween: 15,

      },
      1366: {
        slidesPerView: 3.5,
        freeMode: false,
        slidesPerGroup: 3,
        spaceBetween: 15,

      },
    },
  })
  var mobHomSwiper = new Swiper(".mobHomSwiper", {
    slidesPerView: 1.1,
    spaceBetween: 5,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".mobHomSwiperNext",
      prevEl: ".mobHomSwiperPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },

      768: {
        slidesPerView: 2.5,
        slidesPerGroup: 3,
        spaceBetween: 15,

      },
    },
  })

  var reelSlider = new Swiper(".reelSlider", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".reelSliderNext",
      prevEl: ".reelSliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },

      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3.5,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1366: {
        slidesPerView: 4,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
    },
  })

  var mastervideoSwiper = new Swiper(".mastervideoSwiper", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".mastervideoSwiperNext",
      prevEl: ".mastervideoSwiperPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.4,
      },

      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 2.6,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1366: {
        slidesPerView: 4,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
    },
  })

  var experienceSlider = new Swiper(".experienceSlider", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".experienceSliderNext",
      prevEl: ".experienceSliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.4,
      },

      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 2.6,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1080: {
        slidesPerView: 4,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1366: {
        slidesPerView: 4,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    },
  })

  var minireelSlider = new Swiper(".minireelSlider", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".minireelSliderNext",
      prevEl: ".minireelSliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.4,
      },

      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 2.6,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1366: {
        slidesPerView: 1,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
    },
  })

  var wrapinsslider = new Swiper(".wrapinsslider", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    // pagination: {
    // el: ".wrapinsslider-page",
    // },
    navigation: {
      nextEl: ".wrapinssliderNext",
      prevEl: ".wrapinssliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      414: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 1,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      1366: {
        slidesPerView: 1,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
    },
  })

  var businessslider = new Swiper(".businessslider", {
    slidesPerView: 2.5,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    mousewheel: false,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".businesssliderNext",
      prevEl: ".businesssliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      414: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
        freeMode: false,
        slidesPerGroup: 1,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      1366: {
        slidesPerView: 1,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
    },
  })

  var scholarshipCarousel = new Swiper(".scholarshipCarousel", {
    slidesPerView: 2.5,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".experienceNext",
      prevEl: ".experiencePrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },

      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 2.3,
        freeMode: false,
        slidesPerGroup: 3,
      },
      1366: {
        slidesPerView: 2.4,
        freeMode: false,
        slidesPerGroup: 3,
      },
    },
  })


  var UXploreswiper = new Swiper(".UXploreswiper", {
    slidesPerView: 2.2,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".UXploreswiperNext",
      prevEl: ".UXploreswiperPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 1.3,
      },
      1024: {
        slidesPerView: 2,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1080: {
        slidesPerView: 2.2,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1366: {
        slidesPerView: 2.2,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    },
  })
  
  var Hrquestaswiper = new Swiper(".Hrquestaswiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".HrquestaswiperNext",
      prevEl: ".HrquestaswiperPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 1.3,
      },
      1024: {
        slidesPerView: 2,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1080: {
        slidesPerView: 3,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1366: {
        slidesPerView: 3,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    },
  })

  var teachingPlanScrollView = new Swiper(".teachingPlanScrollView", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".experienceNext",
      prevEl: ".experiencePrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },

      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
        freeMode: false,
        slidesPerGroup: 1,
      },
      1366: {
        slidesPerView: 1,
        freeMode: false,
        slidesPerGroup: 1,
      },
    },
  })
  var swiper = new Swiper(".kpmg-slider", {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    loop: false,
    allowTouchMove: true,
    sldierDrag: true,
    parallax: true,
    loop: false,
    mousewheel: false,
    speed: 2000,

    navigation: {
      nextEl: ".kpmg-slider-next",
      prevEl: ".kpmg-slider-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        speed: 500,
      },
      400: {
        slidesPerView: 1.3,
        speed: 500,
      },
      640: {
        slidesPerView: 2.5,
        freeMode: true,
      },
      768: {
        slidesPerView: 3,
        speed: 1000,
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        freeMode: false,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        freeMode: false,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        freeMode: false,
      },
    },
  });
  var common_swiper = new Swiper(".common_swiper_course", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".common_swiper_course-next",
      prevEl: ".common_swiper_course-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },

      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
        freeMode: false,
        slidesPerGroup: 4,
      },
      1366: {
        slidesPerView: 4,
        freeMode: false,
        slidesPerGroup: 4,
      },
    },
  });
  //eventpage-slider
  var event_slider = new Swiper(".event-slider", {
    slidesPerView: 2.9,
    spaceBetween: 30,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".event-slider-next",
      prevEl: ".event-slider-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },

      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 2.9,
        freeMode: false,
        slidesPerGroup: 2.9,
      },
      1366: {
        slidesPerView: 2.9,
        freeMode: false,
        slidesPerGroup: 2.9,
      },
    },
  });
  var swiper_stats_swiper = new Swiper(".kpmg-stats-swiper", {
    slidesPerView: 1.22,
    spaceBetween: 10,
    freeMode: true,
    allowTouchMove: true,
    sldierDrag: true,
    parallax: true,
    loop: false,
    mousewheel: false,
    speed: 2000,
    navigation: {
      nextEl: ".mySwiper-next",
      prevEl: ".mySwiper-prev",
    },
    0: {
      slidesPerView: 1.22,
      speed: 500,
    },
    400: {
      slidesPerView: 1.22,
      speed: 500,
    },
    640: {
      slidesPerView: 1.22,
      freeMode: true,
    },
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    loop: false,
    allowTouchMove: true,
    sldierDrag: true,
    parallax: true,
    loop: false,
    mousewheel: false,
    speed: 2000,

    navigation: {
      nextEl: ".mySwiper-next",
      prevEl: ".mySwiper-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        speed: 500,
      },
      400: {
        slidesPerView: 2,
        speed: 500,
      },
      640: {
        slidesPerView: 2.5,
        freeMode: true,
      },
      768: {
        slidesPerView: 3,
        speed: 1000,
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 4.5,
        spaceBetween: 10,
        slidesPerGroup: 4,
        freeMode: false,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 5,
        freeMode: false,
      },
      1366: {
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerGroup: 6,
        freeMode: false,
      },
    },
  });
  var meet_masters = new Swiper(".meet_masters", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    freeMode: false,
    mousewheel: false,
    speed: 2000,
    navigation: {
      nextEl: ".meet_masters-next",
      prevEl: ".meet_masters-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 3,
        freeMode: false,
      },
    },
  });
  var SeriesCmeet_masters = new Swiper(".SeriesCmeet_masters", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".SeriesCmeet_masters-next",
      prevEl: ".SeriesCmeet_masters-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        speed: 500,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        speed: 500,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 500,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
        speed: 500,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
    },
  });
  var SeriesCmeet_masters = new Swiper(".SeriesCmeet_masters2", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".SeriesCmeet_masters2-next",
      prevEl: ".SeriesCmeet_masters2-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        speed: 500,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        speed: 500,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 500,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
        speed: 500,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
    },
  });


  // ---- FEATURE -----
 
  var SeriesCmeet_masters = new Swiper(".FEATUREslider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".featuresbtn-next",
      prevEl: ".featuresbtn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        speed: 500,
      },
      400: {
        slidesPerView: 1.5,
         spaceBetween: 15,
        speed: 500,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 15,
        speed: 500,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 500,
      },
      1024: {
        slidesPerView: 2.5,
        slidesPerGroup: 2,
         spaceBetween: 30,
        freeMode: false,
      },
      1366: {
        slidesPerView: 2.5,
        spaceBetween: 30,
        slidesPerGroup: 2,
        freeMode: false,
      },
    },
  });

  // FEATURE end ----
  var meetMasterUg = new Swiper(".meetMasterUg", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".meet_mastersUg-next",
      prevEl: ".meet_mastersUg-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        speed: 500,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        speed: 500,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 500,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 500,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
    },
  });

  var meetMasterNewUG = new Swiper(".meetMasterNewUG", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".meetMasterNewUG-next",
      prevEl: ".meetMasterNewUG-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        speed: 500,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        speed: 500,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 500,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 500,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
    },
  });

  var meet_masters = new Swiper(".Ugmaster", {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".Ugmaster-next",
      prevEl: ".Ugmaster-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        speed: 500,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 10,
        speed: 500,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 500,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 3,
        freeMode: false,
      },
    },
  });
  var meet_masters = new Swiper(".Ui-masters", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".experienceNext",
      prevEl: ".experiencePrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        speed: 500,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        speed: 500,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 500,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 3,
        freeMode: false,
      },
    },
  });
  var common_swiper = new Swiper(".common_swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    navigation: {
      nextEl: ".common_swiper-next",
      prevEl: ".common_swiper-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 10,
        speed: 500,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });

  var problockchian_swiper = new Swiper(".problockchian_swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    navigation: {
      nextEl: ".common_swiper-next",
      prevEl: ".common_swiper-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 10,
        speed: 500,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });
  var common_masterpgswiper = new Swiper(".common_masterpgswiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: false,
    freeMode: true,
    parallax: true,
    loop: false,
    mousewheel: false,
    speed: 1000,
    navigation: {
      nextEl: ".s-next",
      prevEl: ".s-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      400: {
        slidesPerView: 1.1,
      },
      640: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        freeMode: false,
      },
    },
  });
  var career_swiper = new Swiper(".career_swiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    loop: false,
    parallax: true,
    loop: false,
    speed: 2000,
    mousewheel: false,

    navigation: {
      nextEl: ".carrer-next",
      prevEl: ".carrer-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      400: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 4,
        freeMode: false,
      },
    },
  });
  var insta_swiper = new Swiper(".insta_swiper", {
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var common_kpmgswiper = new Swiper(".common_kpmgswiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: false,
    freeMode: true,
    parallax: true,
    // autoplay: 1000,
    // autoplayStopOnLast: false, // loop false also
    mousewheel: false,
    updateOnWindowResize: true,
    // observer:true,
    // speed: 1000,
    // navigation: {
    //     nextEl: ".s-next",
    //     prevEl: ".s-prev",
    // },

    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      400: {
        slidesPerView: 1.1,
      },
      640: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 2.5,
        freeMode: true,
        loop: true,
        speed: 500,
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 15,
        slidesPerGroup: 3,
        freeMode: false,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 15,
        slidesPerGroup: 3,
        freeMode: false,
      },
    },
  });

  var bosch_swiper = new Swiper(".bosch_swiper", {
    slidesPerView: 7,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".bosch-next",
      prevEl: ".bosch-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 7,
        spaceBetween: 50,
        slidesPerGroup: 7,
        freeMode: true,
        loop: true,
      },
    },
  });

  var bosch_swiper_new = new Swiper(".bosch_swiper_new", {
    slidesPerView: 5,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".bosch_new-next",
      prevEl: ".bosch_new-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.6,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.6,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 500,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 5,
        freeMode: true,
        loop: true,
      },
    },
  });

  var cirriculum_swiper = new Swiper(".cirriculum_swiper", {
    slidesPerView: 5,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".bosch_new-next",
      prevEl: ".bosch_new-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        speed: 500,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1.3,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 500,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
        freeMode: true,
        loop: true,
      },
    },
  });

  var handon_slider = new Swiper(".handon_slider", {
    slidesPerView: 5,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".bosch_new-next",
      prevEl: ".bosch_new-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        speed: 500,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        speed: 500,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
        freeMode: true,
        loop: true,
      },
    },
  });
  var common_swiper_blogs = new Swiper(".common_swiper_blogs", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    navigation: {
      nextEl: ".common_swiper_blogs-next",
      prevEl: ".common_swiper_blogs-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 10,
        speed: 500,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1366: {
        slidesPerView: 4.5,
        spaceBetween: 20,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });

  var bosch_news_swiper = new Swiper(".bosch_news_swiper", {
    slidesPerView: 7,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".bosch-news-next",
      prevEl: ".bosch-news-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 10,
        freeMode: false,
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 0,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },

      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        speed: 500,
        freeMode: true,
        loop: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        freeMode: true,
      },
    },
  });

  var bosch_events_swiper = new Swiper(".bosch_events_swiper", {
    slidesPerView: 7,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".bosch-events-next",
      prevEl: ".bosch-events-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 1,
        freeMode: true,
        loop: true,
      },
    },
  });

  var insta_slider = new Swiper(".insta_slider", {
    slidesPerView: 7,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".insta_slider-next",
      prevEl: ".insta_slider-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        speed: 500,
        freeMode: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });

  var popup_insta = new Swiper(".popup_insta", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 1000,
    freeMode: true,
    navigation: {
      nextEl: ".popup_insta-next",
      prevEl: ".popup_insta-prev",
    },
  });

  var muif_slider = new Swiper(".muif_slider", {
    slidesPerView: 7,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".muif_slider-next",
      prevEl: ".muif_slider-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        speed: 500,
        freeMode: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 15,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });

  var muif_master_slider = new Swiper(".muif_master_slider", {
    slidesPerView: 7,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".muif_master_slider-next",
      prevEl: ".muif_master_slider-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        speed: 500,
        freeMode: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 15,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });

  var hr_management = new Swiper(".hr-management-slider", {
    slidesPerView: 5,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".hr-management-slider-next",
      prevEl: ".hr-management-slider-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        speed: 500,
        freeMode: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        freeMode: false,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 15,
        slidesPerGroup: 5,
        freeMode: false,
      },
    },
  });

  var kpmg2_master_slider = new Swiper(".kpmg2_master_slider", {
    slidesPerView: 5,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".kpmg2_master_slider-next",
      prevEl: ".kpmg2_master_slider-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        speed: 500,
        freeMode: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 15,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });

  var executive_pgp_slider = new Swiper(".executive-pgp-slider", {
    slidesPerView: 5,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".executive-pgp-slider-next",
      prevEl: ".executive-pgp-slider-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.4,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.4,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        speed: 500,
        freeMode: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 15,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });

  var coachingslider = new Swiper(".coaching-slider", {
    slidesPerView: 5,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".coaching-slider-next",
      prevEl: ".coaching-slider-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        speed: 500,
        freeMode: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });


  var clubandevent_slider_upcoming = new Swiper(".clubandevent_slider_prev", {
    slidesPerView: 7,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".clubandevent_slider_prev-next",
      prevEl: ".clubandevent_slider_prev-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        speed: 500,
        freeMode: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });

  var muif_slider = new Swiper(".clubandevent_slider_prev", {
    slidesPerView: 7,
    spaceBetween: 120,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".clubandevent_slider_prev-next",
      prevEl: ".clubandevent_slider_prev-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 10,
        freeMode: true,
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        speed: 500,
        freeMode: true,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        loop: true,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        speed: 500,
        freeMode: true,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        freeMode: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });

  var mastervideoSwiper = new Swiper(".mastervideoSwiper", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    parallax: true,
    loop: false,
    // mousewheel: true,
    speed: 1500,
    freeMode: true,
    navigation: {
      nextEl: ".mastervideoSwiperNext",
      prevEl: ".mastervideoSwiperPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.4,
      },

      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 2.6,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1366: {
        slidesPerView: 4,
        freeMode: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
    },
  })

  var meet_masters_product_management = new Swiper(
    ".meet_masters_product_management",
    {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: false,
      parallax: true,
      loop: false,
      freeMode: true,
      mousewheel: false,
      speed: 2000,
      freeMode: true,
      navigation: {
        nextEl: ".meet_masters_product_management-next",
        prevEl: ".meet_masters_product_management-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
          speed: 500,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          speed: 500,
          freeMode: true,
        },
        640: {
          slidesPerView: 2.2,
          spaceBetween: 10,
          speed: 500,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 2,
          freeMode: false,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 20,
          slidesPerGroup: 4,
          freeMode: false,
        },
      },
    }
  );

  var executive_masters_slider = new Swiper(
    ".executive-masters-slider",
    {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: false,
      parallax: true,
      loop: false,
      freeMode: true,
      mousewheel: false,
      speed: 2000,
      freeMode: true,
      navigation: {
        nextEl: ".executive-masters-slider-next",
        prevEl: ".executive-masters-slider-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          speed: 300,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1.5,
          spaceBetween: 10,
          speed: 500,
          freeMode: true,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 10,
          speed: 500,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 2,
          freeMode: false,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 15,
          slidesPerGroup: 4,
          freeMode: false,
        },
      },
    }
  );



  // Congrats swiper
  var student_ambasssodor = new Swiper(".student_ambasssodor", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    parallax: true,
    loop: false,
    freeMode: true,
    mousewheel: false,
    speed: 2000,
    navigation: {
      nextEl: ".student_ambasssodor-next",
      prevEl: ".student_ambasssodor-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 20,
        speed: 500,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1366: {
        slidesPerView: 4.5,
        spaceBetween: 20,
        slidesPerGroup: 1,
        freeMode: false,
      },
    },
  });
  // Swipers End

  $(".aptitude-inner .tab-outer").click(function () {
    var id = $(this).attr("data-rel");
    console.log("clicked", id);
    $(this).addClass("active").siblings().removeClass("active");
    $(`#${id}`).addClass("active").siblings().removeClass("active");
  });
  //code to e reomved
  $("#timepicker li").on("click", function () {
    $("#timepicker li").removeClass("active");
    $(this).addClass("active");
    $("#timepicker").scrollCenter(".active", 300);
  });

  $(".see-more").on("click", function () {
    // $(".master-in").removeClass('in-hide');
    //  $(".master-in").addClass('in-show');
    $(".master-in").toggleClass("in-show");
    $(this).html($(this).html() == "See More" ? "See Less" : "See More");
  });

  // $("#timepicker li").on("click", function() {
  //   var pos = $(this).position().left; //get left position of li
  //   var currentscroll = $("#timepicker").scrollLeft(); // get current scroll position
  //   var divwidth = $("#timepicker").width(); //get div width
  //   pos = pos + currentscroll - divwidth / 2; // for center position if you want adjust then change this

  //   $("#timepicker").animate({
  //     scrollLeft: pos
  //   });
  // });

  // $("#timepicker li").on("click", function() {
  //   $("#timepicker").scrollCenter(".active", 300);
  // });

  //$("#timepicker ul").scrollX(".active", 300);

  jQuery.fn.scrollCenter = function (elem, speed) {
    // this = #timepicker
    // elem = .active

    var active = jQuery(this).find(elem); // find the active element
    //var activeWidth = active.width(); // get active width
    var activeWidth = active.width() / 2; // get active width center
    let ancorVar = $(active).find("a").attr("href");
    console.log(activeWidth);

    //var pos = jQuery('#timepicker .active').position().left; //get left position of active li
    // var pos = jQuery(elem).position().left; //get left position of active li
    //var pos = jQuery(this).find(elem).position().left; //get left position of active li
    var pos = active.position().left + activeWidth; //get left position of active li + center position
    console.log("pos is", pos);

    var currentscroll = jQuery(this).scrollLeft(); // get current scroll position
    console.log("current scroll", currentscroll);

    var divwidth = jQuery(this).width(); //get div width
    console.log("divwidht is ", divwidth);

    //var divwidth = jQuery(elem).width(); //get div width
    if (activeWidth > 60) {
      pos = pos + currentscroll - divwidth / 2 + 120;
    } else {
      pos = pos + currentscroll - divwidth / 2 + 160;
    }
    // for center position if you want adjust then change this
    console.log(pos);

    jQuery(this).animate(
      {
        scrollLeft: pos,
      },
      speed == undefined ? 1000 : speed
    );

    $("html, body").animate(
      {
        scrollTop: $("" + ancorVar).offset().top - 120,
      },
      500
    );
    return this;
  };

  //123

  // Master-popup START
  $(".form-flex").click(function () {
    $(this).find("ph-x cursor-pointer");
  });
  // Master-popup END
  // select opton

  $(".insta-modal-1-btn").on("click", function (e) {
    e.preventDefault();
    $("#insta-modal-1").toggleClass("is-visible");
  });
  $(".insta-modal-1-close").on("click", function (e) {
    e.preventDefault();
    $("#insta-modal-1").removeClass("is-visible");
  });

  // =======================

  $(".insta-modal-2-btn").on("click", function (e) {
    e.preventDefault();
    $("#insta-modal-2").toggleClass("is-visible");
  });
  $(".insta-modal-2-close").on("click", function (e) {
    e.preventDefault();
    $("#insta-modal-2").removeClass("is-visible");
  });

  // ============================

  $(".insta-modal-3-btn").on("click", function (e) {
    e.preventDefault();
    $("#insta-modal-3").toggleClass("is-visible");
  });
  $(".insta-modal-3-close").on("click", function (e) {
    e.preventDefault();
    $("#insta-modal-3").removeClass("is-visible");
  });

  // ==================================
  $(".insta-modal-4-btn").on("click", function (e) {
    e.preventDefault();
    $("#insta-modal-4").toggleClass("is-visible");
  });
  $(".insta-modal-4-close").on("click", function (e) {
    e.preventDefault();
    $("#insta-modal-4").removeClass("is-visible");
  });
  //=========== modal slider ==========================

  // 1
  // var sliderhostel = $(".sliderhostel");
  // sliderhostel.owlCarousel({
  //     loop: false,
  //     margin: 15,
  //     nav: false,
  //     rewind: true,
  //     items: 4,
  //     slideBy: 4,
  //     responsive: {
  //         0: {
  //             items: 1.5,
  //             loop: true,
  //         },
  //         768: {
  //             items: 2,
  //             loop: true,
  //         },
  //         1000: {
  //             items: 4,
  //             // loop: true,
  //         }
  //     }
  // });
  // var instaSlider = $(".insta-slider");
  // instaSlider.owlCarousel({
  //     loop: false,
  //     nav: true,
  //     navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  //     responsive: {
  //         0: {
  //             items: 1
  //         },

  //         1200: {
  //             items: 1
  //         }
  //     }
  // });

  //Select start
  $(".courseSelect select").each(function () {
    var $this = $(this),
      numberOfOptions = $(this).children("option").length;

    $this.addClass("select-hidden");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option").eq(0).text());

    var $list = $("<ul />", {
      class: "select-options",
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val(),
      }).appendTo($list);
    }

    var $listItems = $list.children("li");

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $("div.select-styled.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-options").hide();
        });

      $(this).toggleClass("active").next("ul.select-options").toggle();
    });

    $listItems.click(function (e) {
      if ($(this).text() == "-Select a Course-") {
        $("#mobileGetInfoId").removeClass("visible");
      } else {
        $("#mobileGetInfoId").addClass("visible");
      }
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      $list.hide();
      //console.log($this.val());
    });

    $(document).click(function () {
      $styledSelect.removeClass("active");
      $list.hide();
    });
  });
  $(".master-bar .select-options li").on("click", function () {
    $(".select-styled").addClass("selected");
  });
  // +++++++++++++++++++++++++++

  $('<div class="y-tag">On Campus</div>').insertAfter(
    ".master-bar ul.select-options li:nth-child(1)"
  );
  $('<div class="y-tag">MasterCamps</div>').insertAfter(
    ".master-bar ul.select-options li:nth-child(3)"
  );
  //select End

  // program curriculam box
  var boxCount = $("#Curriculum .program-curri-box .box").length;
  if (boxCount % 2 == 1) {
    // code for odd event
    $("#Curriculum .program-curri-box .box").last().addClass("odd");
  } else {
    $("#Curriculum .program-curri-box .box").last().addClass("even");
  }

  let isClickScroll = false; // for scrolling on click
  $(".tabs-new a").click(function () {
    console.log("hhshash");
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      500
    );
    isClickScroll = true;
    scrollTab($(this).parent());
    setTimeout(() => {
      isClickScroll = false;
    }, 500);
    return false;
  });

  // Cache selectors
  var topMenu = $(".tabs-new"),
    topMenuHeight = topMenu.outerHeight() + 120,
    // All list items
    menuItems = topMenu.find("a "),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  //for active tab scroll on initial loading
  setTimeout(() => {
    let active = $(".tabs-new").find("li.active");
    if (typeof active.html() !== "undefined") {
      scrollTab(active);
    }
  }, 2000);

  let currActive = "null";
  // Bind to scroll

  let check = 0;
  $(window).scroll(function () {
    var Fixscr = $("#adjustment").offset()?.top;
    var scrollo = $(window).scrollTop();
    // first accordion

    if (scrollo < Fixscr && check !== 1) {
      check = 1;
      $("#video-1").addClass("active").siblings().removeClass("active");
      $("#video-1")
        .attr("src", "../assets/img/low-fidelity.gif")
        .siblings()
        .removeAttr("src");

      $(".accordian-content:nth-child(1) .accordian-answer").addClass("active");
      $(".accordian-content:nth-child(1) .accordian-question").addClass(
        "active"
      );

      $(".accordian-content:nth-child(2) .accordian-answer").removeClass(
        "active"
      );
      $(".accordian-content:nth-child(2) .accordian-question").removeClass(
        "active"
      );
    } else if (scrollo >= Fixscr && scrollo < Fixscr + 100 && check !== 2) {
      // second accordion
      check = 2;
      $("#video-2").addClass("active").siblings().removeClass("active");
      $("#video-2")
        .attr("src", "../assets/img/html-gif.gif")
        .siblings()
        .removeAttr("src");

      $(".accordian-content:nth-child(2) .accordian-answer").addClass("active");
      $(".accordian-content:nth-child(2) .accordian-question").addClass(
        "active"
      );

      $(".accordian-content:nth-child(1) .accordian-answer").removeClass(
        "active"
      );
      $(".accordian-content:nth-child(1) .accordian-question").removeClass(
        "active"
      );

      $(".accordian-content:nth-child(3) .accordian-answer").removeClass(
        "active"
      );
      $(".accordian-content:nth-child(3) .accordian-question").removeClass(
        "active"
      );
    } else if (scrollo >= Fixscr + 100 && check !== 3) {
      // third accordion
      check = 3;
      $("#video-3").addClass("active").siblings().removeClass("active");
      $("#video-3")
        .attr("src", "../assets/img/product-growth.gif")
        .siblings()
        .removeAttr("src");

      $(".accordian-content:nth-child(2) .accordian-answer").removeClass(
        "active"
      );
      $(".accordian-content:nth-child(2) .accordian-question").removeClass(
        "active"
      );

      $(".accordian-content:nth-child(3) .accordian-answer").addClass("active");
      $(".accordian-content:nth-child(3) .accordian-question").addClass(
        "active"
      );
    }

    var fixmeTop = $("#forstick").offset()?.top;
    var fixmeTop1 = $("#masters").offset()?.top;
    var fixmeTop2 = $("#executiveSmall").offset()?.top;
    var fixmeTop4 = $("#stickSecExecutivePGP").offset()?.top;

    var currentScroll = $(window).scrollTop();

    if (currentScroll >= fixmeTop - 70) {
      $("#forstick").addClass("makeitsmall");
    } else {
      $("#forstick").removeClass("makeitsmall");
    }

    var currentScroll2 = $(window).scrollTop();

    if (currentScroll2 >= fixmeTop1 - 70) {
      $("#masters").addClass("makeitsmall");
    } else {
      $("#masters").removeClass("makeitsmall");
    }

    var currentScroll3 = $(window).scrollTop();

    if (currentScroll3 >= fixmeTop2 - 70) {
      $("#executiveSmall").addClass("makeitsmallNew");
    } else {
      $("#executiveSmall").removeClass("makeitsmallNew");
    }

    var currentScroll4 = $(window).scrollTop();

    if (currentScroll4 >= fixmeTop4 - 70) {
      $("#stickSecExecutivePGP").addClass("makeitsmallNew");
    } else {
      $("#stickSecExecutivePGP").removeClass("makeitsmallNew");
    }

    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    // Set/remove active class
    menuItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("active");

    //check for active change
    if (currActive !== "null" && currActive !== id && isClickScroll === false) {
      let active = $(".tabs-new").find("li.active");
      scrollTab(active);
      currActive = id;
    } else {
      currActive = id;
    }
  });

  // to slide active li to the start
  function scrollTab(active) {
    // let active = $(".tabs-new").find('li.active');
    var activeWidth = active.width() / 2; // get active width center
    let ancorVar = $(active).find("a").attr("href");
    let parent = active.parent().attr("id");
    var pos = active.position()?.left + activeWidth; //get left position of active li + center position
    var currentscroll = active.parent().scrollLeft(); // get current scroll position
    var divwidth = active.parent().width(); //get div width
    // pos = pos + currentscroll - divwidth / 2; // for center position if you want adjust then change this

    if (activeWidth > 60) {
      pos = pos + currentscroll - divwidth / 2 + 105;
    } else {
      pos = pos + currentscroll - divwidth / 2 + 140;
    }
    active.parent().animate(
      {
        scrollLeft: pos,
      },
      300
    );
  }

  // new end

  //home menu

  var oncampusclick = 0;
  var mastCampclick = 0;

  $(".OnCampusLink").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".NewMasterCamp").removeClass("open");
    $(".NewonCampus").toggleClass("open");
    // $("#hb1").toggleClass("active");
    if ($(".NewonCampus").hasClass("open") == true) {
      $("body").addClass("overlay");
      $("#hb1").addClass("active");
      $("#hb2").removeClass("active");
      console.log("btn 1 open");
    } else {
      $("body").removeClass("overlay");
      $("#hb1").removeClass("active");
      $("#hb2").removeClass("active");
      console.log("btn close 1");
    }
  });

  $(".MasterCampLink").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".NewonCampus").removeClass("open");
    $(".NewMasterCamp").toggleClass("open");
    if ($(".NewMasterCamp").hasClass("open") == true) {
      $("body").addClass("overlay");
      $("#hb2").addClass("active");
      $("#hb1").removeClass("active");
    } else {
      $("body").removeClass("overlay");
      $("#hb2").removeClass("active");
      $("#hb1").removeClass("active");
    }
  });

  $(".headerMenu").click(function (e) {
    e.stopPropagation();
  });

  $(".NewMasterCamp").click(function (e) {
    e.stopPropagation();
  });

  $(".menu-hover .primary-btn").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".mega-menu").toggleClass("open");
    $("body").toggleClass("overlay");
  });
  $(".mega-menu").click(function (e) {
    e.stopPropagation();
  });
  $("body").click(function () {
    $(".mega-menu").removeClass("open");
    $("body").removeClass("overlay");
    $("#hb2").removeClass("active");
    $("#hb1").removeClass("active");
  });
  $(".hamburger-menu").on("click", function () {
    $("header .menu").toggleClass("menu-change");
  });
  $(".top-header .close").on("click", function () {
    $(".top-header").addClass("hide");
  });
  $(".hamburger-menu-close").on("click", function () {
    $("header .menu").removeClass("menu-change");
  });

  $(".top-header-new .closeitsmall").on("click", function () {
    $(".ugProgrammeTheme").addClass("stickyFix");
    $(".homeStickyFix").addClass("stickyFixHome");
    $(".top-header-new").addClass("goawaygo");
    $('.pgpTopBarTheme').addClass('active');
  });


  // on hover change menu image

  // $("#masterCamps-menu .raghu-img").addClass("show");

  $("#masterCamps-menu .icon-box").hover(
    function () {
      $("#masterCamps-menu .icon-box").removeClass("active");
      $(this).addClass("active");
    },
    function () { }
  );

  // mobile mega menu
  $(".mega-right-header .menu-close").on("click", function () {
    $(".mega-menu").removeClass("open");
    $("body").removeClass("overlay");
  });

  $(".on-campus-link").on("click", function () {
    $("#oncampus-menu .mega-detail").addClass("sub-menu-open");
  });
  $(".campus-menu-close").on("click", function () {
    $("#oncampus-menu .mega-detail").removeClass("sub-menu-open");
  });
  $(".mastercamp-link").on("click", function () {
    $("#masterCamps-menu .mega-detail").addClass("sub-menu-open");
  });
  $(".mastercamp-menu-close").on("click", function () {
    $("#masterCamps-menu .mega-detail").removeClass("sub-menu-open");
  });
  $(".iips-link").on("click", function () {
    $("#iips-menu .mega-detail").addClass("sub-menu-open");
  });
  $(".iips-menu-close").on("click", function () {
    $("#iips-menu .mega-detail").removeClass("sub-menu-open");
  });

  // mobile mega menu End

  $(".MobileMenuHome").click(function () {
    setTimeout(function () {
      $(".newMobileHomeMenu").addClass("open");
    }, 10);
  });

  $(".tab-teaser .tab-menu li a").on("click", function () {
    var target = $(this).attr("data-rel");
    console.log("target: ", target);
    $(this).parent("li").siblings().find("a").removeClass("active");
    console.log($(this));
    // $('.tab-teaser .tab-menu li a').removeClass('active');
    $(this).addClass("active");
    $("#" + target)
      .fadeIn("slow")
      .siblings(".tab-box")
      .hide();
    return false;
  });

  // FAQ Start

  $(".accordian-content").click(function () {
	  debugger;
    $(this)
      .find(".accordian-question ")
      .toggleClass("active")
      .parent()
      .toggleClass("b-shadow");
    $(this).find(".accordian-question .accordian-span i").toggleClass("ph-x");
	  
   $(this).find(".accordian-answer").toggle().removeClass("b-shadow");
    $(this)
      .siblings(".accordian-content")
      .find(".accordian-question")
      .removeClass("active")
      .parent()
      .removeClass("b-shadow");
    $(this)
      .siblings(".accordian-content")
      .find(".accordian-question .accordian-span i")
      .removeClass("ph-x");
    $(this).siblings(".accordian-content").find(".accordian-answer").hide();
  });

  // FAQ End
  // Crypto-event Accordian Start

  // Crypto-event Accordian End

  //Start Fixed Header
  var header = $("#fixheader");
  // var sticky = header.offsetTop;

  function myFunction() {
    if ($(this).scrollTop() > 650) {
      header.addClass("sticky");
      // $(".transparent").removeClass(".transparent");
      // $(".topbar-active .transparent").removeClass("transparent");
    } else {
      header.removeClass("sticky");
      // $(".top-header").addClass("transparent");
    }
  }
  window.onscroll = function () {
    myFunction();
  };
  //End Fixed Header
  // TAB active Start
  // $(".tabs a").click(function () {
  //  $(this).addClass("active").siblings().removeClass("active");
  // });
  //Tab active End

  // var header2 = $("#mov-slider");
  // // var sticky = header.offsetTop;

  // function myFunction1() {
  //     if ($(this).scrollTop() > 3000) {
  //         header2.find(".movable-slider").addClass("s-active");
  //         // $(".transparent").removeClass(".transparent");
  //         // $(".topbar-active .transparent").removeClass("transparent");
  //     } else {
  //         header2.find(".movable-slider").removeClass("s-active");
  //         // $(".top-header").addClass("transparent");
  //     }
  // }
  // window.onscroll = function() {
  //     myFunction1()
  // };
  $(window).scroll(function (event) {
    // var scrollPos = $(this).scrollTop();
    var el = $(".mov-slider");
    if (el.length) {
      var elPosRelToWindow = el.offset().top - $(window).scrollTop();
      var inView =
        elPosRelToWindow > 0 &&
        elPosRelToWindow < $(window).height() - 100 &&
        elPosRelToWindow < 400;

      if (inView) {
        el.toggleClass("s-active", inView);
      } else {
        jQuery(".mov-slider").removeClass("s-active");
      }
      // var a = $(".proven-section").last();
      // var offset = a.offset();

      // $('#debug').html('elPosRelToWindow = ' + elPosRelToWindow + '<br>inView = ' + inView);
    }
  });

  // $(window).scrollTop()  4186
  // $(window).scroll(function() {
  //     var winHeight = $(this).height();
  //     var scrollTop = $(this).scrollTop();

  //     $(".proven-section").onscroll(function(index){
  //         var elemHeight = $(this).height();
  //         var elementTop = $(this).position().top;

  //         if (elementTop < scrollTop + winHeight && scrollTop < elementTop + elemHeight)
  //            $(".mov-slider").eq(index).addClass("s-active");
  //         else
  //            $(".mov-slider").eq(index).removeClass("s-active");
  //     });
  // });

  const allRanges = document.querySelectorAll(".range-wrap");
  allRanges.forEach((wrap) => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
      setBubble(range, bubble);
    });
    setBubble(range, bubble);
  });

  function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }

  var WindowHeight = jQuery(window).height();

  var load_element = 0;

  // position of element
  // var scroll_position = jQuery('.proven-section').offset().top();

  // var screen_height = $(window).height();
  // var activation_offset = 0;
  // var max_scroll_height = jQuery('body').height() + screen_height;

  // var scroll_activation_point = scroll_position - (screen_height * activation_offset);

  // $(window).on('scroll', function(e) {

  //     var y_scroll_pos = window.pageYOffset;
  //     var element_in_view = y_scroll_pos > scroll_activation_point;
  //     var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

  //     if (element_in_view || has_reached_bottom_of_page) {
  //         $('.mov-slider').addClass("s-active");
  //     } else {
  //         $('.mov-slider').removeClass("s-active");
  //     }

  // });
  // $(window).scroll(function(e){
  //     for (var i = 1; i <= $('#nav li').length; i++) {
  //         if($(window).scrollTop() > $('#nav-'+i).position().top){
  //             $('#nav a').removeClass('active');
  //             $('#nav-'+i).find('a').addClass('active');
  //         }
  //     };
  // })



});
$(document).ready(function () {
	
  $(document.body).prepend('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJMS5KQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
  
	
  const toggleBtn1 = document.getElementsByClassName("toggle-btn1")[0];
  const toggleBtn2 = document.getElementsByClassName("toggle-btn2")[0];
  const hiddenSec = document.getElementsByClassName("hidden-sec")[0];

	toggleBtn1.addEventListener("click", function () {
    hiddenSec.classList.remove("hide");
    toggleBtn1.classList.add("hide");
    toggleBtn2.classList.remove("hide");
  });
  toggleBtn2.addEventListener("click", function () {
    hiddenSec.classList.add("hide");
    toggleBtn2.classList.add("hide");
    toggleBtn1.classList.remove("hide");
  });
});

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop() + 240;

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //      $('nav').fadeIn("fast");
    //} else {
    //      $('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $(".new-tab").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $(".section-tabs .navigation a.active").removeClass("active");
        $(".section-tabs .navigation a").eq(i).addClass("active");
      }
    });
  })
  .scroll();

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop() + 245;

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //      $('nav').fadeIn("fast");
    //} else {
    //      $('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $(".tab-box-sec").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $(".tabs-sec .navigation a.active").removeClass("active");
        $(".tabs-sec .navigation a").eq(i).addClass("active");
      }
    });
  })
  .scroll();

let data = [
  "../assets/img/scholrship-img.png",
  "../assets/img/scholarship-img-2.png",
  "../assets/img/scholarship-img-3.png",
  "../assets/img/scholarship-img-4.png",
  "../assets/img/scholarship-img-5.png",
  "../assets/img/scholarship-img-6.png",
  "../assets/img/scholarship-img-7.png",
  "../assets/img/scholarship-img-8.png",
];
var ind = 1;
// $(window).scroll(function () {
//     console.log("on scroll")
//     4703.16552734375
//     $('.slidern1').offset().top - $(window).scrollTop()

//     var scrollDistance = $(window).scrollTop();
//     $('.slidern').each(function (i) {
//         console.log("..", $(this).position().top)
//         if ($(this).position().top <= scrollDistance) {
//             console.log(i)
//             let scrollhtml = ` <img src=${data[i]} alt="">`

//             $("#onScrollImgId").html(scrollhtml)

//         } else {
//             console.log("else")
//         }

//     });

//     if (ind <= 7 && $('.slidern1').length > 0) {
//         var itemOffset = $('.slidern' + ind).offset().top;
//         var scrollTop = $(window).scrollTop();
//         if (scrollTop >= itemOffset) {
//             let scrollhtml = ` <img src=${data[ind]} alt="" class="imgClass">`
//             $("#onScrollImgId").html(scrollhtml);
//             // $('.imgClass img.active').removeClass('active');
//             // $('.imgClass img').eq(i).addClass('active');
//             ind = ind + 1;
//         }
//     }
// }).scroll();
let stickSec = $(".stick-sec");
if (stickSec.length) {
  var defaultStricTosition = stickSec.offset().top;
  // .................... addmission slider .....................
  $(window)
    .scroll(function () {
      let ind = 1;
      // var scrollDistance = $(window).scrollTop() - 4137;
      var scrollDistance = $(".stick-sec").offset().top - defaultStricTosition;
      $(".icon-box-in.sch").each(function (i) {
        if ($(".icon-box-in.sch.slidern" + i)) {
          if ($(this).position().top <= scrollDistance) {
            let scrollhtml = ` <img src=${data[i]} alt="" class="imgClass">`;
            $("#onScrollImgId").html(scrollhtml);
          }
        }
      });
    })
    .scroll();
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("#main-header").addClass("menu-shadow");
  } else {
    $("#main-header").removeClass("menu-shadow");
  }
});
var cohort_1 = document.getElementById("#cohort_1");
var cohort_2 = document.getElementById("#cohort_2");
function cohortChange(pageName) {
  if (pageName == "cohort1") {
    cohort_1.addClass("active");
    cohort_2.removeClass("active");
  } else {
    cohort_2.addClass("active");
    cohort_1.removeClass("active");
  }
}

$(document).ready(function () {
  $("#product-skill-1").on("click", function () {
    selectGif(
      "#video-1",
      "../assets/img/low-fidelity.gif",
      "#product-skill-1",
      "#product-skill-2",
      "../assets/img/html-gif.gif"
    );
  });
  $("#product-skill-2").on("click", function () {
    selectGif(
      "#video-2",
      "../assets/img/html-gif.gif",
      "#product-skill-2",
      "#product-skill-3",
      "../assets/img/product-growth.gif"
    );
  });
  $("#product-skill-3").on("click", function () {
    selectGif(
      "#video-3",
      "../assets/img/product-growth.gif",
      "#product-skill-3",
      "#product-skill-1",
      "../assets/img/low-fidelity.gif"
    );
  });

  setTimeout(() => {
    if (!localStorage.getItem("isPopupOpened")) {
      openInstagramPopup();
      localStorage.setItem("isPopupOpened", true);
    }
    // openInstagramPopup();
  }, 10000);

});

function selectGif(skill, videoSrc, prevSec, nextSec, nextVideo) {
  $(skill).addClass("active").siblings().removeClass("active");
  $(skill).attr("src", videoSrc).siblings().removeAttr("src");
  // setTimeout(() => {
  //     nextGif(prevSec,nextSec,skill,nextVideo);
  // }, 5000);
}

function nextGif(prevSec, nextSec, skill, nextVideo) {
  $(prevSec + " .accordian-question").removeClass("active");
  $(prevSec + " .accordian-answer").attr("style", "display:none;");

  $(nextSec + " .accordian-question").addClass("active");
  $(nextSec + " .accordian-answer").attr("style", "display:block;");

  $(skill).addClass("active").siblings().removeClass("active");
  $(skill).attr("src", nextVideo).siblings().removeAttr("src");

  if (nextSec == "#product-skill-2") {
    setTimeout(() => {
      nextGif(
        "#product-skill-2",
        "#product-skill-3",
        "#video-3",
        "../assets/img/product-growth.gif"
      );
    }, 7000);
  }
  if (nextSec == "#product-skill-3") {
    setTimeout(() => {
      nextGif(
        "#product-skill-3",
        "#product-skill-1",
        "#video-1",
        "../assets/img/low-fidelity.gif"
      );
    }, 5000);
  }
  if (nextSec == "#product-skill-1") {
    setTimeout(() => {
      nextGif(
        "#product-skill-1",
        "#product-skill-2",
        "#video-2",
        "../assets/img/html-gif.gif"
      );
    }, 20000);
  }
}
