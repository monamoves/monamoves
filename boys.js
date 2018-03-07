$(document).ready(function() {
var cvs = document.getElementById("ffreckles");
var ctx = cvs.getContext("2d");
var coords = [
  [50, 40],
  [200, 15],
  [160, 25],
  [180, 30],
  [30, 17],
  [27, 13],
  [60, 29],
  [225, 19],
  [203, 25],
  [308, 31],
  [300, 27],
  [240, 18],
  [220, 33],
  [250, 29],
  [280, 31],
  [240, 30],
  [44, 33],
  [80, 22],
  [75, 10],
  [125, 18],
  [190, 11],
  [310, 22],
  [117, 21],
  [137, 15],
  [290, 20]
];
for (var i = 0; i < coords.length; i++) {
  ctx.beginPath();
  ctx.arc(coords[i][0], coords[i][1], 1, 0, Math.PI * 2, true);
  ctx.fillStyle = "#d29a50";
  ctx.fill();
}
});
$(document).ready(function() {
var canvas = document.getElementById('mfreckles');
var ctxM = canvas.getContext('2d');
var coords = [ [50,40], [200,15], [160,25], [180,30], [30,17], [27,13], [60,29],[225,19], [203,25],[308,31],[300,27],[240,18],[220,33],[250,29], [350,41],[340,30], [44,33],[80,22],[75,10],[125,18],[190,11],[360,22],[117,21],[137,15],[300,20] ];
for(var i = 0; i < coords.length; i++){
    ctxM.beginPath();
    ctxM.arc(coords[i][0], coords[i][1], 1, 0, Math.PI * 2, true);
    ctxM.fillStyle = "#d29a50";
    ctxM.fill();
}
});

$(document).ready(function() {
  var cvs = document.getElementById("ffreckles");
  var ctx = cvs.getContext("2d");
  var coords = [
    [50, 40],
    [200, 15],
    [160, 25],
    [180, 30],
    [30, 17],
    [27, 13],
    [60, 29],
    [225, 19],
    [203, 25],
    [308, 31],
    [300, 27],
    [240, 18],
    [220, 33],
    [250, 29],
    [280, 31],
    [240, 30],
    [44, 33],
    [80, 22],
    [75, 10],
    [125, 18],
    [190, 11],
    [310, 22],
    [117, 21],
    [137, 15],
    [290, 20]
  ];
  for (var i = 0; i < coords.length; i++) {
    ctx.beginPath();
    ctx.arc(coords[i][0], coords[i][1], 1, 0, Math.PI * 2, true);
    ctx.fillStyle = "#d29a50";
    ctx.fill();
  }
}
);
$(document).ready(function() {
  var canvas = document.getElementById('mfreckles');
  var ctxM = canvas.getContext('2d');
  var coords = [ [50,40], 
  [200,15], 
  [160,25], 
  [180,30], 
  [30,17], 
  [27,13], 
  [60,29],
  [225,19], 
  [203,25],
  [308,31],
  [300,27],
  [240,18],
  [220,33],
  [250,29], 
  [350,41],
  [340,30], 
  [44,33],
  [80,22],
  [75,10],
  [125,18],
  [190,11],
  [360,22],
  [117,21],
  [137,15],
  [300,20] 
  ];
  for (var i = 0; i < coords.length; i++) {
    ctxM.beginPath();
    ctxM.arc(coords[i][0], coords[i][1], 1, 0, Math.PI * 2, true);
    ctxM.fillStyle = "#d29a50";
    ctxM.fill();
  }
});