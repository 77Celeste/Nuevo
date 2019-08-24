(function($) {
  $(function() {
    var userTarget = "";
    var exit = false;
    $('.input-daterange').datepicker({
      format: "dd/mm/yyyy",
      weekStart: 1,
      language: "en",
      daysOfWeekHighlighted: "0,6",
      startDate: "01/01/2017",
      orientation: "bottom auto",
      autoclose: true,
      showOnFocus: true,
      maxViewMode: 'days',
      keepEmptyValues: true,
      templates: {
        leftArrow: '&lt;',
        rightArrow: '&gt;'
      }
    });
    $('.input-daterange').focusin(function(e) {
      userTarget = e.target.name;
    });
    $('.input-daterange').on('changeDate', function(e) {
      if (exit) return;
      if (e.target.name != userTarget) {
        exit = true;
        $(e.target).datepicker('clearDates');
      }
      exit = false;
    });
  }); // end of document ready
})(jQuery); // end of jQuery name spac