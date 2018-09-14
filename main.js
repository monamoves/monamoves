$(document).ready(function() {
  $('#voyage').on('mouseenter', event => {
    $(event.currentTarget).animate({ color: "Ea36be" }, 500)
      .animate({ fontSize: "2em" }, 500);
    }).on('mouseleave', event => {
      $(event.currentTarget).animate({ color: "FFCC00"}, 500)
      .animate({ fontSize: "1em"}, 500);
    });

    $('#challenges').on('mouseenter', event => {
      $(event.currentTarget).animate({ color: "0F9D58"}, 500)
      .animate({ fontSize: "2em"}, 500).delay(400).animate({ color: "9F5CC0"}, 500)
      .animate({ fontSize: "1em"}, 500);
    });

});