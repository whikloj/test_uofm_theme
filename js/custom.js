/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.uofm_sass_theme = {
    attach: function(context, settings) {
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
    }
  };

})(jQuery, Drupal);
