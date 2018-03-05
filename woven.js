// Increase number of repeats
$(document).ready(function() {
  function multiplyRepeat(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
      copy = node.cloneNode(deep);
      node.parentNode.insertBefore(copy, node);
    }
  }
  multiplyRepeat(document.querySelector(".color-repeat"), 2, true);
// Input warp colors
  function setWarp(event) {
    event.preventDefault();
    var allWarpEnds = document.querySelectorAll(
      ".warp-choice-one, .warp-choice-two, .warp-choice-three"
    );
    var firstColor = $("#first-color").val();
    console.log(firstColor);
    var secondColor = $("#second-color").val();
    console.log(secondColor);
    var thirdColor = $("#third-color").val();
    console.log(thirdColor);
    var i;
    for (i = 0; i < allWarpEnds.length; i++) {
      document.querySelectorAll(".warp-choice-one")[
        i
      ].style.background = firstColor;
      document.querySelectorAll(".warp-choice-two")[
        i
      ].style.background = secondColor;
      document.querySelectorAll(".warp-choice-three")[
        i
      ].style.background = thirdColor;
    }
  }

  $("#choose-warp-colors").on("submit", setWarp);
// Input for weft colors, weaves sample
  function setWeft(event) {
    event.preventDefault();
    var allWarpEnds = document.querySelectorAll(
      ".warp-choice-one, .warp-choice-two, .warp-choice-three"
    );
    var firstColor = $("#first-color").val();
    var secondColor = $("#second-color").val();
    var thirdColor = $("#third-color").val();
    var fourthColor = $("#fourth-color").val();
    console.log(fourthColor);
    var fifthColor = $("#fifth-color").val();
    console.log(fifthColor);
    var sixthColor = $("#sixth-color").val();
    console.log(sixthColor);
    var i;
    for (i = 0; i < allWarpEnds.length; i++) {
      document.querySelectorAll(".one, .ten, .seventeen")[
        i
      ].style.background = firstColor;
      document.querySelectorAll(".two, .three, .five")[
        i
      ].style.background = fourthColor;
      document.querySelectorAll(".four, .twelve, .fourteen")[
        i
      ].style.background = secondColor;
      document.querySelectorAll(".six, .nine, .fifteen")[
        i
      ].style.background = thirdColor;
      document.querySelectorAll(".seven, .eight, .eleven")[
        i
      ].style.background = fifthColor;
      document.querySelectorAll(".thirteen, .sixteen, .eighteen")[
        i
      ].style.background = sixthColor;
    }
  }

  $("#choose-weft-colors").on("submit", setWeft);
  console.log($("#check").css("background"));
  
// Clears sample
  function resetWeave(event) {
    event.preventDefault();
    var allWarpEnds = document.querySelectorAll(
      ".warp-choice-one, .warp-choice-two, .warp-choice-three"
    );
    var i;
    for (i = 0; i < allWarpEnds.length; i++) {
      document.querySelectorAll(
        ".warp-choice-one, .warp-choice-two, .warp-choice-three"
      )[i].style.backgroundColor =
        "transparent";
    }
  }
     $("#reset-weave").click("reset", resetWeave);  
});
  