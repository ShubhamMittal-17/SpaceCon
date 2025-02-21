let reserveBtn=document.getElementById("reserve-btn");
let mainDiv=document.getElementById("main");

function reserveClick(){
        var submitted="<header>Thankyou!</header>";
        submitted+="<h2>Your reservation has been confirmed by us!</h2>";
        submitted+="<button id=\"reserve-btn2\" type=\"button\" onclick=\"window.location.reload()\">";
        submitted+="<strong>Book Again?</strong>";
        submitted+="<div id=\"container-stars\">";
        submitted+="<div id=\"stars\"></div>";
        submitted+="</div>"
        submitted+="<div id=\"glow\">";
        submitted+="<div class=\"circle\"></div>" ;
        submitted+="<div class=\"circle\"></div>";
        submitted+="</div>";
        submitted+="</button>";
        mainDiv.innerHTML=submitted;
}

function loader(){
    var load="<img id=\"shootstar\" src=\"shootingStars.gif\">";
    load+="<h2>Finding the best seat for you!</h2>"
    mainDiv.innerHTML=load;
}

reserveBtn.onclick=function(){
    loader();
    setTimeout(reserveClick,4000);
}

    


