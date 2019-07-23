// thanks dfperry
$(document).ready(function() {
  var stopLoop = false;
  var Loop = null;
  var i = 0;
  var colors = ["#400080", "#191970", "#560000", "#003b00", "#3c3c3c"];
  var colorPicker = 0;
  Loop = function() {
    i = i % colors.length + 1;
    colorPicker = i - 1;

    $("#name-span").animate({ color: colors[colorPicker] }, 1500);

    if (!stopLoop) window.setTimeout(Loop, 1500);
  };
  Loop();

  /*$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('h2').show();
    } else {
      $('h2').animate({right:'250px'})
      $('h2').css({whiteSpace:nowrap,});
    }
  }); */

});

// #400080 purple, #191970 blue, #560000 red, #003b00 green, #3c3c3c dark grey