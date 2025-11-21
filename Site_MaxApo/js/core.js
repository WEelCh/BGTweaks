
window.onbeforeunload = function () {
    //return 'Are you sure you want to leave?';
}

window.onresize = unifyIslandBoxHeight;
function unifyIslandBoxHeight () {
    document.getElementById("box-spawn").style.height 
    = document.getElementById("box-time").offsetHeight+"px";
}



function onLoad () {

    GAME = {
        "day" : 1,
        "time" : 1,
        "spawn" : 0,
        "spawn_active" : false,
    }

    shuffleSpawn()
    shuffleNight()

    lucide.createIcons();
    unifyIslandBoxHeight ();
}




function openTab (ctx) {

    var wasActive = ctx.classList.contains("active");

    var allTabs = document.getElementsByClassName("tab");
    for ( let tab = 0; tab < allTabs.length; tab++ ) {
        allTabs[tab].classList.remove("active");
    }
    
    hideClass("dm-menu");
    showID("dm-menu-tab-bar");

    if (!wasActive) {
        showClass(ctx.id);
        ctx.classList.add("active");
    }
}










