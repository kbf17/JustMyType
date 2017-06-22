$("body").keydown(function(key){
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