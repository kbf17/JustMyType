var keyStroke;
var sentences =
    ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var i = -1;
var l = 0;
var c = -1;
var sentLength = sentences[l].length;
var numOfChar = 0;
var ok = $('<span />').attr({'class':'glyphicon glyphicon-ok', 'aria-hidden':'true' });
var nope = $('<span />').attr({'class':'glyphicon glyphicon-remove', 'aria-hidden':'true' });
var numberOfMistakes = 0;
var numberOfWords = 54;
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
            $(this).removeClass('highlight');
        })
    });

    //display sentences
    $('#sentence').html(splitArray());

    //the main game
    $('body').on('keypress', function(){
        i++;
        c++;
        moveHighlight();
        travelSentence();
    });
});

//game function
function travelSentence () {
    numOfChar++;
    var sentChar = sentences[l].charAt(i);
    $('#target-letter').text(sentChar);
    if (sentChar == keyStroke){
        $('#feedback').html(ok);
    } else if (numOfChar == 50){
        endGame();
    } else if (numOfChar >= sentences[l].length){
        l++;
        $('#feedback').html('');
        $('#sentence').html(splitArray());
        numOfChar = 0;
        i = -1;
        c = -1;
        return;
    } else {
        $('#feedback').html(nope);
        numberOfMistakes++;
    }
};

function endGame(){
    var elapsed = new Date() - start;
    var minuteLapse = elapsed / 60000;
    var minutesTyped = Math.round(minuteLapse);
    var speed = (numberOfWords / minutesTyped - 2 * numberOfMistakes);
    var yes = confirm('Your speed is: ' + speed + ' WPM.' + '\nYou made ' + numberOfMistakes + ' errors.' + '\nWould you like to try again?');
    if (yes == true){
        location.reload();
    } else {
        alert('Kay.');
        $('body').css('background-image', 'url(https://media.giphy.com/media/87y7z2LdEhxCM/giphy.gif)');
    }
    if (numberOfMistakes == 0) {
        $('iframe').removeClass('egg');
    }
};

// turns array letters into spans
function splitArray(){
    $("#sentence").html("");
    var splitSentence = sentences[l].split("");
    var b = 0, length = sentences[l].length;
    for (b; b < length; b++) {
        var newSpan = $('<span />').html(splitSentence[b]);
        $('#sentence').append(newSpan);
    }
};

// get the next sibling that matches the selector
// only processes the first item in the passed in jQuery object
// designed to return a jQuery object containing 0 or 1 DOM elements
jQuery.fn.findNext = function(selector) {
    return this.eq(0).nextAll(selector).eq(c);
};

function moveHighlight (span){
    $("span").prev().removeClass('highlight-current');
    $("span").findNext("span").addClass('highlight-current');  
};
