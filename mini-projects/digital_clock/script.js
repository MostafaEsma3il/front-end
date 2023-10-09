function updateTime () {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    if (timeString.length == 10)
        timeString = "0" + timeString;
    document.getElementById('time').innerText = timeString;
}

setInterval(updateTime, 1000);
