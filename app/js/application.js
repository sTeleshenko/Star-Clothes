"use strict";

$(function () {
  setArrivalItemHeight();
  $(window).on('resize', setArrivalItemHeight);
});

$(document).ready(function(){
  $('.slider-wrap').slick({
    dots: true,
    arrows: false
  });
});

function setArrivalItemHeight() {
  $('.arrivals-content-item').each(function (index, item) {
    var cardHeight = $(item).find('.arrival-card').height();
    $(item).height(cardHeight);
  });
}
