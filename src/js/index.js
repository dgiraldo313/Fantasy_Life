//include styles
require('../scss/styles.scss');

//include jquery
import $ from 'jquery';

//check if is in viewport
function isInViewport(element) {
  // get the elements top and bottom coordinate
  let elementTop = element.offset().top;
  let elementBottom = elementTop + element.outerHeight();

  //get viewports top and bottom cordinates
  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  //check if element is inside viewport coordinates
  return elementBottom > viewportTop && elementTop < viewportBottom;
}

//smooth scroll
function smoothScroll() {
  //select all identifiers
  let $idLinks = $("a[href^='#']");

  // console.log($idLinks);

  //add smooth scroll functionality to links with id
  $idLinks.on('click', function (event) {
    let $idLink = $(this.getAttribute('href'));
    if ($idLink.length) {
      // prevent page from reloading
      event.preventDefault();

      // stop any event and then animate scrolling (scroll over 800 ms)
      $('html, body').stop().animate({
        scrollTop: $idLink.offset().top,
      }, 1000);
    }
  });

}

// make reviews appear on scroll
function animateReviews() {
  //get a list of all review elements
  let $reviews = $('#reviews .content .reviews-container').children();

  //Go through all of the review elements and activate animations
  $reviews.map(function () {
    let $review = $(this);

    //activate animation when review section is in view
    if (isInViewport($review)) {
      //add fadeUp class, which triggers animation
      $review.addClass('fadeUp');
    }
  });

}

function animateFeatures() {
  //get a list of all review elements
  let $features = $('#features .content .features-container').children();

  //Go through all of the review elements and activate animations
  $features.map(function () {
    let $feature = $(this);

    //activate animation when review section is in view
    if (isInViewport($feature)) {
      //add fadeUp class, which triggers animation
      $feature.addClass('animate');
    }
  });
}

function init() {
  //activate smooth scroll for all # links
  smoothScroll();
  // activate onScroll animations
  $(window).scroll(function () {
    animateReviews();
    animateFeatures();
  });
}

$(document).ready(() => {
  init();
});
