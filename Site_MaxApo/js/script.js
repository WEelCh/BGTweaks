

function clickProgressTime () {

    // Progress Time
    GAME["time"] += 1
    if (GAME["time"]>4){GAME["time"]=1}

    if (GAME["time"]==1){
        setIDhtml("dial",'<i class="icon nearfull timedial" data-lucide="arrow-big-left"></i>')
        direction = [
            '<i class="icon h2 timedial" data-lucide="arrow-big-left-dash"></i>',
            '<i class="icon h2 timedial" data-lucide="arrow-big-right-dash"></i>',
            '<i class="icon h2 timedial" data-lucide="arrow-big-up-dash"></i>',
            '<i class="icon h2 timedial" data-lucide="arrow-big-down-dash"></i>',
            '<i class="icon h2 timedial" data-lucide="shrink"></i>',
        ]
        setIDhtml("timedial_effect",direction[Math.floor(Math.random() * 5)])

        GAME["day"] += 1
        setIDtxt("id-timer","Tag "+GAME["day"])
    } else if (GAME["time"]==2){
        setIDhtml("dial",'<i class="icon nearfull timedial" data-lucide="arrow-big-up"></i>')
        setIDtxt("timedial_effect","Exposure")
    } else if (GAME["time"]==3){
        setIDhtml("dial",'<i class="icon nearfull timedial" data-lucide="arrow-big-right"></i>')
        setIDtxt("timedial_effect","Nachtkarte")
        setIDtxt("id-night",NIGHT_DECK[GAME["day"]-1][0])
        setIDtxt("id-night-effect",NIGHT_DECK[GAME["day"]-1][1])
    } else if (GAME["time"]==4){
        setIDhtml("dial",'<i class="icon nearfull timedial" data-lucide="arrow-big-down"></i>')
        setIDtxt("timedial_effect","+1 Hostility for every Tribe")

        setIDtxt("id-night","-")
        setIDtxt("id-night-effect","-")
    }

    lucide.createIcons();
}


function clickSpawn () {

    if (GAME["spawn_active"]){
        setIDtxt("spawner","-")
        setIDtxt("spawner-tooltip","-")
        GAME["spawn_active"] = false
        return
    }
    
    setIDtxt("spawner",SPAWN_DECK[GAME["spawn"]][0])
    setIDtxt("spawner-tooltip",SPAWN_DECK[GAME["spawn"]][1])
    
    // REMOVE ?
    if (SPAWN_DECK[GAME["spawn"]][3]){
        SPAWN_DECK.splice(GAME["spawn"],1)
    }
    // SHUFFLE ?
    if (SPAWN_DECK[GAME["spawn"]][2]){
        shuffleSpawn()
        GAME["spawn"] = -1
    }

    GAME["spawn"] += 1
    GAME["spawn_active"] = true

}


function shuffleSpawn() {
    shuffleArray(SPAWN_DECK)
    console.info("Shuffled Spawndeck")
}
function shuffleNight() {
    shuffleArray(NIGHT_DECK)
    console.info("Shuffled Nightdeck")
}
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initTimer(ctx,duration) {
    var timer = duration, minutes, seconds;
    var alerted = 0;
    var intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerelem = document.getElementById("id-timer");

        timerelem.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            timerelem.style.backgroundColor="red";
            if      (alerted==0){alerted=1}
            else if (alerted==1){
                //window.alert("Time up");
                alerted=2;
            }
        } else if (timer < 25) {
            timerelem.style.backgroundColor="orange";
        } else {
            timerelem.style.backgroundColor="";
        }
    }, 1000);
    ctx.addEventListener('click',function(){
        timerelem = document.getElementById("id-timer");
        timerelem.style.backgroundColor="";
        timerelem.innerHTML = '<i class="icon h2" data-lucide="timer-off"></i>';
        clearInterval(intervalId);
        lucide.createIcons();
    });
}


