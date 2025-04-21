const timer = document.getElementById("timer");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const input = document.getElementById("input");

let interval = null;
let timeLeft = 0;
let isRunning = false;