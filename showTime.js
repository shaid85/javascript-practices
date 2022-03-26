let a;
let dates;
let Time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};


setInterval(() => {
a = new Date();
Time = a.getHours() + ' : ' + a.getMinutes() + ' : ' + a.getSeconds();

dates = a.toLocaleDateString(undefined,options);

document.getElementById('time').innerHTML = Time + ' on ' + dates;

}, 1000);