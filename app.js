var fiveSeconds = new Date().getTime() + 120000;
$(document).ready(function(){
    $('#countdown-timer').countdown(fiveSeconds, function(event) {
        $(this).html(event.strftime('%H:%M:%S'));
      }).on('finish.countdown', function() {
        $(this).hide()
        $("#boomRoom").show();
    });
})

