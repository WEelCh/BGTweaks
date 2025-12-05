

PLAYER = `<i class="icon main" data-lucide="user-round"></i>`


AGENDA = [
    {   qty : 1,
        text : ` Fully upgrade your wepons `},
    {   qty : 1,
        text : ` Fully upgrade your shields `},
    {   qty : 1,
        text : ` Control 12 Production Nodes `},
    {   qty : 1,
        text : ` Control 7 Research Nodes `},
    {   qty : 1,
        text : ` Control 5 Culture Nodes `},
    {   qty : 1,
        text : ` Occupy 5 Phenomenon `},
    {   qty : 1,
        text : ` Control 10 Systems `},
    {   qty : 1,
        text : ` Have 7 Warp tokens pictured on your completed Advancements `},
    {   qty : 1,
        text : ` Orbit 8 developed Systems you do not Control `},
    {   qty : 1,
        text : ` Complete 3 Advancements from other players, with at least 1 from each `},
]



function onload () {
    CARDNUM = 0;



    for (card of AGENDA) {
        //console.log(card)
        for (let i = 0; i < card.qty; i++) {
            console.log(document.querySelector('section.sheet:last-of-type'))
            document.querySelector('section:last-of-type').innerHTML += /*html*/`

            <div class="card"> <!-- rm card -> dynamic width height !!! -->
                <!-- H E A D -->
                <div class="row nomargin">
                    <div class="elem width15">
                        <i class="icon main" data-lucide="pentagon"></i>
                    </div>
                    <div class="elem width70">
                        <h5>AGENDA</h5>
                    </div>
                    <div class="elem width15">
                        <i class="icon main" data-lucide="pentagon"></i>
                    </div>
                </div>
                <div class="headspacer"><hr></div>
                <!-- B O D Y -->
                <p class="row nomargin elem" style="margin-top:15mm">
                    ${card.text}
                </p>
            </div>

            `;
            CARDNUM++;
            if ( CARDNUM%15 == 0 ) { 
                document.querySelector('body').innerHTML += '<section class="sheet"></section>' }
        }
    }




    lucide.createIcons()
}
