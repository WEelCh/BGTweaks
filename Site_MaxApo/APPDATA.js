
function genPercentageList () {
    var list = [];
    var len = 0;
    for (var i = 0; i < arguments.length; i++) {
        len += arguments[i][0];
        for (var j = 0; j < arguments[i][0]; j++) {
            list.push(arguments[i][1]);
        }
    }
    if (len != 100) {
        console.warn("Percentage List is",len,"NOT 100!",arguments)
    } 
    return list;
}

let empty="-"
// TEXT, TOOLTIP, SHUFFLE, REMOVE
SPAWN_DECK = genPercentageList(
    [1,["2",empty,false,false]],
    [2,["3",empty,false,false]],
    [3,["4",empty,false,false]],
    [4,["5",empty,false,false]],
    [5,["6",empty,false,false]],
    [6,["7",empty,false,false]],
    [5,["8",empty,false,false]],
    [4,["9",empty,false,false]],
    [3,["10",empty,false,false]],
    [2,["11",empty,false,false]],
    [1,["12",empty,false,false]],

    [2,["Sicherheit","Shuffle",true,false]],
    [1,["Handel","-1 Hostility bei einem Clan",false,false]],
    [1,["Panzerung","Du bist diese Runde immun gegen Schaden",false,true]],
    [1,["Fischen","-3 Hunger für alle",false,true]],
    [1,["Erste Hilfe","5 Leben für alle",false,true]],

    [1,["Boshaft","+1 Hostility für alle Clans",false,false]],
    [1,["Wetter","Exposure",false,false]],
    [2,["Umzingelt","Monster auf jedes benachbarte Feld",false,false]],
    [1,["Riskant","2 weitere Spawns",false,false]],
    [1,["Riskant","3 weitere Spawns",false,false]],
    [2,["Hinterhalt","Jeder zieht ein Monster. Shuffle",true,false]],
)

// HEAD, BODY, PASSIVE
NIGHT_DECK = [
    ["Koordinierter Angriff","+1 Clanhostility, Monster aktivieren",false],
    ["Sicherer Hafen","Jede*r Spieler*in heilt 3 Leben",false],
    ["Harte Nacht","Exposure wenn nicht drinnen",false],
    ["Übergebt eure Waffen","Aktive Ausrüstung oder 3 Leben verlieren",false],
    ["Nacht-Sammeln","Jede*r Spieler*in zieht zwei Überlebenskarten",false],
    ["Vollmond","Jedes Monster heilt 3 Leben",false],
    ["Waffenlager","Spieler*innen machen +1 Schaden gegen Monster",true],
    ["Hinterhalt","Jede*r Spieler*in bekommt einen MonsterTOKEN",false],
    ["Sturm","Jede*r Spieler*in muss aktive Ausrüstung verlieren oder Exposure , wenn nicht drinnen",false],
    ["Neumond","Spieler*innen können Monster nur in Kurzer Reichweite angreifen",true],
    ["Karte","Endecke Kreuz ohne Trigger",false],
    ["Nebel","Jede*r Spieler*in Karte ziehen -> Aktion oder 4 Schaden",true],
    ["Verlassenes Lager","Jede*r Spieler*in -2 Hunger oder heile einen Statuseffekt",false],
    ["Gewitter","Entferne bis zu 3 Monstertoken",false],
    ["Wütende Horde","Alle Monster machen +3 Schaden",true],
    ["Gejagt","Monstertoken bewegen sich zu Spieler*innen",false],
    ["Extremes Wetter","Jede*r Spieler*in Bewegung -> Aktion oder Hunger",true],
    ["Schatten","Jede*r Spieler*in darf ein Nicht-Boss-Monster in einen Monstertoken wandeln",false],
    ["Ruhelose Nacht","Ein*e Spieler*in wirft Handkarten ab, zieht drei Karten",false],
    ["Verirrt","Un-Endecke 3 Felder",false],
]

console.info("Appdata generated")