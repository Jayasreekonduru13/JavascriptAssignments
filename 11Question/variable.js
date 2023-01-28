const now=new Date()
console.log("year: ", now.getFullYear());
console.log("Month: ",now.getMonth());
console.log("Date: ", now.getDate());
console.log("Day: ", now.getDay());
console.log("Hours: ", now.getHours());
console.log("minutes: ", now.getMinutes());


const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

const d = new Date();
let years = Math.round(d.getTime()/year);
console.log(years*1000*60*60);