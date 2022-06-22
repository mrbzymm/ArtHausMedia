$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      let $links = $(".nav-link-active")
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $links.toggleClass("links-scrolled", $(this).scrollTop() > $nav.height());
    })
  })

