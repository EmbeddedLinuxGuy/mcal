var mcal = {
    mmonth : 1,
    mdate : 1,
    mhr : 1,
    mmin : 1,
    msec : 1,
    mjif : 1
};

var maya_month = [
    "Pop", "Wo", "Sip", "Sotz", "Sek", "Xul", "Yaxkin", "Mol", "Chen", "Yax",
    "Sak", "Keh", "Mak", "Kankin", "Muwan", "Pax", "Kayab", "Kumku", "Wayeb"
];

function init_time () {
    var ny = 1324465860; //13.20.20 1.1 1.1.1 === 1324465860
    var d = new Date();
    var s = Math.floor(d.getTime()/1000) - ny;
    var t = s % 86400;
    
    mcal.mhr = 1 + Math.floor(t / 4320);
    t = t % 4320;
    mcal.mmin = 1 + Math.floor(t / 216);
    t = t % 216;
    mcal.msec = 1 + Math.floor(t / 10.8);

    s = Math.floor(s/86400);
    mcal.mdate = 1 + s % 20;
    s = Math.floor(s/20);
    mcal.mmonth = 1 + s % 20;

    redrawGlyphs();
}

function redrawGlyphs() {
    document.getElementById("isec").src = "maya/" + mcal.msec + ".png";
    document.getElementById("imin").src = "maya/" + mcal.mmin + ".png";
    document.getElementById("ihr").src = "maya/" + mcal.mhr + ".png";
    document.getElementById("idate").src = "maya/" + mcal.mdate + ".png";
    document.getElementById("imonth").src = "maya/" + mcal.mmonth + ".png";

    document.getElementById("mtime").innerHTML = [ mcal.mhr, mcal.mmin, mcal.msec ].join(" . ");
    document.getElementById("mdate").innerHTML = maya_month[mcal.mmonth-1] + " " + mcal.mdate;
    document.getElementById("myear").innerHTML = "13 . 20 . 20"; // will never reach 14.1.1
}

function do_time() {
  mkTime();
  window.setTimeout(do_time, 1000);
}

function do_glyph () {
    mcal.mjif = 1 + (mcal.mjif % 20);
    if (mcal.mjif === 1) {
	mcal.msec = 1 + (mcal.msec % 20);
	if (mcal.msec === 1) {
	    mcal.mmin = 1 + (mcal.mmin % 20);
	    if (mcal.mmin === 1) {
		mcal.mhr = 1 + (mcal.mhr % 20);
	    }
	}
	redrawGlyphs();
    }
    // XXX seconds -> jiffies
    document.getElementById("glyph_seconds").src = "maya/" + mcal.mjif + ".png";
    window.setTimeout(do_glyph, 540); // Yikes, this should be timer-based
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
//  var s = d.getSeconds();
    if (m < 10) { m = "0" + m; }
//  if (s < 10) { s = "0" + s; }
    document.getElementById("time").innerHTML = d.getHours() + ":" + m;// + ":" + s;
}

init_time();

mkYear();
mkDate();
mkTime();
do_glyph();  
do_time();


//December 21 11:11:00am GMT 2012
//=== 1356088260
//=== 14.1.1 1.1 1.1.1

// not used
var maya_day = [
    "Imix", "Ik", "Akbal", "Kan", "Chicchan", "Cimi",
    "Manik", "Lamat", "Muluc", "Oc", "Chuen", "Eb", "Ben",
    "Ix", "Men", "Cib", "Caban", "Etznab", "Cauac", "Ahau"
];
