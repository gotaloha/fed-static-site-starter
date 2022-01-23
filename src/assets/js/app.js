;(function ($, window) {
  var example = function () {
    console.log('Hello from app.js');
  };

  var init = function () {
    example();
  };

  // ########################################
  // # Call init on Document Ready
  // ########################################

  $(init);
})(window.jQuery, this);
