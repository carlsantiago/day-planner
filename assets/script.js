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

  // save to local storage
  button.on('click', function (event) {
    event.preventDefault();
    var text = $(this).siblings('.col-sm-10').val();
    var parent = $(this).parent().attr('id');
    localStorage.setItem(parent, JSON.stringify(text));

  })

  $('#9 textarea').val(localStorage.getItem('9'));
  $('#10 textarea').val(localStorage.getItem('10'));
  $('#11 textarea').val(localStorage.getItem('11'));
  $('#12 textarea').val(localStorage.getItem('12'));
  $('#13 textarea').val(localStorage.getItem('13'));
  $('#14 textarea').val(localStorage.getItem('14'));
  $('#15 textarea').val(localStorage.getItem('15'));
  $('#16 textarea').val(localStorage.getItem('16'));
  $('#17 textarea').val(localStorage.getItem('17'));

  // listen for save button clicks
  button.on('click', function (event) {
    $('selector').css('cursor', 'i')
  })
  


