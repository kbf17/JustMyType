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

    //display sentences
    $('#sentence').html((sentences[0]));

    //move highlight box
    $('body').on('keypress', function(key){
        if (key.which != 16){
            $('#yellow-block').css('margin-left', "+=20");
        }
    });

    //
    $('body').on('keypress', function(){
            travelSentence();
        
    })
});

function travelSentence () {
    i++;
    var sentChar = sentences[0].charAt(i);
    console.log(sentChar);
}

// on(keyup, function(){
//     currentLetter++

// })

var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var i = -1;
var sentLength = sentences.length;


//tyler examples
        // $(document).on('keydown', function(key){
    //     highlight(key.wich)
    // })
   //function highlight(code, defaultColor) {
    //   if (defaultColor) {
       // $('#' + code).css('background-color', 'pink')
    //}