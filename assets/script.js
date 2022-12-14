$(document).ready(function () {
  $("#burger").on("click", function () {
    $(this).toggleClass("active");
    $(".main-nav").toggleClass("active");
    $("body").toggleClass("hidden");
  });

  $(".main-nav__link").on("click", function () {
    $("body").removeClass("hidden");
    $("#burger").removeClass("active");
    $(".main-nav").removeClass("active");
  });

  $('a[href^="#"]').on("click", function (evt) {
    evt.preventDefault();
    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $("html, body").animate({ scrollTop: dn }, 1000);
  });

  $(".form__btn").on("click", function (evt) {
    evt.preventDefault();
    window.location.href = `https://app.bdns.app/search/${$("input").val()} `;
  });
});
