$(function () {
  "use strict";

  // Footer year
  $("#year").text(new Date().getFullYear());

  // Navbar gains a border/shadow once the page scrolls
  var $nav = $("#mainNav");
  var $navHeight = $nav.outerHeight();

  function updateNavState() {
    if ($(window).scrollTop() > 40) {
      $nav.addClass("is-scrolled");
    } else {
      $nav.removeClass("is-scrolled");
    }
  }
  updateNavState();
  $(window).on("scroll", updateNavState);

  // Smooth-scroll for in-page anchor links, accounting for the fixed navbar height
  $('a.nav-link[href^="#"], a.btn[href^="#"]').on("click", function (e) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      e.preventDefault();
      var offset = target.offset().top - ($navHeight || 0) + 1;
      $("html, body").animate({ scrollTop: offset }, 500);

      // Close the mobile menu after choosing a link
      var $collapse = $("#navMenu");
      if ($collapse.hasClass("show")) {
        $collapse.collapse("hide");
      }
    }
  });
});
