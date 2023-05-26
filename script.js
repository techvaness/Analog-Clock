// let hr=document.getElementById('hour');
// let min=document.getElementById('minute');
// let sec=document.getElementById('second');

// function display() {
//     let date = new Date();
//     let hh =date.getHours();
//     let mm= date.getMinutes();
//     let ss=date.getSeconds();
//     let hhrotation = 30 * hh + mm/2;
//     let mmrotation = 6*mm;
//     let ssrotation = 6*ss;
//     hr.style.transform= `rotate(${hhrotation}deg)`;
//     min.style.transform= `rotate(${mmrotation}deg)`;
//     sec.style.transform= `rotate(${ssrotation}deg)`;
// }
// setInterval(display,1000);
let hh = document.getElementById("hour");
let mm = document.getElementById("minute");
let ss = document.getElementById("second");
function DisplayTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let hhrotation = 30 * h + m / 2;
  let mmrotation = 6 * m;
  let ssrotation = 6 * s;

  hh.style.transform = `rotate(${hhrotation}deg)`;
  mm.style.transform = `rotate(${mmrotation}deg)`;
  ss.style.transform = `rotate(${ssrotation}deg)`;
}
setInterval(DisplayTime, 1000);
let TodayDate = new Date();
today = TodayDate.getDay();
tomonth = TodayDate.getMonth();
toyear = TodayDate.getFullYear();
document.getElementById("date").innerHTML = `${today} : ${tomonth} : ${toyear}`;
