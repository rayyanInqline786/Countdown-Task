// Time remaining before class
var remTimeC1 = new Date().getTime()+12000
var remTimeC2 = new Date().getTime()+18000
$(document).ready(function(){
    $('#countdown').countdown(`${remTimeC1}`,{elapse:true})
.on('update.countdown', function(event) {
  // Passed Time
  if (event.elapsed) {
    $(this).html(event.strftime('Class Duration Elapsed (Passed): <span>%H:%M:%S</span>'));
     setTimeout(function(){
      $('#countdown').countdown('stop');
        $("#countdown").hide()
        $(".finish-text").show()
        $(".joinLink").bind('click', false);
        $(".class1 a").addClass("mute")
    },3000)
        $(".on-going").show()
        $(".endTime").show()
        $("#waiting").hide()
        $(".joinLink").show()
    } 
    // Time remaining before class
    else {
    // $(this).html(event.strftime('Class will start in: <span>%H:%M:%S</span>'),function(){});
    $(this).html(event.strftime('Class will start in: <span>%H:%M:%S</span>'));
  }
})
$('#countdown1').countdown(`${remTimeC2}`,{elapse:true})
.on('update.countdown', function(event) {
  if (event.elapsed) {
    $(this).html(event.strftime('Class Duration Elapsed (Passed): <span>%H:%M:%S</span>'));
     setTimeout(function(){
      $('#countdown1').countdown('stop');
        $("#countdown1").hide()
        $(".finish-text1").show()
        $(".joinLink1").bind('click', false);
        $("a").addClass("mute1")
    },9000)
        $(".on-going").show()
        $(".endTime").show()
        $("#waiting1").hide()
        $(".joinLink1").show()
    } else {
    $(this).html(event.strftime('Class will start in: <span>%H:%M:%S</span>'))
    }
})
})
