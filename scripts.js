$(document).ready(function() {
  AOS.init();
  if ($(window).width() < 768) {
    $(".fixed-top").addClass("bg-dark");

  }
  if ($(window).width() < 400) {
    $("#banner").css("width", "auto");
    $("#banner").css("height", "750px");
    $("#banner .overlay").css("width", "auto");
    $("#banner .overlay").css("height", "750px");
    $("#banner").css("background", "none");
    $("#resume").css("background", "none");
    $("#banner").css("background-color", "lightblue");
    $("#resume").css("background-color", "lightblue");
  }

  $('.navbar-brand').click(function(){
      $('html,body').animate({ scrollTop: 0 }, 1000);
      return false;
  });
  $('.nav-link').click(function(){
      var target = $(this).attr('href');
      if(target.includes('#')){
        var current = $(target);
        if (target.length) {
            var top = current.offset().top;
            $('html,body').animate({scrollTop: top}, 1000);
            return false;
        }
      }
  });
  $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".fixed-top").addClass("bg-dark");
        } else {
            if ($(window).width() >= 768) {
              $(".fixed-top").removeClass("bg-dark");
            }
        }
    });
    $(window).on('resize', function() {
      if ($(window).width() < 768) {
        $(".fixed-top").addClass("bg-dark");
      }
    });


});


/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
