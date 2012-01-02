var glyph = 1;
var min_glyph = 2;

function do_time() {
  mkTime();
  window.setTimeout(do_time, 1000);
}

function do_glyph () {
  if (glyph === 20) {
    min_glyph = 1 + (min_glyph % 20);
    var shown_glyph = 1 + (min_glyph % 6);
    document.getElementById("glyph_minutes").src = "maya/" + shown_glyph + ".png";
  }
  glyph = 1 + (glyph % 20);
  var shown_glyph = 1 + (glyph % 6);
  document.getElementById("glyph_seconds").src = "maya/" + shown_glyph + ".png";
  window.setTimeout(do_glyph, 540);
}

var mkDate = (function () {
  var m_name = [ "January", "February", "March", "April", "May", "June",
                 "July", "August", "September", "October", "November", "December" ];
  return function() {
    var d = new Date();
    document.getElementById("gregorian").innerHTML = m_name[d.getMonth()] + " " + d.getDate();
  };
})();

var mkYear = function () {
  var d = new Date();
  document.getElementById("year").innerHTML = d.getFullYear();
}

var mkTime = function () {
  var d = new Date();
  var m = d.getMinutes();
  var s = d.getSeconds();
  if (m < 10) { m = "0" + m; }
  if (s < 10) { s = "0" + s; }
  document.getElementById("time").innerHTML = d.getHours() + ":" + m + ":" + s;
}

mkYear();
mkDate();
mkTime();
do_glyph();  
do_time();
document.getElementById("myear").innerHTML = "13 . 20 . 19";
document.getElementById("mdate").innerHTML = "Yax 17"
document.getElementById("mtime").innerHTML = "20 . 20 . 18";
