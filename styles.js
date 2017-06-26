var keyStroke;
var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var i = -1;
var l = 0;
var sentLength = sentences[l].length;
// var sentChar = sentences[l].charAt(i);
var numOfChar = 0;
var ok = $('<span />').attr({'class':'glyphicon glyphicon-ok', 'aria-hidden':'true' });
var nope = $('<span />').attr({'class':'glyphicon glyphicon-remove', 'aria-hidden':'true' });
var numberOfMistakes = 0;
var numberOfWords = 60;
var start = new Date();

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
        // console.log(keyStroke);
        // var letter = event.charCode;
        // console.log(letter); 
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
    $('#sentence').html((sentences[0].split('')));

    //move highlight box
    $('body').on('keypress', function(key){
        if (key.which != 16){
            $('#yellow-block').css('margin-left', "+=20");
        }
    });

    //the main game
    $('body').on('keypress', function(){
        i++;
        travelSentence();
    });
});

//game function
function travelSentence () {
    numOfChar++;
    var sentChar = sentences[l].charAt(i);
    console.log(sentences[l].charAt(i));
    console.log(sentChar);
    console.log(numOfChar);
    console.log(sentences[l].length);
    $('#target-letter').text(sentChar);
    if (sentChar == keyStroke){
        $('#feedback').html(ok);
    } else if (numOfChar == 50){
        endGame();
        console.log(numberOfMistakes);
    }
    else if (numOfChar >= sentences[l].length){
        l++;
        $('#yellow-block').css('margin-left', "-15px");
        $('#sentence').html((sentences[l]).split(''));
        $('#feedback').html('');
        numOfChar = 0;
        i = -1;
        console.log('end');
        return;
    } else {
        $('#feedback').html(nope);
        numberOfMistakes++;
        console.log(numberOfMistakes);
    }
};

function endGame(){
    var elapsed = new Date() - start;
    var minuteLapse = elapsed / 60000;
    var minutesTyped = Math.round(minuteLapse);
    console.log(minutesTyped);
    var speed = (numberOfWords / minutesTyped - 2 * numberOfMistakes);
    var yes = confirm('Your speed is: ' + speed + ' WPM.' + '\nYou made ' + numberOfMistakes + ' errors.' + '\nWould you like to try again?');
    if (yes == true){
        location.reload();
    } else {
        alert('Kay.');
    }
};


//tyler examples
        // $(document).on('keydown', function(key){
    //     highlight(key.wich)
    // })
   //function highlight(code, defaultColor) {
    //   if (defaultColor) {
       // $('#' + code).css('background-color', 'pink')
    //}