var keyStroke;
$(document).ready(function(){
    //changes between keyboards
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
    //letter to text input
    $("body").keypress(function(which){
        keyStroke = String.fromCharCode(event.which);
        console.log(keyStroke);
        $('#target-letter').text(keyStroke);
        var letter = event.charCode;
        console.log(letter);
    });
    //highlights current button
    $('body').on('keypress', function(){
        $('span.key').each(function () {
            if ($(this).text() == keyStroke) {
                $(this).addClass('highlight');
            }   
        })
    });
    $('body').on('keyup', function(){
        $('span.key').each(function () {
            if ($(this).text() == keyStroke) {
                $(this).removeClass('highlight');
            }   
        })
    });

});


var highlight = $('span.key').each(function() {
   if ($(this).text() == keyStroke) {
        $(this).css('background-color', 'yellow');
    }});