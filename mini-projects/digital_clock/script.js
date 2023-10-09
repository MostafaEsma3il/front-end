function updateTime () {
    let now = new Date();
    let timeString = now.toLocaleTimeString();

    document.getElementById('time').innerText = timeString;
}

setInterval(updateTime, 1000);
