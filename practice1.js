function das() {
  let i = 0;
  let day = date();
  let text =
    "I am Tazhibayeva Perizat from group CS-2110. " +
    day +
    " days left until my graduation";
  let interval = setInterval(function () {
    document.getElementById("demo").innerHTML += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
    }
  }, 150);
}
setTimeout(() => {
  document.getElementById("demo").innerHTML = null;
  das();
}, 2500);
function date() {
  let today = new Date();
  let dd = today.getDate();
  document.getElementById("datee").innerHTML = dasd(today.getDay());
  let mm = today.getMonth() + 1;
  document.getElementById("month").innerHTML = mm;
  let yyyy = today.getFullYear();
  document.getElementById("year").innerHTML = yyyy;
  setInterval(() =>
  {
    let today = new Date();
    document.getElementById("time").innerHTML = today.getHours() + " : " +  today.getMinutes() + " : " + today.getSeconds();
  }, 1000)
  let day_1 = new Date(yyyy, mm, dd).getTime();
  let day_2 = new Date(2024, 5, 25).getTime();
  let rs = Math.abs(Math.floor((day_1 - day_2) / (60 * 60 * 24 * 1000)));
  return rs;
}

// monday tuesday wednesday thursday friday saturday sunday
function dasd(a)
{
 switch(a)
 {
   case 0:
     return "Monday";
   case 1:
     return "Tuesday";
   case 2:
     return "Wednesday";
   case 3:
     return "Thursday";
   case 4:
     return "Friday";
   case 5:
     return "Saturday";
   case 6:
     return "Sunday";
 }
}

function calc(calback) {
  let x = document.getElementById("n1").value;
  let y = document.getElementById("n2").value;
  let r = calback(x, y);
  console.log(r);
  document.getElementById("result").innerHTML = r;
}
function multi(a, b)
{
  return a*b;
}

function devide(a, b)
{
  return a/b;
}
function reset() {
  document.getElementById("n1").value = null;
  document.getElementById("n2").value = null;
  document.getElementById("result").innerHTML = null;
}
