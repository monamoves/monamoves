// thanks Fitorec
$(document).ready(function(){
  var animate_loop, colors, i;
  colors = ['#7f7f92', '#927f7f', '#92927f', '#929292'];
  i = 0;
  animate_loop = function() {
     $("html body").animate({ backgroundColor: colors[i++ % colors.length] }, 4000, function() {
      animate_loop();
                           });
  };
  animate_loop();
});
