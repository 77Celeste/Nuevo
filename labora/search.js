(function($) {
  $(function() {

    $('.search-toggle').on('click', e => {
      $('.search-box, .search-input').toggleClass('active');
      $('.search-input input').focus();
      e.preventDefault();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name spac