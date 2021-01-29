///tracking id

// for (let i = 0; i < 5; i++) {
//   console.log("Liv-PK-", Math.round(Math.random() * 1248) * 9827);
// }
// let time = new Date();
// console.log(`Date: ${time.getDate() + 2}`);
// console.log(`Month: ${time.getMonth}`);

var today = new Date();
var dd = String(today.getDate());
var d = String(today.getDay());
var mm = String(today.getMonth());
//January is 0!
var yyyy = today.getFullYear();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//today = months[mm] + "/" + days[d] + "/" + yyyy;
today = months[mm] + "/" + days[d] + "/" + yyyy;
today = `months:${months[mm]}-date:${dd}-day:${days[d]}-year:${yyyy}`;
//console.log(today);
//console.log(days[t.getDay(2021, 26)]);

// function GetDays(year, month) {
//   //month: 1-based, as normal person
//   --month; //change it to 0-based, as Date object
//   let dayname = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   let date = new Date(year, month);
//   let result = [];
//   while (date.getMonth() == month) {
//     result.push(`${date.getDate()}. ${dayname[date.getDay()]}`);
//     date.setDate(date.getDate() + 1);
//   }
//   return result;
// }

// console.log(GetDays(2021, 26));

//console.log(t.getDay());

// var t = new Date(2021, 0, 30);
// console.log(days[t.getDay()]);

// var date = new Date();
// console.log("2", date);

// date.setDate(date.getDate() + 7);
// console.log("1", date);

t = { seconds: 1612120897, nanoseconds: 816000000 };

const convertDateTime = (d) => {
  let t = new Date(1970, 0, 1);
  let time = t.setSeconds(d.seconds);
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(time);
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(time);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(time);
  const ti = new Intl.DateTimeFormat("en", { timeStyle: "short" }).format(time);
  return `${da}/${mo}/${ye}  time: ${ti}`;
};
console.log(convertDateTime(t));

// console.log(
//   new Intl.DateTimeFormat("en", {
//     dateStyle: "medium",
//     timeStyle: "short",
//   }).format(t.seconds)
// );
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
