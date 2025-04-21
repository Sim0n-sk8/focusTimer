const timer = document.getElementById("timer");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const input = document.getElementById("input");

let time = 0;
let running = false;
let interval;

function showTime() {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    timer.textContent = minutes + ":" + seconds;

}

input.addEventListener("change",()=> {
    let mins = parseInt(input.value);
    if(!isNaN(mins) && mins > 0){
        time = mins * 60;
        showTime();
    }
    
});

start.addEventListener("click" , () => {
    if (running || time <= 0) return;

    running = true;
    interval = setInterval(() =>{
        time--;
        showTime;

        if (time <= 0) {
            clearInterval(interval);
            running = false;

            alert("Time is up!");

        }
    },1000);
});


pause.addEventListener("click", () => {
    clearInterval(interval);
    running = false;


});

stop.addEventListener("click", () =>{
    clearInterval(interval);
    running = false;
    time = 0;
    showTime();
});
