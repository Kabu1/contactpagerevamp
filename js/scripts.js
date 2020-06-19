

$(document).ready(function(){
    $("#blanks").submit(function(event){
        var blanks = ["fname", "sname", "email", "phone", "message"];
        
        blanks.forEach(function(blank){
            var userInput = $("input#" + blank).val();
            $("." + blank).text(userInput);
        });
        $("#response").show();
        event.preventDefault();
    });
});




