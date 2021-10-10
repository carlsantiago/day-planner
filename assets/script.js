var button = $('.saveBtn')

// current time and
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

// check if current time is past, present or future

  function currentTime() {
    var current = moment().hours()
    var time = $('.time');

    time.each(function () {
      var hour = parseInt($(this).attr('id'))

      if (hour === current) {
        $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')

      } else if (current > hour) {
        $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')

      } else {
        $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')

      }
    })
  }

  
  currentTime()
