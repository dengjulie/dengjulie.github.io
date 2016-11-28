$(document).ready(function() {

  $("#home-link").click(function() {
    $(window).scrollTop(0);
  })

  var browserHeight = $(window).height();
  // console.log(browserHeight);
  // console.log($("#education-container").attr('height'));
  // HOW TO DO THIS
  $("#education-link").click(function() {
    $(window).scrollTop(0);
  })
  $("#ec-link").click(function() {
    $(window).scrollTop(0);
  })
  $("#experience-link").click(function() {
    $(window).scrollTop(0);
  })
  $("#contacts-link").click(function() {
    $(window).scrollTop(0);
  })

  $(".thumbnail").hover(function() {
    $(".thumbnail").css("border-style", "solid");
  }, function() {
    $(".thumbnail").css("border-style", "dotted");
  })

  //HOW GET TRANSITION TIME
  
  // $(".thumbnail").hover(function() {
  //   $(".thumbnail").animate({"opacity": "0"}, "slow");
  //   },
  //   function() {
  //   $(".thumbnail").().animate({"border-style": "dotted"}, "slow");
  // });


  $(".thumbnail").click(function() {
    if ($(".thumbnail").hasClass("thumbnail-shift")) {
      $(".thumbnail").removeClass("thumbnail-shift");
      $(".title").removeClass("title-shift");
      $(".sub-title").removeClass("sub-title-shift");
    }
    else {
      $(".thumbnail").addClass("thumbnail-shift");
      $(".title").addClass("title-shift");
      $(".sub-title").addClass("sub-title-shift");
    }
  })

})
