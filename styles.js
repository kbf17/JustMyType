var keyStroke;
$(document).ready(function(){

    $("body").on('keydown', function(key){
        if (key.which == 16){
            $("#keyboard-lower-container").hide();
            $('#keyboard-upper-container').show();
        }
    });

    $("body").keyup(function(key){
        if (key.which == 16){
            $("#keyboard-lower-container").show();
            $('#keyboard-upper-container').hide();
        }
    });

    $("body").keypress(function(which){
        keyStroke = String.fromCharCode(event.which);
        console.log(keyStroke);
        $('#target-letter').text(keyStroke);
    })

});