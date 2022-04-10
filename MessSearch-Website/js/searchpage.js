
$(document).ready(function() {
    $('#search').click(function() {

        var checker = 0;
        for(var i = 0; i<15;i++){
            var card = $("div").filter(".mb-lg-0")[i];
            var location = $("p").filter(".location")[i].innerText.toUpperCase();

            if (location.indexOf($("#inp").val().toUpperCase()) > -1) {
                card.style.display = 'block';
                checker++;
            }
            else {
                card.style.display = 'none';
            }
        }

        if(checker > 0){
            $("#not_find_anything").text("");
        }
        else{
            $("#not_find_anything").text("No result found").fadeIn();
        }

    });
    
});

