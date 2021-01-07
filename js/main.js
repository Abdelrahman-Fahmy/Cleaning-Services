$(document).ready(function () {
  /*********** start navbar scroll animation ***********/

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
      $(".top-nav").hide();
      $("nav").removeClass("bg-transparent navbar-dark");
      $("nav").addClass("bg-light navbar-light box-shadow");
    } else {
      $(".top-nav").show();
      $("nav").addClass("bg-transparent navbar-dark");
      $("nav").removeClass("bg-light navbar-light box-shadow");
    }
  });

  /*********** start scroll to top button ***********/
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("#button").addClass("show");
    } else {
      $("#button").removeClass("show");
    }
  });

  $("#button").on("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
