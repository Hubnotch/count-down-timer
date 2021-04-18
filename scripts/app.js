//
// A count down timer from today 18th April 2021 to 31st December 2021
// 
//The date we are counting down to
let countDownDate = new Date("Dec 31, 2021 12:00:00").getTime();

let countDown = () => {
//Get today's date and time
    let todayDate = new Date().getTime();
//Find the difference between today and count down date
    let elapsedTime = countDownDate - todayDate;

//Time calculations for days, hours, minutes and seconds
    let days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = days +"d  "+ hours +"h  "+ minutes +"m  "+ seconds +"s  ";

    // display a message if the count down is over
    if (elapsedTime < 0) {
        clearInterval(countDown);
        document.getElementById("timer").innerHTML = "PROJECT LAUNCHED ALREADY";
    }

}
countDown();

setInterval(countDown, 1000)