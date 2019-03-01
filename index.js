// thanks dfperry
$(document).ready(function() {
  var stopLoop = false;
  var Loop = null;
  var i = 0;
  var colors = ["#400080", "#191970", "#420000", "#002700", "#282828"];
  var colorPicker = 0;
  Loop = function() {
    i = i % colors.length + 1;
    colorPicker = i - 1;

    $("#name-span").animate({ color: colors[colorPicker] }, 1500);

    if (!stopLoop) window.setTimeout(Loop, 1500);
  };
  Loop();
});