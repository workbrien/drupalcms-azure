/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function (Drupal) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

      $.getScript("js/main.3491b2dc88b2e813712e.js", function( data, textStatus, jqxhr ){
                  console.log( data ); // Data returned
                  console.log( textStatus ); // Success
                  console.log( jqxhr.status ); // 200
                  console.log( "Load was performed." );
                  });
    
        
      $.getScript("js/es2015-polyfills.c5dd28b362270c767b34.js", function( data, textStatus, jqxhr ){
                  console.log( data ); // Data returned
                  console.log( textStatus ); // Success
                  console.log( jqxhr.status ); // 200
                  console.log( "Load was performed." );
                  });
            
      $.getScript("js/polyfills.8bbb231b43165d65d357.js", function( data, textStatus, jqxhr ){
                  console.log( data ); // Data returned
                  console.log( textStatus ); // Success
                  console.log( jqxhr.status ); // 200
                  console.log( "Load was performed." );
                  });
           
      $.getScript("js/runtime.26209474bfa8dc87a77c.js", function( data, textStatus, jqxhr ){
                  console.log( data ); // Data returned
                  console.log( textStatus ); // Success
                  console.log( jqxhr.status ); // 200
                  console.log( "Load was performed." );
                  });
    }
  };

  // We pass the parameters of this anonymous function are the global variables
  // that this script depend on. For example, if the above script requires
  // jQuery, you should change (Drupal) to (Drupal, jQuery) in the line below
  // and, in this file's first line of JS, change function (Drupal) to
  // (Drupal, $)
})(Drupal);
