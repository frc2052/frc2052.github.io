//was used as a countdown to kickoff in 2020. Currently not used on the site
var countDownDate = new Date("Feb 15, 2020 7:00:00").getTime(); //sets the goal's date/time
var x = setInterval(function() {
  var now = new Date().getTime(); //gets today's date/time
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $('#countdown').text(days + "d " + hours + "h " + minutes + "m " + seconds + "s "); //prints the time left
  if (distance < 0) { //once the goal is reached, removes the time left text
    clearInterval(x);
    $('#countdown').text("Week Zero has arrived!");
  }
}, 1000);
