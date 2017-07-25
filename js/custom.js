/*global $, alert, console*/

$(function () {
  'use strict';
  // Trigger Nice Scroll Plugin
  $('html').niceScroll({
    cursorcolor: '#f7600e',
    cursorwidth: 10,
    cursorborderradius: '3px',
    cursorborder: '1px solid #f7600e'
  });
  // Change Header Height
  var myHeader = $('.header'),
    myIntro = $('.intro'),
    leftArrow = $('.testim .fa-chevron-left'),
    rightArrow = $('.testim .fa-chevron-right');
  myHeader.height($(window).height());
  myIntro.each(function () {
    $(this).css('paddingTop', (($(window).height() - myIntro.height()) / 2) - 80);
  });
  // Scroll To Features 
  $('.header .arrow i').click(function () {
    $('html, body').animate({
      scrollTop: $('.features').offset().top
    }, 1000);
  });
  $('.hire').click(function () {
    $('html, body').animate({
      scrollTop: $('.our-team').offset().top
    }, 1000);
  });
  // Show Hidden Items From Work
  $('.show-more').click(function () {
    $('.our-work .hidden').fadeIn(1000);
  });
  // Check Testimonials
  function checkClients() {
    if ($('.client:first').hasClass('active')) {
      leftArrow.fadeOut();
    } else {
      leftArrow.fadeIn();
    }
    if ($('.client:last').hasClass('active')) {
      rightArrow.fadeOut();
    } else {
      rightArrow.fadeIn();
    }
  }
  checkClients();
  $('.testim i').click(function () {
    if ($(this).hasClass('fa-chevron-right')) {
      $('.testim .active').fadeOut(100, function () {
        $(this).removeClass('active').next('.client').addClass('active').fadeIn();
        checkClients();
      });
    } else {
      $('.testim .active').fadeOut(100, function () {
        $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
        checkClients();
      });
    }
  });
});