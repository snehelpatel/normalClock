
function clock (){
  // console.log("hey")
var currentTime = new Date();
var hours = currentTime.getHours ();
var minutes = currentTime.getMinutes ();
var seconds = currentTime.getSeconds ();

if (minutes < 10) {minutes = "0" + minutes;}
if (seconds < 10) {seconds = "0" + seconds;}

if (hours < 10) { hours = "0" + hours;}

document.getElementById("clock-container").innerHTML= hours+":"+minutes+":"+seconds;
}
var clickclock = setInterval(clock, 1000);
clock();
