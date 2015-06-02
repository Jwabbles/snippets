(function () {
  function dateSuffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
  }

  function newDate() {
    var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
    "Saturday", "Sunday"
    ];

    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var currentdate = new Date();
    var thisdate =  dayNames[currentdate.getDay()] + ", "
                    + dateSuffix(currentdate.getDate()) + " "
                    + monthNames[currentdate.getMonth()+1]
    console.log(thisdate);
    // document.getElementById('date').innerHTML = thisdate;
  }
  newDate();
})();