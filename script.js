function startTimer() {
    var select = document.getElementById("teaType");
    var selectedValue = select.options[select.selectedIndex].value;
    var countdown = document.getElementById("countdown");

    var duration = 0;
    switch(selectedValue) {
        case "green":
            duration = 180; // 3 minutes
            break;
        case "black":
            duration = 300; // 5 minutes
            break;
        case "herbal":
            duration = 420; // 7 minutes
            break;
        default:
            duration = 0;
    }

    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdown.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            countdown.textContent = "Time's up!";
        }
    }, 1000);
}
