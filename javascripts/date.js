window.onload = function(){
var dateObj = new Date();
var y = dateObj.getFullYear();
var m = dateObj.getMonth() + 1;
var d = dateObj.getDate();
var yb = "SUNMONTUEWEDTHUFRISAT".substr(dateObj.getDay() * 3, 3);
document.getElementById("currentDate").innerHTML = d;
document.getElementById("currentYear").innerHTML = y;
document.getElementById("currentMonth").innerHTML = m + "&nbsp;/";
document.getElementById("currentWeek").innerHTML = yb;
}

function scrollToTop() {
var y = document.body.scrollTop || document.documentElement.scrollTop;
if(y) {
scrollTo(0, y/=1.06);
setTimeout(scrollToTop, 1);
}
}
