$(document).ready(function() {

  $("#zoomin").hide();
  $("#zoomout").hide();

  $("#home-link").click(function() {
    $(window).scrollTop(0);
  })

  var browserHeight = $(window).height();

  $("#education-link").click(function() {
    $(window).scrollTop(browserHeight*.9);
  })
  $("#ec-link").click(function() {
    $(window).scrollTop(browserHeight*1.9);
  })
  $("#experience-link").click(function() {
    $(window).scrollTop(browserHeight*3);
  })
  $("#contacts-link").click(function() {
    $(window).scrollTop(browserHeight*4.6);
  })


  $(".thumbnail,#zoomin,#zoomout").hover(function() {
    $(".thumbnail").css("border-style", "dotted");
    $(".thumbnail").css("opacity", ".8");
    if ($(".thumbnail").hasClass("thumbnail-shift")) {
      $("#zoomout").show();
    }
    else {
      $("#zoomin").show();
    }
  }, function() {
    $(".thumbnail").css("border-style", "solid");
    $(".thumbnail").css("opacity", "1");
    if ($(".thumbnail").hasClass("thumbnail-shift")) {
      $("#zoomout").hide();
      $("#zoomin").hide();
    }
    else {
      $("#zoomout").hide();
      $("#zoomin").hide();
    }
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
      $("#zoomout").hide();
      $("#zoomin").hide();
    }
    else {
      $(".thumbnail").addClass("thumbnail-shift");
      $(".title").addClass("title-shift");
      $(".sub-title").addClass("sub-title-shift");
      $("#zoomout").hide();
      $("#zoomin").hide();
    }
  })

  $("#zoomin").click(function() {
      $(".thumbnail").addClass("thumbnail-shift");
      $(".title").addClass("title-shift");
      $(".sub-title").addClass("sub-title-shift");
      $("#zoomout").hide();
      $("#zoomin").hide();
  })

  $("#zoomout").click(function() {
      $(".thumbnail").removeClass("thumbnail-shift");
      $(".title").removeClass("title-shift");
      $(".sub-title").removeClass("sub-title-shift");
      $("#zoomout").hide();
      $("#zoomin").hide();
    })
})
