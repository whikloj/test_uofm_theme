/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.uofm_sass_theme = {
    attach: function(context, settings) {
      let resultsHoverTimeout;
      let displayHoverTimeout;
      $('button.btn-territory-acknowledgement', context).on("click", function () {
          $('button.btn-territory-acknowledgement').toggleClass('active');
          $('div.territory-acknowledgement').toggleClass('display-none');
      });
      $('a.mini-hamburger', context).on("click", function () {
        $('div.mobile-drawer').toggleClass('display-none');
      });
      $('h2.collapsible-section__title').on("click", function () {
        $(this).siblings('div.collapsible-section__content').toggleClass('display-none');
        $(this).toggleClass('active');
      });
      $('.pager__results .pager__item').hover(function() {
        if (resultsHoverTimeout) {
          clearTimeout(resultsHoverTimeout);
        }
        $(this).addClass('expand').siblings('.pager__item').addClass('expand');
      }, function() {
        const $item = $(this);
        resultsHoverTimeout = window.setTimeout(function() {
            $item.removeClass('expand').siblings('.pager__item').removeClass('expand');
            }, 500);
      });
      $('.pager__display .pager__item').hover(function() {
        if (displayHoverTimeout) {
          clearTimeout(displayHoverTimeout);
        }
        $(this).addClass('expand').siblings('.pager__item').addClass('expand');
      }, function() {
        const $item = $(this);
        displayHoverTimeout = window.setTimeout(function() {
          $item.removeClass('expand').siblings('.pager__item').removeClass('expand');
        }, 500);
      });
    }
  };

})(jQuery, Drupal);
