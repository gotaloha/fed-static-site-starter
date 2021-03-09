;(function ($, window, document) {

  // ########################################
  // # Define Functions
  // ########################################

  function makeSwatches() {
    $('.swatch').each(function() {
      let name = $(this).data("name"),
          color = $(this).data("hex");

      $(this).css('background-color', '#' + color);
      $(this).html(`<p>${name}<span>#${color}</span></p>`);
    });
  };

  // ########################################
  // # Initialize all necessary event handlers
  // ########################################

  var init = function () {
    makeSwatches();
  };

  // ########################################
  // # Call init on Document Ready
  // ########################################

  $(init);

  })(window.jQuery, this);
