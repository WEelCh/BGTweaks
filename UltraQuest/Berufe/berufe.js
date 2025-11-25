
const beritten = `<i class='nf nf-md-horse_variant_fast'></i>`
const verletzung = `<i style='vertical-align:text-top;' class='nf nf-md-water_outline'></i>`
const meisterlich = "M"//`<i class='nf nf-md-medal_outline'></i>`
const point = "<i style='vertical-align:text-top;' class='nf nf-md-subdirectory_arrow_right'></i>";
const keine = `<i class='nf nf-oct-x'></i>`

BERUFE = {
    Kämpfer : {
        id   : "Kämpfer",
        name : "Kämpfer*in",
        icon : "nf-md-shield_half_full",
        descL : `
            ${point} keine Einschränkungen <br>
        `,
        descR : `
            <b>W6</b> <br>
            <b>1-2</b>: Parade <br>
            <b>3&nbsp;&nbsp;</b>: Sturmangriff <br>
            <b>4&nbsp;&nbsp;</b>: Rundumschlag <br>
            <b>5&nbsp;&nbsp;</b>: Panzerstich <br>
            <b>6&nbsp;&nbsp;</b>: Ausdauer <br>
        `,
        fertL : `
            <b>Parade</b> (auto) <br>
                +1 RW (<i>${meisterlich}: +3 RW</i>)<br>
            <br>
            <b>Sturmangriff</b> (auto, NK?) <br>
                erste Runde +1 (${beritten}:+2) NK<br>
                (<i>${meisterlich}: +3 (${beritten}:+4)</i>) NK<br>
            <br>
            <b>Rundumschlag</b> (auto, NK) <br>
                4+ Gegner: +1 NK<br>
                (<i>${meisterlich}: +3 NK</i>)<br>
                [Zaub. mit Stab +1 RW]<br>
            <br>
            <b>Panzerstich</b> (auto, NK) <br>
                -2 RW Gegner bei Schaden<br>
                (<i>${meisterlich}: -4 RW</i>) [n.kum.]<br>
            <br>
            <b>Ausdauer</b> (auto) <br>
                Aktion & Kampf trotz ${verletzung}<br>
                (<i>${meisterlich}: k. Kampf: -${verletzung}</i>)<br>
                [schützt vor Räuber]<br>
            <br>
        `,
        fertR : `
            <b>Berserker</b> (auto, NK) <br>
                +W6 (ganz. Kampf) für +${verletzung}<br>
                (<i>${meisterlich}: ST gegen ${verletzung}</i>)<br>
            <br>
            <b>Beidhändiger Kampf</b> <br>
            (auto, NK, GE 4+) <br>
                W6+ST+2 einhd. Waffen<br>
                (<i>${meisterlich}: W6+ST+ST+Waffen</i>)<br>
            <br>
            <b>Kampf zu Pferd</b> (auto, NK) <br>
                ${beritten}: +1 NK, Lanze einhd<br>
                [Centauren können dies<br>
                &nbsp;lernen für KS wenn BW 4+]<br>
            <br>
            <b>Taktik</b> (IT) <br>
                2x pro Kampf:<br>
                &nbsp;1. Kampf zu NK+FK<br>
                &nbsp;2. Flucht: 1W3-2 ${verletzung}<br>
        `,
        meistLN : "Champion (ST/GE 4+)",
        meistL : `
            +50% Waffenbonus einer gewählten Art NK/FK Waffe <br>
            [zB. "zwhd Silberhammer] <br>
        `,
        meistRN : "Soldat (55 Ehre!)",
        meistR : `
            <b>Aufklärung</b> (BW) <br>
                Spezialaktion: <br>
                &nbsp;&nbsp; W10 für nächste Runde <br>
                [nicht 2 mal hintereinander] <br>
            <br>
        `,
    },
    Dieb : {
        id   : "Dieb",
        name : "Dieb*in",
        icon : "nf-md-domino_mask",
        descL : `
            ${point} ${keine} Metallrüstung <br>
            ${point} ${keine} zwhd NK <br>
        `,
        descR : `
            <b>2xW6</b> <br>
            <b>1-2</b>: Diebstahl <br>
            <b>3-4</b>: Handeln <br>
            <b>5&nbsp;&nbsp;</b>: Fallenkunde <br>
            <b>6&nbsp;&nbsp;</b>: Schlösser öffnen <br>
        `,
        fertL : `
            <b>Diebstahl</b> (GE / IT) <br>
                offensiv: GE <br>
                defensiv: IT <br>
                (<i>${meisterlich}: +2</i>)<br>
            <br>
            <b>Handeln</b> (IT) <br>
                ±10% (Ver)Kauf <br>
                (IT-2: ±20%) <br>
                (<i>${meisterlich}: +1</i>) <br>
            <br>
            <b>Fallenkunde</b> (GE) <br>
                Fallenentschärfen <br>
                nicht 1./2.: -1 <br>
                (<i>${meisterlich}: +2</i>) <br>
            <br>
            <b>Aufmerksamkeit</b> (BW) <br>
                K! zu K? <br>
                (<i>${meisterlich}: +2</i>) <br>
            <br>
            <b>Ducken</b> (GE-2 o. 1) <br>
                ${verletzung} verhindern <br>
                (<i>${meisterlich}: je für mehrere ${verletzung}</i>)<br>
            <br>
        `,
        fertR : `
            <b>Schlösser öffnen</b> (GE) <br>
                [o. Dietrich -1] <br>
                &nbsp;&nbsp;Eisen:&nbsp; +1<br>
                &nbsp;&nbsp;Bronze: +0 &nbsp; Diamant: -3<br>
                &nbsp;&nbsp;Silber: -1 &nbsp; Platin: &nbsp;-4<br>
                &nbsp;&nbsp;Gold:&nbsp;&nbsp; -2 &nbsp; Uran: &nbsp;&nbsp; -5<br>
                (<i>${meisterlich}: +2</i>) <br>
            <br>
            <b>Beidhändiger Kampf</b> <br>(auto, NK, GE 4+) <br>
                W6+ST+2 einhd. Waffen<br>
                (<i>${meisterlich}: W6+ST+ST+Waffen</i>)<br>
            <br>
            <b>Meucheln</b> (BW & GE) <br>
                K?: einen Gegner töten <br>
                &nbsp;&nbsp; NK gegen RW <br>
                &nbsp;&nbsp; -1 Ruhm! (n.kum.) <br>
                beide Misserfolg: ${verletzung} <br>
                (<i>${meisterlich}: +1 beide Würfe</i>) <br>
            <br>
        `,
        meistLN : "Giftmischer (44 Ehre!)",
        meistL : `
            <b>Tränke brauen</b> (GE) <br>
                in Events Tränke brauen<br>
            <br>
        `,
        meistRN : "Schleicher (66 Ehre!)",
        meistR : `
            <b>Schattenläufer</b> (IT) <br>
            ändere Äußeres Aussehen<br> (Person, Rasse, Fraktion)<br> für eine Runde <br>
            [für Events, Magie] <br>
            <br>
        `,
    },
    Seefahrer : {
        id   : "Seefahrer",
        name : "Seefahrer*in",
        icon : "nf-fa-anchor",
        descL : `
            ${point} ${keine} Metallrüstung <br>
            ${point} ${keine} zwhd NK <br>
            ${point} UF o. OF heimisch <br>
            ${point} Kämpferin & Diebin <br>
            ${point} ST o. IT: Floß bauen <br>
            &nbsp; [+1 pro Helfendem]
            <br>
        `,
        descR : `
            <b>2xW6</b> <br>
            <b>1-2</b>: Ausdauer <br>
            <b>3&nbsp;&nbsp;</b>: Navigation <br>
            <b>4&nbsp;&nbsp;</b>: Rundumschlag <br>
            <b>5&nbsp;&nbsp;</b>: Zielen <br>
            <b>6&nbsp;&nbsp;</b>: Handeln <br>
        `,
        fertL : `
            <b>Ausdauer</b> (auto) <br>
                Aktion & Kampf trotz ${verletzung}<br>
                (<i>${meisterlich}: k. Kampf: -${verletzung}</i>)<br>
                [schützt vor Räuber]<br>
            <br>
            <b>Navigation</b> (IT) <br>
                1. oberir. nicht verirren <br>
                2. oberir. heimisch / Meer <br>
                &nbsp;&nbsp; ±1 für 5-95 Events <br>
                &nbsp;&nbsp; [n.kum.] <br>
                (<i>${meisterlich}: k. IT, alle Events</i>) <br>
            <br>
            <b>Rundumschlag</b> (auto, NK) <br>
                4+ Gegner: +1 NK<br>
                (<i>${meisterlich}: +3 NK</i>)<br>
                [Zaub. mit Stab +1 RW]<br>
            <br>
            <b>Zielen</b> (auto, FK?) <br>
                erste Runde: +2 FK <br>
                [Berufsfremd +1 FK]<br>
                (<i>${meisterlich}: +W6 FK <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;/+2 Fk alle Runden</i>)<br>
            <br>
        `,
        fertR : `
            <b>Handeln</b> (IT) <br>
                ±10% (Ver)Kauf <br>
                (IT-2: ±20%) <br>
                (<i>${meisterlich}: +1</i>) <br>
            <br>
            <b>Fallenkunde</b> (GE) <br>
                Fallenentschärfen <br>
                nicht 1./2.: -1 <br>
                (<i>${meisterlich}: +2</i>) <br>
            <br>
            <b>Schlösser öffnen</b> (GE) <br>
                [o. Dietrich -1] <br>
                &nbsp;&nbsp;Eisen:&nbsp; +1<br>
                &nbsp;&nbsp;Bronze: +0 &nbsp; Diamant: -3<br>
                &nbsp;&nbsp;Silber: -1 &nbsp; Platin: &nbsp;-4<br>
                &nbsp;&nbsp;Gold:&nbsp;&nbsp; -2 &nbsp; Uran: &nbsp;&nbsp; -5<br>
                (<i>${meisterlich}: +2</i>) <br>
            <br>
            <b>Beidhändiger Kampf</b> (auto, NK, GE 4+) <br>
                W6+ST+2 einhd. Waffen<br>
                (<i>${meisterlich}: W6+ST+ST+Waffen</i>)<br>
            <br>
        `,
        meistLN : "<b>Seebär</b> (77 Ehre!)",
        meistL : `
            <b>Ducken</b> (GE-2 o. 1) <br>
                ${verletzung} verhindern <br>
            <br>
        `,
        meistRN : "Käpt'n (eigenes Schiff)",
        meistR : `
            +2 KS & alle anderen +1 KS auf dem Schiff
        `,
    },
    Waldläufer : {
        id   : "Waldläufer",
        name : "Waldläufer*in",
        icon : "nf-md-forest",
        descL : `
            ${point} ${keine} Plattenrüstung <br>
            ${point} heimisch kostenlos wenn <br>
            &nbsp; im Ehre-Bereich <br>
        `,
        descR : `
            <b>W6</b> <br>
            <b>1&nbsp;&nbsp;</b>: Orientierung & <br>
            &nbsp; &nbsp; &nbsp Kampf zu Pferd <br>
            <b>2&nbsp;&nbsp;</b>: Aufmerksamkeit <br>
            <b>3&nbsp;&nbsp;</b>: Ausdauer <br>
            <b>4&nbsp;&nbsp;</b>: Zielen <br>
            <b>5-6</b>: Überleben (6: W3+1) <br>
        `,
        fertL : `
            <b>Orientierung</b> (IT) <br>
                [heimisch: automatisch] <br>
                nicht verirren <br> 
                (außer Fluss & Meer) <br>
                Verstärkt (+1): <br>
                &nbsp;&nbsp; Aufmerksamkeit <br>
                &nbsp;&nbsp; Abkürzung <br>
                &nbsp;&nbsp; Aufklärung <br>
            <br>
            <b>Aufmerksamkeit</b> (BW) <br>
                K! zu K? <br>
                (<i>${meisterlich}: +2</i>) <br>
            <br>
            <b>Ausdauer</b> (auto) <br>
                Aktion & Kampf trotz ${verletzung}<br>
                (<i>${meisterlich}: k. Kampf: -${verletzung}</i>)<br>
                [schützt vor Räuber]<br>
            <br>
            <b>Zielen</b> (auto, FK?) <br>
                erste Runde: +2 FK <br>
                [Berufsfremd +1 FK]<br>
                (<i>${meisterlich}: +W6 FK <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;/+2 Fk alle Runden</i>)<br>
            <br>
        `,
        fertR : `
            <b>Kampf zu Pferd</b> (auto, NK) <br>
                ${beritten}: +1 NK, Lanze einhd<br>
                [Centauren können dies<br>
                &nbsp;lernen für KS wenn BW 4+]<br>
            <br>
            <b>Überleben</b> (auto) <br>
                +3 "heimisch" Plätze <br>
                [kann Gebiete überspringen <br>
                &nbsp;aber dann normale Kosten] <br>
            <br>
            <b>Abkürzung</b> <br> 
            (IT, langsamster BW 3) <br>
                [heimisch: automatisch] <br>
                überspringe ein Gebiet <br>
                (<i>${meisterlich}: +2</i>) <br>
            <br>
            <b>Aufklärung</b> (BW) <br>
                Spezialaktion: <br>
                &nbsp;&nbsp; W10 für nächste Runde <br>
                [nicht 2 mal hintereinander]
            <br>
        `,
        meistLN : "<b>Druide</b> (33 Ehre!)",
        meistL : `
            <b>Tränke brauen</b> (GE) <br>
                in Events Tränke brauen<br>
            <br>
        `,
        meistRN : "Beschwörer (72 Ehre!)",
        meistR : `
            <b>Beschwören</b> (IT & GE) <br>
                ini. in heimischen Gebieten: <br>
                Tier (3 Züge) mit NK+0<br>
                -1 beide Würfe pro: <br>
                &nbsp;&nbsp; +2 NK o. Fähigkeit<br>
                [höchstens eines, Magie] <br>
            <br>
        `,
    },
    Kleriker : {
        id   : "Kleriker",
        name : "Kleriker*in",
        icon : "nf-md-cross_celtic",
        descL : `
            ${point} nur stumpfe Waffen <br>
            ${point} Wunder (nicht wählbar) <br>
            &nbsp; nicht Berufsfremd lernbar <br>
            ${point} <b>Tränke brauen</b> (GE) <br>
            &nbsp;&nbsp;in Events Tränke brauen<br>
        `,
        descR : `
            <b>W6</b> (später <b>W10</b>) <br>
            <b>1-2</b>: Heilung <br>
            <b>3&nbsp;&nbsp;</b>: Gift neutralisieren <br>
            <b>4&nbsp;&nbsp;</b>: Heiliger Strahl <br>
            <b>5-6</b>: Heilige Rüstung <br>
            <b>7&nbsp;&nbsp;</b>: Feuerschutz <br>
            <b>8&nbsp;&nbsp;</b>: Kiemen <br>
            <b>9&nbsp;&nbsp;</b>: Fluchbrecher <br>
            <b>10&nbsp;</b>: <i>Frei wählbar</i> <br>
        `,
        fertL : `
            <b>Heilung</b> (GE) <br>
                -${verletzung} <br>
                (<i>${meisterlich}: +2 , 1,2:-2 ${verletzung}</i>) <br>
            <br>
            <b>Gift neutralisieren</b> (GE) <br>
                heilt Gift <br>
                (<i>${meisterlich}: auto o. alle</i>) <br>
            <br>
            <b>Heiliger Strahl</b> (IT) <br>
                töte Untoten, Geist(-1), Dämon(-2) <br>
                (<i>${meisterlich}: -2 & töte x Untote</i>) <br>
            <br>
            <b>Heiliger Rüstung</b> (IT) <br>
                jemand +1 mRW <br>
                (<i>${meisterlich}: +3 mRW o. +1 mRW alle</i>) <br>
            <br>
            <b>Feuerschutz</b> (GE) <br>
                jemand & direkt dahinter <br>
                (<i>${meisterlich}: alle</i>) <br>
            <br>
            <b>Kiemen</b> (IT) <br>
                selbst & ein anderer <br>
                (<i>${meisterlich}: alle</i>) <br>
            <br>
        `,
        fertR : `
            <b>Fluchbrecher</b> (IT) <br>
                negiert einen Zauber / Magie <br>
                bricht  einenFluch <br>
                (<i>${meisterlich}: +2 / -2 alle</i>) <br>
            <br>
            <b>Segen</b> (IT) <br>
            Nächstes mal einmalig: <br>
            1. Person: Fluchschutz <br>
            2. Waffe: <br>
            &nbsp;&nbsp; wie magisch oder <br>
            &nbsp;&nbsp; +1 KS <br>
            3. Rüstung: <br>
            &nbsp;&nbsp; wie magisch oder <br>
            &nbsp;&nbsp; +1 RW <br>
            [nur einen gleichzeitig] <br>
            <br>
            <b>Funke des Lebens</b> (IT, Spez.) <br>
                Verletzt statt Tod <br>
                &nbsp; höchstens 3 Runden Tod <br>
                &nbsp; verliere beste Eigenschaft <br>
            <br>
        `,
        meistLN : "<b>Priester</b> (42 Ehre!)",
        meistL : `
            2. (versch.) Wunder (-2)<br>
            extra Wunderplatz
        `,
        meistRN : "Pontifex (84 Ehre!)",
        meistR : `
            2. (versch.) Wunder (-0)<br>
            extra Wunderplatz <br>
            <br>
        `,
    },
    Zauberer : {
        id   : "Zauberer",
        name : "Zauberer*in",
        icon : "nf-md-fire",
        descL : `
            ${point} ${keine} Metallrüstung, Schilde <br>
            ${point} ${keine} zwhd NK, Bögen <br>
            ${point} max ein Männchen <br>
            ${point} Wunder (nicht wählbar) <br>
            &nbsp; nicht Berufsfremd lernbar <br>
            &nbsp; Anzahl max. wie IT <br>
        `,
        descR : `
            <b>W6</b> (später <b>W10</b>) <br>
            <b>1&nbsp; &nbsp; </b>: Magischer Pfeil <br>
            <b>2&nbsp; &nbsp; </b>: Teleportation <br>
            <b>3/4/5</b>: ST/GE/BW <br>
            <b>6&nbsp; &nbsp; </b>: Fliegen <br>
            <b>7&nbsp; &nbsp; </b>: Feuerball <br>
            <b>8&nbsp; &nbsp; </b>: Kraftspeicher <br>
            <b>9&nbsp; &nbsp; </b>: Kiemen <br>
            <b>10 &nbsp; </b>: <i>Frei wählbar</i> <br>
        `,
        fertL : `
            <b>Magischer Pfeil</b> (IT, NK/FK) <br>
                +1 mKS <br>
                (<i>${meisterlich}: +3 mKS</i>) <br>
            <br>
            <b>Teleportation</b> (IT) <br>
                jemand <br>
                (<i>${meisterlich}: zwei / -2 alle</i>) <br>
            <br>
            <b>Stärke</b> (IT) <br>
            <b>Geschick</b> (IT) <br>
            <b>Schnelligkeit</b> (IT) <br>
                jemand +1 Eigenschaft <br>
                (<i>${meisterlich}: +3 / +1 alle</i>) <br>
                [jmd +1 extra wenn 2 besser] <br>
            <br>
            <b>Fliegen</b> (IT) <br>
                jemand +1 BW & +1 NK <br>
                (<i>${meisterlich}: 2 jmd / -1: alle</i>) <br>
            <br>
            <b>Feuerball</b> (IT, FK) <br>
                +1 FK pro Gegner (max 3) <br>
                nicht-magischer Feuerschaden <br>
                Riesen = 2 Gegner <br>
                (<i>${meisterlich}: 2 FK pro Gegner (max 8)</i>) <br>
            <br>
            <b>Kraftspeicher</b> (IT, Spez.) <br>
                braucht Zauberstab <br>
                speichert Zauberenergie <br>
            <br>
        `,
        fertR : `
        <b>Tränke brauen</b> (GE, k.Zauber) <br>
                in Events Tränke brauen<br>
            <br>
            <b>Kiemen</b> (IT) <br>
                selbst & ein anderer <br>
                (<i>${meisterlich}: alle</i>) <br>
            <br>
            <b>Magieschutz</b> (IT) <br>
                negiert Zauber, Magie, Fluch <br>
                (<i>${meisterlich}: alle ganze Runde</i>) <br>
            <br>
            <b>Sphäre</b> (IT) <br>
                selber +3 RW gegen feste FK <br>
                1 Kampfrunde pro Erfolg <br>
                [-1: jemand anderes] <br>
                (<i>${meisterlich}: alle</i>) <br>
            <br>
            <b>Kälteschutz</b> (IT) <br>
                selber & direkt dahinter <br>
                (<i>${meisterlich}: alle</i>) <br>
            <br>
            <b>Drachenhaut</b> (IT) <br>
                selber +2 RW <br>
                (<i>${meisterlich}: alle +1 RW</i>) <br>
            <br>
            <b>Eissturm</b> (IT) <br>
                FK: alle 6er neu <br>
                NK+FK: jeden zweiten 6er neu <br>
                [bei Schwäche auch 5er] <br>
                (<i>${meisterlich}: 6er sind 1er</i>) <br>
        `,
        meistLN : "<b>Magier</b> (IT 4+)",
        meistL : `
            2. (versch.) Zauber (-3)<br>
            extra Zauberplatz
        `,
        meistRN : "Erzmagier (77 Ehre!)",
        meistR : `
            2. (versch.) Zauber (-1)<br>
            extra Zauberplatz
        `,
    },
}



function main ( ) {
    let root = document.getElementById("root")
    for (let beruf in BERUFE) {
        beruf = BERUFE[beruf];
        root.innerHTML += /*html*/`
            <section id="${beruf.id}" class="sheet">
                <div class="container">
                    <!-- HEADER
                    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
                    <div class="row nomargin smaller">
                        <hr class="column three">
                        <h3 class="column six">
                            ${beruf.name}
                        </h3>
                        <hr class="column three">
                    </div>
                    <!-- BESCHREIBUNG
                    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
                    <div class="row nomargin smaller box">
                        <div class="column six">
                            <p>
                                ${beruf.descL}
                            </p>
                        </div>
                        <div class="column six">
                            <p>
                                ${beruf.descR}
                            </p>
                        </div>
                    </div>
                    <!-- FERTIGKEITEN
                    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
                    <div class="row smaller box">
                        <div class="row nomargin">
                            <h6 class="column">
                                
                            </h6>
                        </div>
                        <div class="row">
                            <div class="column six">
                                <p class="row nomargin smaller">
                                    ${beruf.fertL}
                                </p>
                            </div>
                            <div class="column six">
                                <p>
                                    ${beruf.fertR}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- MEISTER LEVEL
                    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
                    <div class="row  smaller box">
                        <div class="column six">
                            <h6 class="ltxt">
                            ${beruf.meistLN}
                            </h6>
                            <p>
                                ${beruf.meistL}
                            </p>
                        </div>
                        <div class="column six">
                            <h6 class="ltxt">
                            ${beruf.meistRN}
                            </h6>
                            <p>
                                ${beruf.meistR}
                            </p>
                        </div>
                    </div>
                </div>
                <!-- FOOTER
                ================================================== -->
                <div class="row smaller" style="position: absolute; bottom: 10px; left: 5%;">
                    <hr class="column five">
                    <h1 class="column two">
                        <i class='nf ${beruf.icon}'></i>
                    </h1>
                    <hr class="column five">
                </div>
            </section>`;
    }
}





