"use strict";

$(function () {
  setArrivalItemHeight();
  $(window).on('resize', setArrivalItemHeight);
  $('.slider-wrap').slick({
    dots: true,
    arrows: false
  });
  $('.product-slider-container').slick({
    dots: true,
    arrows: false,
    dotsClass: 'product-slider-dots'
  });
  $('#form-message').validate({
    errorPlacement: function (error, element) {

    }
  });
  $("#to-top").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

function setArrivalItemHeight() {
  $('.arrivals-content-item').each(function (index, item) {
    var cardHeight = $(item).find('.arrival-card').outerHeight();
    $(item).height(cardHeight);
  });
}
