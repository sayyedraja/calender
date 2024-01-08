const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const today = new Date();

const week  =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const allmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

date.innerHTML = today.getDate();
day.innerHTML = week[today.getDay()];
month.innerHTML = allmonth[today.getMonth()];
year.innerHTML = today.getFullYear();