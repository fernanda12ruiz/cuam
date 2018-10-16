$(document).ready(function(){

  // Masonry
  var $grid = $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });

  $(document).foundation();

});

// Smooth State
$(function(){
  'use strict';
  var $page = $('#main'),
      $body = $('html, body'),

      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        forms: 'form',

        onProgress: {
          duration: 150, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-loading');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onStart: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-loading');
            $container.addClass('is-exiting');
            $body.animate({ 'scrollTop': 0 });
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-loading');
            $container.removeClass('is-exiting');
            $body.animate({ 'scrollTop': 0 });
            // Inject the new content
            $container.html($newContent);
          }
        },

      onAfter: function($container, $newContent) {
        // Masonry
        var $grid = $('.grid').masonry({
          // set itemSelector so .grid-sizer is not used in layout
          itemSelector: '.grid-item',
          // use element for option
          columnWidth: '.grid-sizer',
          percentPosition: true
        });

        // layout Masonry after each image loads
        $grid.imagesLoaded().progress( function() {
          $grid.masonry('layout');
        });

        $(document).foundation();

      }
    },
      smoothState = $page.smoothState(options).data('smoothState');

});
