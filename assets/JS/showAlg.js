$(document).ready(function(){
    $(".openbtn").click(function(){
        let id = $(this).parent().attr('id');
        document.getElementById(id).style.width = "50%";
        document.getElementById("alg"+id).style.display = "inline";
        document.getElementById("ob"+id).style.display = "none";
        document.getElementById("cb"+id).style.display = "inline";
    });

    $(".closebtn").click(function(){
        let id = $(this).parent().attr('id');
        document.getElementById(id).style.width = "100%";
        document.getElementById("alg"+id).style.display = "none";
        document.getElementById("ob"+id).style.display = "inline";
        document.getElementById("cb"+id).style.display = "none";
    });
});