var time = new Date().getTime() + 120000;
$(document).ready(function(){
    $('#countdown-timer').countdown(time, function(event) {
        $(this).html(event.strftime('%H:%M:%S'));
      }).on('finish.countdown', function() {
        $(this).hide()
        $("#boomRoom").show();
    });
})

