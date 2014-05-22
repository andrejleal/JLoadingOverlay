/////////////////////////////////////////////////////
///Author: André Leal & Pedro Sombreireiro
/////////////////////////////////////////////////////

(function ($) {
    var jLoadingOverlayId = 'jLoadingOverlay';

     $.fn.jLoadingOverlay = function (action) {
         if(action == ''){
             $(this).append('<div id="' + jLoadingOverlayId + '" class="loading-overlay" style="display: none;"></div>');
             $('DIV#'+jLoadingOverlayId).append('<div class="spinner"></div>');
             $('DIV#'+jLoadingOverlayId).append('<div class="overlay-bg"></div>');
             $('DIV#' + jLoadingOverlayId + ' DIV.spinner').append('<div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div>');
             $('DIV#' + jLoadingOverlayId).show();
         }
         else if('close'){
             $('DIV#'+jLoadingOverlayId).detach();
         }
		 return true;
     }
 })(jQuery);
