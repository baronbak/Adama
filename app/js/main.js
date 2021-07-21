function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

$(function () {
  $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    // pauseOnFocus: false,
    // pauseOnHover: false,
    // autoplaySpeed: 500,
    // fade: false,
    // dots: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: "unslick"
      },
    ],
  });
});

$(function () {
  $(".closeable")
    .on("click", function (e) {
      /* Order of operations, have to set height style before removing close class */
      if (!$(this).hasClass("close")) {
        $(this).height("");
      } else {
        $(this).height($(this).attr("data-height"));
      }
      $(this).toggleClass("close");
    })
    .height("auto")
    .each(function () {
      $(this).attr("data-height", $(this).height());
    })
    .height("");

  // $(".btn").click(function () {
  //   if (!$(this).data("status")) {
  //     $(this).next(".block_with_text").fadeToggle(100);
  //   } else {
  //     $(this).next(".block_with_text").fadeToggle(100);
  //   }
  // });

  $(".btn").on("click", function () {
    if ($(this).prev(".block_with_text").hasClass("on")) {
      $(this).next(".block_with_text").removeClass("on");
      $(this).next(".block_with_text").fadeToggle(100);
    } else {
      $(this).next(".block_with_text").fadeToggle(100);
      $(this).next(".block_with_text").addClass("on");
    }
  });

  $(".content_choose").click(function () {
    $(".content_choose").css("z-index", "-5");
    $(".content_radio").css("z-index", "10");
    $(".content_choose").animate({ opacity: 0 }).css({ "z-index": 5 });
    $(".content_radio").animate({ opacity: 1 }).css({ "z-index": 5 });
  });

  // $(".toFooter").click(function () {

  //   $(".footer").css("z-index", "-5");
  //   $(".footer").animate({ opacity: 0 }).css({ "z-index": 5 });

  //   $(".footer").css("z-index", "5");
  //   $(".footer").animate({ opacity: 1 }).css({ "z-index": 5 });
  // });

  $(".toFooter").on("click", function () {
    if ($(".footer").hasClass("on")) {
      $(".footer").removeClass("on");
      $(".toFooter").removeClass("on");
    } else {
      $(".footer").addClass("on");
      $(".toFooter").addClass("on");
    }
  });
});

// $(".btn").click(function () {
//   $(this).prev(".block_with_text").css("opacity", "1");
// });
