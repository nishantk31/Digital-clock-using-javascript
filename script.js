function showTime(){
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
var session = 'AM';
if(hours==0){
    hours = 12; //12 hour format
}
 if(hours>12){
     hours = hours - 12; //12 hour format
     session = 'PM';
 }

 if(hours<10){
     hours = '0' + hours;
 }
 if(minutes<10){
     minutes = '0' + minutes;
 }
 if(seconds<10){
     seconds = '0' + seconds;
 } 

document.getElementById('Digital Clock').innerHTML = hours + ':' + minutes + ':' + seconds + session;


setTimeout(showTime,1000);
}

showTime();