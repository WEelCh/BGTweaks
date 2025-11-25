

function prepSheet ( race ) { return/*html*/`
<section id="${race.id}" class="sheet container" style="padding-top: 10px;">
    <!-- HEADER
    ================================================== 
    <div class="row nomargin">
        <img src="./img/kobold.png" class="column three" style="vertical-align: middle;">
        <h3 class="column three rtxt">Kobold</h3>
        <img src="./img/kobold.png" class="column three offset-by-three mirrored">
    </div>-->

    <!-- HEADER
    ================================================== -->
    <div class="row nomargin">

        <div class="row nomargin" style="margin-bottom: var(--boxSep);">

            <div class="row nomargin nomargin">
                <div class="column two">
                    <hr class="smaller row" style="margin-top: 20px;">
                </div>
                <h3 class="column eight ctxt" style="background-color:">${race.name}-${'&nbsp;'.repeat(race.name.length)}</h3>
                <div class="column two">
                    <hr class="smaller row" style="margin-top: 20px;">
                </div>
            </div>

        </div>

    </div>
    
    <!-- REGELN
    ================================================== -->
    <div class="row nomargin">

        <div class="box row nomargin">
        <!-- Regelüberschrift
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="row nomargin" style="margin-bottom: var(--boxSep);">
            <div class="column six">
                <div class="smaller row nomargin">
                    <h5 class="column ltxt"> <u>Sonderregeln</u> </h5>
                </div>
            </div>
            <div class="column six">
                <div class="row smaller nomargin">
                    <p class="ltxt">${race.rule0}</p>
                </div>
            </div>
        </div>
        <!-- Regelbody
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="row nomargin" style="margin-bottom: var(--boxSep);">
            <div class="column six">
                <div class="row smaller nomargin">
                    <p class="ltxt">${race.ruleL}</p>
                </div>
            </div>
            <div class="column six">
                <div class="row smaller nomargin">
                    <p class="ltxt">${race.ruleR}</p>
                </div>
            </div>
        </div>
        </div>

    </div>

    <!-- NAME USW
    ================================================== -->
    <div class="row nomargin" style="margin-top: var(--boxSep);">

        <div class="box row nomargin">
        <div class="row nomargin" style="margin-bottom: var(--boxSep);">

            <!-- Charakter
            –––––––––––––––––––––––––––––––––––––––––––––––––– -->
            <div class="column six">
                <div class="smaller row nomargin">
                    <h5 class="column ltxt">
                        <u>Name</u>(
                            <i class="nf nf-md-gender_male"></i> | 
                            <i class="nf nf-md-gender_female"></i> | 
                            <i class="nf nf-md-gender_male_female_variant"></i>
                        )
                    </h5>
                </div>
                <div class="smaller row nomargin" style="margin-bottom: 10px;">
                    <div class="column line">&nbsp;</div>
                </div>
            </div>
            <!-- Kampf
            –––––––––––––––––––––––––––––––––––––––––––––––––– -->
            <div class="column six">
                <div class="smaller row nomargin">
                    <h5 class="column four"><i class="nf nf-md-sword"></i> NK</h5>
                    <h5 class="column four"><i class="nf nf-md-bow_arrow"></i> FK</h5>
                    <h5 class="column four"><i class="nf nf-md-shield_half_full"></i> RW</h5>
                </div>
                <div class="smaller row nomargin" style="margin-bottom: 10px;">
                    <div class="column four box">&nbsp;</div>
                    <div class="column four box">&nbsp;</div>
                    <div class="column four box">&nbsp;</div>
                </div>
            </div>
            <!-- Ehre und Quests
            –––––––––––––––––––––––––––––––––––––––––––––––––– -->
            <div class="row nomargin">
                <div class="column six">
                    <div class="smaller row nomargin">
                        <div class="column nine box">&nbsp;</div>
                        <h5 class="column three ltxt">Ehre!</h5>
                    </div>
                </div>
                <div class="column six">
                    <div class="smaller row nomargin">
                        <h5 class="column four ltxt">Quests:</h5>
                        <div class="column eight box">&nbsp;</div>
                    </div>
                </div>
            </div>

        </div>
        </div>

    </div>

    <!-- MAIN STUFF
    ================================================== -->
    <div class="row nomargin" style="margin-top: var(--boxSep);">

        <!-- LEFT
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="column six">

            <!-- Fertigkeiten
            –––––––––––––––––––––––––––––––––––––––––––––––––– -->
            <div class="box row nomargin">
            <div class=" smaller row nomargin" style="margin-bottom: var(--boxSep);">
                
                <h5 class="row nomargin ltxt"> <u>Fertigkeiten</u> </h5>
                <div class="row nomargin line ltxt" style="position: relative;">
                    <p class="column one" style="position: absolute; bottom: 0; left: 0;">&nbsp;</p>
                    <h5 class="column five ltxt">&nbsp;Heimisch </h5>
                    <div class="column six">
                        <h5 class="column ctxt">
                            ${race.heimisch1}|${race.heimisch2}|&nbsp;&nbsp;
                        </h5>
                        <!--<h5 class="column four ltxt">|</h5>
                        <h5 class="column four ltxt">|</h5>-->
                    </div>
                </div>
                ${race.fertigkeiten}

            </div>
            </div>

            <!-- Eigenschaften
            –––––––––––––––––––––––––––––––––––––––––––––––––– -->
            <div class="box row nomargin" style="margin-top: var(--boxSep);">
            <div class=" smaller row nomargin" style="margin-bottom: var(--boxSep);">
                
                <h5 class="row nomargin ltxt"> <u>Eigenschaften</u> </h5>
                <div class="row nomargin">
                    <h5 class="column two offset-by-one ltxt" style="color: var(--BWColor);"> BW </h5>
                    <h5 class="column nine ltxt" style="color: var(--penColor)"> ${race.BW} </h5>
                </div>
                <div class="row nomargin">
                    <h5 class="column two offset-by-one ltxt" style="color: var(--STColor);"> ST </h5>
                    <h5 class="column nine ltxt" style="color: var(--penColor)"> ${race.ST} </h5>
                </div>
                <div class="row nomargin">
                    <h5 class="column two offset-by-one ltxt" style="color: var(--GEColor);"> GE </h5>
                    <h5 class="column nine ltxt" style="color: var(--penColor)"> ${race.GE} </h5>
                </div>
                <div class="row nomargin">
                    <h5 class="column two offset-by-one ltxt" style="color: var(--ITColor);"> IT </h5>
                    <h5 class="column nine ltxt" style="color: var(--penColor)"> ${race.IT} </h5>
                </div>

            </div>
            </div>
            
        </div>
        
        <!-- RIGHT
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="column six">

            <!-- Griff. Ausrüstung
            –––––––––––––––––––––––––––––––––––––––––––––––––– -->
            ${race.gA}

        </div>

    </div>

    <!-- MAIN STUFF
    ================================================== -->
    <div class="row nomargin" style="margin-top: var(--boxSep);">


            <!-- Rucksack
            –––––––––––––––––––––––––––––––––––––––––––––––––– -->
            <div class="row nomargin box">
                <h5 class="row nomargin ltxt" style="margin-bottom: ${race.bagheight};"> &nbsp;<u>Rucksack</u> </h5>
            </div>


    </div>

</section>`;}


BUBBLE = {
    b0 : `<i class="nf nf-md-checkbox_blank_circle"></i>`,
    b1 : `<i class="nf nf-md-numeric_1_circle_outline"></i>`,
    b2 : `<i class="nf nf-md-numeric_2_circle_outline"></i>`,
    b3 : `<i class="nf nf-md-numeric_3_circle_outline"></i>`,
    b4 : `<i class="nf nf-md-numeric_4_circle_outline"></i>`,
    b5 : `<i class="nf nf-md-numeric_5_circle_outline"></i>`,
    b6 : `<i class="nf nf-md-numeric_6_circle_outline"></i>`,
    b7 : `<i class="nf nf-md-numeric_7_circle_outline"></i>`,
    b8 : `<i class="nf nf-md-numeric_8_circle_outline"></i>`,
    b9 : `<i class="nf nf-md-numeric_9_circle_outline"></i>`,
}


const EQUIP = {
    normal : /*html*/`
                <div class="box row nomargin">
                <div class=" smaller row nomargin"style="margin-bottom: 9px">
                    
                    <h5 class="row nomargin ltxt"> <u>Ausrüstun</u>g </h5>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">&nbsp;</p>
                        <h5 class="column two ctxt">
                            <i class="nf nf-md-shield" style="vertical-align: center;"></i>
                        </h5>
                    </div>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">1</p>
                        <h5 class="column eleven"> &nbsp; </h5>
                    </div>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">2</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">3</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">4</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">5</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">6</p>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">7</p>
                        <h5 class="column two ctxt">
                            <i class="nf nf-md-horse_variant" style="vertical-align: sub;"></i>
                        </h5>
                    </div>
                    <div class="row nomargin" style="margin-top: 7px;">
                        <p class="column eleven offset-by-one line ltxt">&nbsp;</p>
                    </div>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">8</p>
                        <h5 class="column two ctxt">
                            <i class="nf nf-md-sack" style="vertical-align: sub;"></i>
                        </h5>
                    </div>

                </div>
                </div>`,
    nohorse : /*html*/`
                <div class="box row nomargin">
                <div class=" smaller row nomargin"style="margin-bottom: 66px">
                    
                    <h5 class="row nomargin ltxt"> <u>Ausrüstun</u>g </h5>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">&nbsp;</p>
                        <h5 class="column two ctxt">
                            <i class="nf nf-md-shield" style="vertical-align: center;"></i>
                        </h5>
                    </div>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">1</p>
                        <h5 class="column eleven"> &nbsp; </h5>
                    </div>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">2</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">3</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">4</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">5</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">6</p>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">7</p>
                        <h5 class="column two ctxt">
                            <i class="nf nf-md-sack" style="vertical-align: sub;"></i>
                        </h5>
                    </div>

                </div>
                </div>`,
    kobold : /*html*/`
                <div class="box row nomargin">
                <div class=" smaller row nomargin"style="margin-bottom: 39px">
                    
                    <h5 class="row nomargin ltxt"> <u>Ausrüstun</u>g </h5>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">&nbsp;</p>
                        <h5 class="column two ctxt">
                            <i class="nf nf-md-shield" style="vertical-align: center;"></i>
                        </h5>
                    </div>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">1</p>
                        <h5 class="column eleven"> &nbsp; </h5>
                    </div>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">2</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">3</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">4</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">5</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">6</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">7</p>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">8</p>
                        <h5 class="column two ctxt">
                            <i class="nf nf-md-sack" style="vertical-align: sub;"></i>
                        </h5>
                    </div>

                </div>
                </div>`,
    oger : /*html*/`
                <div class="box row nomargin">
                <div class=" smaller row nomargin"style="margin-bottom: 66px">
                    
                    <h5 class="row nomargin ltxt"> <u>Ausrüstun</u>g </h5>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">&nbsp;</p>
                        <h5 class="column two ctxt">
                            <i class="nf nf-md-shield" style="vertical-align: center;"></i>
                        </h5>
                    </div>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">&nbsp;</p>
                        <h5 class="column eleven ltxt"> &nbsp;Felsbrocken <span style="color: var(--penColor)">${BUBBLE.b1} ${BUBBLE.b2} ${BUBBLE.b4}</span></h5>
                    </div>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">1</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">2</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">3</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">4</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">5</p>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">6</p>
                        <h5 class="column two ctxt">
                            <i class="nf nf-md-sack" style="vertical-align: sub;"></i>
                        </h5>
                    </div>

                </div>
                </div>`,
    katze : /*html*/`
                <div class="box row nomargin">
                <div class=" smaller row nomargin"style="margin-bottom: 66px">
                    
                    <h5 class="row nomargin ltxt"> <u>Ausrüstun</u>g </h5>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">&nbsp;</p>
                        <h5 class="column eleven ltxt"> &nbsp;Krallen <span style="color: var(--penColor)">${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b2} ${BUBBLE.b5}</span></h5>
                    </div>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">1</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">2</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">3</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">4</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">5</p>
                    <p class="row nomargin line ltxt" style="margin-top: 7px;">6</p>
                    <div class="row nomargin line ltxt" style="position: relative;">
                        <p class="column one" style="position: absolute; bottom: 0; left: 0;">7</p>
                        <h5 class="column two ctxt">
                            <i class="nf nf-md-sack" style="vertical-align: sub;"></i>
                        </h5>
                    </div>

                </div>
                </div>`,
}


const ABILITY = {
    normal : /*html*/`
        <p class="row nomargin line ltxt" style="margin-top: 7px;">1</p>
        <p class="row nomargin line ltxt" style="margin-top: 7px;">2</p>
        <p class="row nomargin line ltxt" style="margin-top: 7px;">3</p>
        <p class="row nomargin line ltxt" style="margin-top: 7px;">4</p>`,
    echse : /*html*/`
        <div class="row nomargin line ltxt" style="position: relative;">
            <p class="column one" style="position: absolute; bottom: 0; left: 0;">&nbsp;</p>
            <h5 class="column five ltxt">&nbsp;Heimisch</h5>
            <div class="column six">
                <h5 class="column ctxt">
                    &nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;
                </h5>
                <!--<h5 class="column four ltxt">|</h5>
                <h5 class="column four ltxt">|</h5>-->
            </div>
        </div>
        <p class="row nomargin line ltxt" style="margin-top: 7px;">1</p>
        <p class="row nomargin line ltxt" style="margin-top: 7px;">2</p>
        <p class="row nomargin line ltxt" style="margin-top: 7px;">3</p>`,
}



const point = "<i class='nf nf-md-subdirectory_arrow_right'></i>";
const figure = "<i class='nf nf-fa-person'></i>";
const verletzung = `<i class='nf nf-md-water_outline'></i>`

RACES = {
    Mensch : {
        id : "Mensch",
        name : "Menschen",
        rule0 : `&nbsp;`,
        ruleL : `&nbsp;`,
        ruleR : `&nbsp;`,
        heimisch1 : "Ma",
        heimisch2 : "&nbsp;&nbsp;",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b5}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b5}`,
        gA : EQUIP.normal,
        bagheight : "178px"
    },
    Zwerg : {
        id : "Zwerg",
        name : "Zwergen",
        rule0 : `&nbsp;`,
        ruleL : `&nbsp;`,
        ruleR : `&nbsp;`,
        heimisch1 : "Hü",
        heimisch2 : "&nbsp;&nbsp;",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b4}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b2} ${BUBBLE.b5}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b4} ${BUBBLE.b7}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b3} ${BUBBLE.b6}`,
        gA : EQUIP.normal,
        bagheight : "178px"
    },
    Elf : {
        id : "Elf",
        name : "Elfen",
        rule0 : `&nbsp;`,
        ruleL : `&nbsp;`,
        ruleR : `&nbsp;`,
        heimisch1 : "Wa",
        heimisch2 : "&nbsp;&nbsp;",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b0}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3} ${BUBBLE.b5}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4} ${BUBBLE.b6}`,
        gA : EQUIP.normal,
        bagheight : "178px"
    },
    Halbling : {
        id : "Halbling",
        name : "Halbling",
        rule0 : `&nbsp;`,
        ruleL : `&nbsp;`,
        ruleR : `&nbsp;`,
        heimisch1 : "Eb",
        heimisch2 : "&nbsp;&nbsp;",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b5}`,
        gA : EQUIP.normal,
        bagheight : "178px"
    },
    Halbente : {
        id : "Halbente",
        name : "Halbenten",
        rule0 : `${figure} Halbling`,
        ruleL : `${point} 2 Halbenten können schnattern 
                <br>&nbsp; (zaubern verhindern)
                <br>${point} <b>Schwimmen</b>`,
        ruleR : `${point} Halbentenzaub. immun 
                <br>&nbsp; gegen Geschnatter`,
        heimisch1 : "UF",
        heimisch2 : "Ma",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b3}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3} ${BUBBLE.b5}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b5}`,
        gA : EQUIP.normal,
        bagheight : "140px"
    },
    Kobold : {
        id : "Kobold",
        name : "Kobold",
        rule0 : `${figure} Halbling`,
        ruleL : `${point} <b>Handeln</b>
                <br>${point} <b>Diebstahl</b> & <b>Ducken</b> immer
                <br>&nbsp; erlernbar wie berufseigen`,
        ruleR : `${point} Talismane zerfallen zu Staub
                <br>${point} hasst Hunde
                <br>${point} verschenken nichts`,
        heimisch1 : "Ur",
        heimisch2 : "&nbsp;&nbsp;",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b5}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4} ${BUBBLE.b6}`,
        gA : EQUIP.kobold,
        bagheight : "140px"
    },
    Fee : {
        id : "Fee",
        name : "Feen",
        rule0 : `${figure} Halbling`,
        ruleL : `${point} <b>Fliegen</b> (automatisch)
                <br>${point} ${verletzung}: Tod wenn nicht ST
                <br>${point} Immun gegen Gift, Krankheit`,
        ruleR : `${point} <u>Zauberer/Waldläufer</u>
                <br>&nbsp; Doppelberuf (arbeitet nie)
                <br>${point} kein W6 im Kampf`,
        heimisch1 : "Ur",
        heimisch2 : "&nbsp;&nbsp;",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3}`,
        ST : `${BUBBLE.b1} ${BUBBLE.b4}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b2} ${BUBBLE.b4}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3}`,
        gA : EQUIP.nohorse,
        bagheight : "140px"
    },
    Centaurus : {
        id : "Centaurus",
        name : "Centauren",
        rule0 : `&nbsp;`,
        ruleL : `${point} <i class='nf nf-md-horse_variant_fast'></i> (beritten)`,
        ruleR : `${point} Verliese & Höhlen -1 BW`,
        heimisch1 : "Öd",
        heimisch2 : "&nbsp;&nbsp;",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b2}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b3} ${BUBBLE.b6}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        gA : EQUIP.nohorse,
        bagheight : "178px"
    },
    Aaruk : {
        id : "Aaruk",
        name : "Aaruk",
        rule0 : `&nbsp;`,
        ruleL : `&nbsp;`,
        ruleR : `&nbsp;`,
        heimisch1 : "Mo",
        heimisch2 : "Kl",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b3} ${BUBBLE.b4}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b3} ${BUBBLE.b6}`,
        gA : EQUIP.normal,
        bagheight : "178px"
    },
    Halbelf : {
        id : "Halbelf",
        name : "Halbelfen",
        rule0 : `&nbsp;`,
        ruleL : `&nbsp;`,
        ruleR : `&nbsp;`,
        heimisch1 : "Wa",
        heimisch2 : "Ma",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3} ${BUBBLE.b6}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0}  ${BUBBLE.b2} ${BUBBLE.b4}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4} ${BUBBLE.b7}`,
        gA : EQUIP.normal,
        bagheight : "178px"
    },
    Oger : {
        id : "Oger",
        name : "Oger",
        rule0 : `${figure} doppelt teure Rüstung/Schild`,
        ruleL : `${point} Einzelgänger (sonst Paarung)
                <br>${point} Laufordnung nach IT
                <br>${point} FK nur Felsbrocken
                <br>${point} NK zwhd Waffe wie einhd`,
        ruleR : `${point} 1 ${verletzung}: -1 KS
                <br>&nbsp; 2 ${verletzung}: Verletzt 
                <br>&nbsp; 3 ${verletzung}: Tod`,
        heimisch1 : "Be",
        heimisch2 : "&nbsp;&nbsp;",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b4}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b5}`,
        gA : EQUIP.oger,
        bagheight : "121px"
    },
    Echse : {
        id : "Echse",
        name : "Echsen",
        rule0 : `${figure} Aaruk, keine Plattenrüstung`,
        ruleL : `${point} in Öd, Ur o. Mo heimisch
                <br>${point} nie in Be heimisch
                <br>${point} nimmt alle Edelsteine`,
        ruleR : `${point} +1 RW , ST 5: +2 RW
                <br>${point} -1 bei Kälte , 2 Feuerschutz
                <br>${point} alle Rassenmankos in Events`,
        heimisch1 : "&nbsp;&nbsp;",
        heimisch2 : "&nbsp;&nbsp;",
        fertigkeiten : ABILITY.echse,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b2} ${BUBBLE.b3}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3} ${BUBBLE.b6}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b3} ${BUBBLE.b6}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        gA : EQUIP.nohorse,
        bagheight : "139px"
    },
    Frosch : {
        id : "Frosch",
        name : "Frosch",
        rule0 : `${figure} keine Plattenrüstung`,
        ruleL : `${point} Wegspringen (<b>Ducken</b>)
                <br>&nbsp; (wenn gelernt: meisterlich)
                <br>${point} <b>Tauchen</b> (+<b>Schwimmen</b>)
                <br>${point} 3 Basis-RW/(!): <s>Duck/Tauch</s>
                <br>&nbsp; (außer ST 3)`,
        ruleR : `${point} nie Erster (außer bester RW)
                <br>${point} Reittiere mit höchstens +1 NK
                <br>&nbsp; (außer Kämpfer mit:
                <br>&nbsp;&nbsp;&nbsp; ST 3 oder Kampf zu Pferd)
                <br>${point} G.fluid (<i class="nf nf-md-gender_male"></i>:uu/oo, <i class="nf nf-md-gender_female"></i>:aa/yy)`,
        heimisch1 : "Ma",
        heimisch2 : "&nbsp;&nbsp;",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3} ${BUBBLE.b5}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b5}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3} ${BUBBLE.b4}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        gA : EQUIP.normal,
        bagheight : "101px"
    },
    Biber : {
        id : "Biber",
        name : "Biber",
        rule0 : `${figure} Zwerg`,
        ruleL : `${point} <b>Tauchen</b> (+<b>Schwimmen</b>)`,
        ruleR : `${point}&nbsp; Bibergeil`,
        heimisch1 : "UF",
        heimisch2 : "OF",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b3}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3} ${BUBBLE.b6}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b3} ${BUBBLE.b6}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b6}`,
        gA : EQUIP.normal,
        bagheight : "178px"
    },
    Gnom : {
        id : "Gnom",
        name : "Gnom",
        rule0 : `${figure} Halbling`,
        ruleL : `${point} <b>Tränke brauen</b>, <b>Ducken</b>
                <br>${point} (!) nur wenn ST 3 und Schatz
                <br>${point} Immun gegen Fluch, Krankheit
                <br>${point} Dampfmaschinenexpertise`,
        ruleR : `${point} <u>Kleriker/Dieb</u>
                <br>&nbsp; Doppelberuf (arbeitet nie)
                <br>${point} kein W6 im Kampf
                <br>&nbsp; (nur Dolch und Wurfsteine)`,
        heimisch1 : "Wa",
        heimisch2 : "Ur",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b3} ${BUBBLE.b5}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b1} ${BUBBLE.b4}`,
        gA : EQUIP.nohorse,
        bagheight : "120px"
    },
    Katze : {
        id : "Katze",
        name : "Katzen",
        rule0 : `${figure} Elf, keine Rüstung & Waffen`,
        ruleL : `${point} <b>Ducken (M)</b></b>
                <br>${point} <b>Aufmerksamkeit (M)</b>
                <br>${point} FK immer auch NK für Katze
                <br>`,
        ruleR : `${point} +1 KS in Dunkelheit
                <br>${point} hassen Wasser
                <br>${point} können Emotionen verbergen`,
        heimisch1 : "Wa",
        heimisch2 : "Ur",
        fertigkeiten : ABILITY.normal,
        BW : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b6}`,
        ST : `${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b4}`,
        GE : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b2} ${BUBBLE.b3} ${BUBBLE.b5}`,
        IT : `${BUBBLE.b0} ${BUBBLE.b0} ${BUBBLE.b3} ${BUBBLE.b5}`,
        gA : EQUIP.katze,
        bagheight : "140px"
    },
};



function main ( ) {
    let container = document.getElementById("container");
    for (const race in RACES) {
        container.innerHTML += prepSheet( RACES[race] );
    }
}
