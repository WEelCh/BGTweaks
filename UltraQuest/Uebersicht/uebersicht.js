


function main ( ) { 
    loadItems(nkwaffen);
    loadItems(fkwaffen);
    loadItems(wand);
    loadItems(rüstungen);
    loadItems(tiere);
    loadItems(fahrzeuge);
    loadItems(magic);
    loadItems(misc);
    loadTalisman();

    loadKampf();
    loadStatus();

    loadTragkraft();
    loadFähigkeiten();
    loadAudienz();
}


const keine = `<i style='vertical-align:text-top;' class='nf nf-oct-x'></i>`
const nur   = `<i style='vertical-align:text-top;' class='nf nf-oct-check'></i>`
const beritten = `<i style='vertical-align:text-top;' class='nf nf-md-horse_variant_fast'></i>`
const kaufen = `<i style='vertical-align:text-top;' class='nf nf-md-sack'></i>`
const crew = `<i style='vertical-align:text-top;' class='nf nf-fa-user'></i>`
const verletzung = `<i style='vertical-align:text-top;' class='nf nf-md-water_outline'></i>`
const schwer = `<b>!</b>`

const nkwaffen = { nkwaffen : [
    //[ `Faustkampf (zwhd)` , `0` , `-1 NK` , `-` ],
    [ `Dolch (einhd)` , `10` , `+0 NK` , `-` ],
    [ `Eisenwaffe (einhd)` , `30` , `+1 NK` , `-` ],
    [ `Eisenwaffe (zwhd)` , `60` , `+2 NK` , `-` ],
    [ `Lanze (zwhd / ${beritten} einhd)` , `80` , `+2 NK (${beritten} +3 NK)` , `${nur} Kämpfer` ],
    ] }
const fkwaffen = { fkwaffen : [
    //[ `Wurfsteine (einhd)` , `0` , `-1 FK` , `-` ],
    [ `Schleuder (einhd)` , `10` , `+0 FK` , `-` ],
    [ `Bogen (zwhd)` , `30` , `+1 FK` , `${nur} Men., Elf, Aaruk, Cent.` ],
    [ `Armbrust (zwhd)` , `40` , `+1 FK` , `${keine} Halbl.` ],
    [ `Feldarmbrust (zwhd) (${schwer})` , `80` , `+2 FK` , `ST 4, ${keine} Halbl.` ],
    [ `Baliste (zwhd) (${schwer}${schwer})` , `200` , `+4 FK` , `${kaufen} Ritter in Traumburg, Gadûr` ],
    ] }
const wand = { wand : [
    [ `Zauberstab (zwhd)` , `44` , `+1 NK & Kraftspeicher` , `-` ],
    [ `Meisterstab (zwhd)` , `177` , `+2 NK & Kraftspeicher` , `GE 3` ],
    ] }
const rüstungen = { rüstungen : [
    [ `(WR) Waffenrock` , `10` , `1 RW` , `-` ],
    [ `(LR) Lederrüstung` , `30` , `2 RW` , `${keine} Zaub.` ],
    [ `(KR) Kettenrüstung` , `80` , `3 RW` , `${keine} Diebe, Seef., Zaub.` ],
    [ `(PR) Plattenrüstung (${schwer})` , `200` , `4 RW` , `${keine} Waldl., Diebe, Seef., Zaub.` ],
    [ `(SH) Schild (einhd)` , `20` , `+1 RW` , `-` ],
    ] }
const tiere = { tiere : [
    [ `Esel` , `30` , `3 BW, +0 NK` , `-` ],
    [ `Pony` , `40` , `4 BW, +0 NK, ${beritten}` , `-` ],
    [ `Reitpferd` , `80` , `5 BW, +0 NK, ${beritten}` , `${keine} Zwerge, Halbl.` ],
    [ `Schlachtross` , `180` , `5 BW, +2 NK, ${beritten}` , `${keine} Zwerge, Halbl.` ],
    [ `Reiteber` , `150` , `4 BW, +2 NK, ${beritten}` , `${nur} Zwerge, Halbl.Kämpf., ${kaufen} Gadûr` ],
    [ `Wagen + Gaul` , `120` , `2 BW, trägt 2x(!!) / 6x(!)` , `-` ],
    ] }
const fahrzeuge = { fahrzeuge : [
    [ `Floß (${schwer}${schwer})` , `30` , `4 ${crew}, -1 KS` , `${kaufen} Traumburg, Dorf` ],
    [ `Boot (${schwer}${schwer})` , `70` , `7 ${crew}` , `${kaufen} Traumburg, Dorf` ],
    [ `Schiff (${schwer}${schwer}${schwer})` , `210` , `+1 NK, Miete: 20(+10)<i>G</i>` , `${kaufen} Traumburg (10<i>G</i> Stellplatz)` ],
    ] }
const magic = { magic : [
    [ `(HT) Heiltrank (m)` , `80` , `heilt ${verletzung}` , `-` ],
    [ `(GT) Gegengiftrank (m)` , `50` , `heilt Gift` , `-` ],
    [ `Rum` , `45` , `Seef.: HT, Aaruk: GT` , `${kaufen} Gomoa` ],
    [ `Fluch bannen` , `66` , `breche einen Fluch` , `${kaufen} 44<i>G</i> in Gylravar` ],
    ] }
const misc = { misc : [
    [ `Dietrich` , `10` , `für Schlösser öffnen` , `-` ],
    [ `Kohlesack (${schwer})` , `3` , `Brennstoff für absurde Maschinen` , `${kaufen} 2<i>G</i> in Gadûr` ],
    ] }



function row ( item ) {
    return /*html*/`
            <div class="row nomargin nomargin">
                <p class="column three">${item[0]}</p>
                <p class="column one ctxt">${item[1]}</p>
                <p class="column four ltxt">${item[2]}</p>
                <p class="column four ltxt">${item[3]}</p>
            </div>`; }
function loadItems ( obj ) {
    const type = Object.keys(obj)[0];
    let container = document.getElementById(type);
    for (const item of obj[type]) {
        container.innerHTML += row(item); } }



const talisman = [
    [ "&nbsp;1" , "Gold" , "oberir. (-Sh)" ],
    [ "&nbsp;2" , "Türkis" , "Eb, Öd, Wü" ],
    [ "&nbsp;3" , "Eisen" , "Hü, Be, Vu" ],
    [ "&nbsp;4" , "Holz" , "Wa, Ur, Ds" ],
    [ "&nbsp;5" , "Knochen" , "Ma, Mo, Su" ],
    [ "&nbsp;6" , "Wasser" , "Ma, U+OF, Me, Mg" ],
    [ "(6" , "Muschel)" , "Strand" ],
    [ "&nbsp;7" , "Kristall" , "Mg, Kü, In" ],
    [ "&nbsp;8" , "Rubin" , "Wü, Vu, Ds, Su" ],
    [ "&nbsp;9" , "Lava" , "Vu, Sh, In" ],
    [ "10" , "Wachs" , "Verliese, Sh, Hö" ],
    [ "11" , "Diamant" , "überall" ],
]
function loadTalisman ( ) {
    let container = document.getElementById("talisman");
    for (const item of talisman) {
        container.innerHTML += /*html*/`
            <div class="row nomargin" style="padding: 3px 10px; width: calc(100% - 20px);">
                <p class="column one"><b>${item[0]}</b></p>
                <p class="column four"><b>${item[1]}</b></p>
                <p class="column seven ltxt">${item[2]}</p>
            </div>
        `;
    }
}


const heimisch = [
    [ "Ma" , "Mo" , "Su" , "Sh" ],
    [ "Ma" , "Kl" , "In" , "Sh" ],
    [ "Eb" , "Öd" , "Wü" , "Sh" ],
    [ "Wa" , "Ur" , "Ds" , "Sh" ],
    [ "Hü" , "Be" , "Vu" , "Sh" ],
    [ "UF" , "OF" , "Sh" , "" ],
    [ "UF" , "Me" , "In" , "" ],
]
function loadHeimisch ( ) {
    let container = document.getElementById("heimisch");
    for (const item of heimisch) {
        if (item[3] == "") {
            container.innerHTML += /*html*/`
                ${item[0]} <i class="nf nf-cod-arrow_right" style="vertical-align:text-top;"></i>
                ${item[1]} <i class="nf nf-cod-arrow_right" style="vertical-align:text-top;"></i>
                ${item[2]}  <br>
            `;
        } else {
            container.innerHTML += /*html*/`
                ${item[0]} <i class="nf nf-cod-arrow_right" style="vertical-align:text-top;"></i>
                ${item[1]} <i class="nf nf-cod-arrow_right" style="vertical-align:text-top;"></i>
                ${item[2]} <i class="nf nf-cod-arrow_right" style="vertical-align:text-top;"></i>
                ${item[3]} <br>
            `;
        }
        
    }
}



const SPACER = `
<hr class="row nomargin smaller" style="margin-bottom: 1px; margin-top: 12px">
<hr class="row nomargin smaller" style="margin-bottom: 1px">
`;


function loadKampf ( ) {
    document.getElementById("kampf").innerHTML = /*html*/`
    <h6 class="row nomargin"><i class='nf nf-md-sword_cross'></i> Kampf <i class='nf nf-md-sword_cross'></i></h6>
    <hr class="row nomargin smaller">
    <p class="row nomargin smaller ctxt">
        max 3 Runden<br>(Untote erzwingen Flucht)
    </p>
    <hr class="row nomargin smaller">
    <div class="row nomargin smaller">
        <p class="column six"><b>Nichtkämpfer</b></p>
        <p class="column six">nur von hinten</p>
    </div>
    <div class="row nomargin smaller">
        <p class="column three"><b>Flucht</b></p>
        <p class="column nine">W3-1 ${verletzung}<br>Untote zwingen: W3 ${verletzung}</p>
    </div>
    ${SPACER}
    `;
}

function loadStatus ( ) {
    document.getElementById("status").innerHTML = /*html*/`
    <h6 class="row nomargin"><i class='nf nf-fa-heartbeat'></i> Zustände <i class='nf nf-fa-heartbeat'></i></h6>
    <hr class="row nomargin smaller">
    <p class="row smaller nomargin ltxt">
        <b>Verletzt:</b> <br>
        &nbsp; nur gezwungene Aktionen <br>
        &nbsp; -1 auf Würfe & KS 0 <br>
    </p>
    <p class="row smaller nomargin ltxt">
        <b>Luft anhalten:</b> <br>
        &nbsp; -1 IT & -1 KS
    </p>
    <p class="row smaller nomargin ltxt">
        <b>Nasse Socken:</b> <br>
        &nbsp; -1 BW; kein Sturmangriff, <br>
        &nbsp; Aufmerksamkeit, Meucheln
    </p>
    `;
}



function loadTragkraft ( ) {
    document.getElementById("tragkraft").innerHTML = /*html*/`
    <h6 class="row nomargin"><i class='nf nf-md-weight'></i> Tragkraft <i class='nf nf-md-weight'></i></h6>
    <hr class="row nomargin smaller">
    <div class="row nomargin smaller">
        <p class="column three">
            <b>ST 0</b> <br>
            1x(<b>!</b>)
        </p>
        <p class="column three ">
            <b>ST 5</b> <br>
            2x(<b>!</b>)
        </p>
        <p class="column six">
            <b>ST 6</b> <br>
            3x(<b>!</b>) / 1x(<b>!!</b>)
        </p>
    </div>
    ${SPACER}
    `;
}

function loadFähigkeiten ( ) {
    document.getElementById("fähigkeiten").innerHTML = /*html*/`
    <h6 class="row nomargin"><i class='nf nf-fa-book'></i> Neue Fähigkeiten <i class='nf nf-fa-book'></i></h6>
    <hr class="row nomargin smaller">
    <div class="row nomargin" style="padding: 3px 10px; width: calc(100% - 20px);">
        <p class="column six"><b>
            Berufseigene<br>
            Berufsfremd<br>
            Meister<br>
            Großmeister
        </b></p>
        <p class="column six">
            30<i>G</i> & 1Ruhm!<br>
            30<i>G</i> & 2Ruhm!<br>
            30<i>G</i> o. 1Ruhm!<br>
            s. Ereignis
        </p>
    </div>
    ${SPACER}
    `;
}

function loadAudienz ( ) {
    document.getElementById("audienz").innerHTML = /*html*/`
    <h6 class="row nomargin"><i class='nf nf-md-crown'></i> Audienz <i class='nf nf-md-crown'></i></h6>
    <hr class="row nomargin smaller">
    <p class="row smaller nomargin ltxt">
        <b>Nur unverletzte Gruppe:</b><br>
        &nbsp;<i class='nf nf-md-crown_outline'></i> 200<i>G</i> / 3 MS in 1 Ehre!<br>
        &nbsp;<i class='nf nf-md-crown_outline'></i> MS in 50<i>G</i><br>
        &nbsp;<i class='nf nf-md-crown_outline'></i> 1 Ruhm! in 50<i>G</i> + 1 Ehre!<br>
        &nbsp;<i class='nf nf-md-crown_outline'></i> 100 Ehre! & LS für Sieg!<br>
    </p>
    `;
}