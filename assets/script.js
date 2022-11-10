$(document).ready(function () {
  // $(".lang").on("click", function () {
  //   $(this).children().slideToggle();
  // });

  // $("#selectBox").selectbox();

  $("#burger").on("click", function () {
    $(this).toggleClass("active");
    $(".main-nav").toggleClass("active");
  });

  $('.main-nav__link').on('click', function() {
    $("#burger").removeClass('active');
    $(".main-nav").removeClass("active");
  })

  $(function () {
    $('a[href^="#"]').on("click", function (evt) {
      evt.preventDefault();
      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      $("html, body").animate({ scrollTop: dn }, 1000);
    });
  });
});
