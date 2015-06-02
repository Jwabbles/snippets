(function () {
  function checkTime(i) {
    return (i < 10) ? "0" + i : i;
  }

  function startTime() {
    var today = new Date(),
    h = checkTime(today.getHours()),
    m = checkTime(today.getMinutes()),
    s = checkTime(today.getSeconds());
    time = h + ":" + m + ":" + s;
    console.log(time);
    // document.getElementById('time').innerHTML = time;
    t = setTimeout(function () {
      startTime()
    }, 500);
  }
  startTime();
})();