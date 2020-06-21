//hold setInterval()
let interval = null;

//hold stopwatch status
let tmp = 0;

//hold time values
let seconds = 0;
let minutes = 0;

//hold time values, witch will display
let defineSeconds = 0;
let defineMinutes = 0;

var specialButton = document.getElementsByClassName("startButton").getElementById("start");
//Function to increment next time value
function Watch(){
    seconds++;
    //if seconds value equals 60, make seconds 0 and minutes one more 
    if(seconds/60 === 1){
        seconds = 0;
        minutes++;

        //if minutes value equals 150, stop the stopwatch
        if(minutes/150 === 1){
            window.clearInterval(interval);
            document.getElementById("start").innerHTML = "start";
            tmp = 0;
        }
    }
    //if secononds or minutes has one digit, add 0 in front
    if(seconds < 10){
        defineSeconds = "0" + seconds.toString();
    } else {
        defineSeconds = seconds;
    }

    if(minutes < 10){
        defineMinutes = "0" + minutes.toString();
    } else {
        defineMinutes = minutes;
    }

    //show new values on screen
    document.getElementById("time").innerHTML = defineMinutes + ":" + defineSeconds;
}

//stopwatch start button. If you push start, button change name.
function start(){
    if(tmp === 0){
        //start
        interval = window.setInterval(Watch, 1000);
        document.getElementById("start").innerHTML = "stop";
        tmp = 1;
    } else {
        //stop
        window.clearInterval(interval);
        document.getElementById("start").innerHTML = "start";
        tmp = 0;
    }
}

//button to start the stopwatch at minutes 00:00
function Ihalf(){
    window.clearInterval(interval);
    minutes = 0;
    seconds = 0;
    document.getElementById("time").innerHTML = "00:00";
}

//button to start the stopwatch at minutes 45:00
function IIhalf(){
    window.clearInterval(interval);
    minutes = 45;
    seconds = 0;
    document.getElementById("time").innerHTML = "45:00";
}

//button to start the stopwatch at minutes 90:00
function IIIhalf(){
    window.clearInterval(interval);
    minutes = 90;
    seconds = 0;
    document.getElementById("time").innerHTML = "90:00";
}

//button to start the stopwatch at minutes 105:00
function IVhalf(){
    window.clearInterval(interval);
    minutes = 105;
    seconds = 0;
    document.getElementById("time").innerHTML = "105:00";
}

//function that gives one minute more on the watch
function plusOne(){
    minutes = minutes + 1;
    if(seconds < 10){
        defineSeconds = "0" + seconds.toString();
    } else {
        defineSeconds = seconds;
    }

    if(minutes < 10){
        defineMinutes = "0" + minutes.toString();
    } else {
        defineMinutes = minutes;
    }
    document.getElementById("time").innerHTML = defineMinutes + ":" + defineSeconds;
}

//function that gives one minute less on the watch
function minusOne(){
    minutes = minutes - 1;
    if(seconds < 10){
        defineSeconds = "0" + seconds.toString();
    } else {
        defineSeconds = seconds;
    }

    if(minutes < 10){
        defineMinutes = "0" + minutes.toString();
    } else {
        defineMinutes = minutes;
    }
    document.getElementById("time").innerHTML = defineMinutes + ":" + defineSeconds;
}

//Dark mode
function darkMode(){
    var model = document.body;
    model.classList.toggle("dark");
}