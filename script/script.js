const topbun = document.querySelector("#topbun")
const bottombun = document.querySelector("#bottombun")
const cheese = document.querySelector("#cheese")
const onion = document.querySelector("#onion")
const lettuce = document.querySelector("#lettuce")
const tomato = document.querySelector("#tomato")
const rawburger = document.querySelector("#rawburger")
const scoregeven = document.querySelector("#scoregeven")
const afronden = document.querySelector("#afronden")
const ramsey = document.querySelector("#ramsey")
const BURGERPOS = document.querySelector("#burgerpositie")
const posities = document.querySelectorAll(".positie")

let burgerstatus = "niks"
let timer
let ingredientenbijhouden = 0
let score = 0



//-------------------------------------------------Ingrediënten-------------------------------------------------//
// Bronplaatjes van de ingredienten van: https://www.freepik.com/free-vector/flat-background-with-burger-ingredients_1137462.htm#fromView=search&page=1&position=0&uuid=5eb51ee0-7fc6-4c66-98c4-3fa800e43efd 

function addTopBun() {                                                       //functie om bovenste hamburger broodje toe te voegen
    if (ingredientenbijhouden <= 9) {
        ingredientenbijhouden = ingredientenbijhouden + 1;
        posities[ingredientenbijhouden].src = "images/bovenste_hamburger_broodje.png";
    } else {
        klaar()
    }
}

function addBottomBun() {                                                    //functie om bovenste hamburger broodje toe te voegen
    if (ingredientenbijhouden <= 9) {
        ingredientenbijhouden = ingredientenbijhouden + 1;
        posities[ingredientenbijhouden].src = "images/onderste_hamburger_broodje.png";
    } else {
        klaar()
    }
}

function addCheese() {                                                       //functie om bovenste hamburger broodje toe te voegen
    if (ingredientenbijhouden <= 9) {
        ingredientenbijhouden = ingredientenbijhouden + 1;
        posities[ingredientenbijhouden].src = "images/kaas1.png";
    } else {
        klaar()
    }
}

function addOnion() {                                                        //functie om bovenste hamburger broodje toe te voegen
    if (ingredientenbijhouden <= 9) {
        ingredientenbijhouden = ingredientenbijhouden + 1;
        posities[ingredientenbijhouden].src = "images/uienringen.png";
    } else {
        klaar()
    }
}

function addLettuce() {                                                      //functie om bovenste hamburger broodje toe te voegen
    if (ingredientenbijhouden <= 9) {
        ingredientenbijhouden = ingredientenbijhouden + 1;
        posities[ingredientenbijhouden].src = "images/sla.png";
    } else {
        klaar()
    }
}

function addTomato() {                                                       //functie om bovenste hamburger broodje toe te voegen
    if (ingredientenbijhouden <= 9) {
        ingredientenbijhouden = ingredientenbijhouden + 1;
        posities[ingredientenbijhouden].src = "images/tomaat.png";
    } else {
        klaar()
    }
}



//-------------------------------------------------Hamburgervlees-------------------------------------------------//
// Bron plaatjes van de hamburger: https://www.freepik.com/free-vector/flat-background-with-burger-ingredients_1137462.htm#fromView=search&page=1&position=0&uuid=5eb51ee0-7fc6-4c66-98c4-3fa800e43efd 

function addBurger() {                                                       //functie om hamburger op de grill te leggen
    if (ingredientenbijhouden <= 9) {
        BURGERPOS.src = "images/hamburger_rauw.png";
        burgerstatus = "rauw"
        timer = setTimeout(mooieBurger, 4000)
    } else {
        alert("Je kan niet meer dan 10 ingredienten toevoegen")
    }
}

function mooieBurger() {                                                     //functie om hamburger te laten veranderen van rauw naar goed
    burgerstatus = "goed"
    BURGERPOS.src = "images/hamburger_goed.png";
    timer = setTimeout(verbrandeBurger, 5000)
}

function verbrandeBurger() {                                                 //functie om hamburger te laten veranderen van goed naar verbrand                        
    burgerstatus = "verbrand"
    BURGERPOS.src = "images/hamburger_verbrand.png";
}

function burgernaarbrood() {                                                 //functie om hamburger van grill naar bord te verplaatsen
    if (burgerstatus === "niks") {
        alert("leg eerst een hamburger op de grill")
    } else if (burgerstatus === "rauw") {
        ingredientenbijhouden = ingredientenbijhouden + 1;
        posities[ingredientenbijhouden].src = "images/hamburger_rauw.png";
        rawRamsey()
        burgerstatus = "niks"
    } else if (burgerstatus === "goed") {
        ingredientenbijhouden = ingredientenbijhouden + 1;
        posities[ingredientenbijhouden].src = "images/hamburger_goed.png";
        burgerstatus = "niks"
    } else if (burgerstatus === "verbrand") {
        ingredientenbijhouden = ingredientenbijhouden + 1;
        posities[ingredientenbijhouden].src = "images/hamburger_verbrand.png";
        burnedRamsey()
        burgerstatus = "niks"
    }
    BURGERPOS.src = "images/transparante_placeholder.png";
    clearTimeout(timer)
}



//-------------------------------------------------Ramsey reacties-------------------------------------------------//
// Bron plaatje van Ramsey: https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/58216583325005715022272927417589702302940594195128576972213552552677033902081

function rawRamsey() {                                                      //functie om ramsey te laten reageren op rauwe hamburger
    ramsey.src = "images/gordon_boos.png";
    let rawaudio = new Audio("audio/raw.mp3");                              //audio code van: https://www.youtube.com/watch?v=3xlws5og44U
    rawaudio.play();                                                        //bron van audio: https://www.youtube.com/watch?v=rD8doiIZLks 
}

function burnedRamsey() {                                                   //functie om ramsey te laten reageren op verbrande hamburger
    ramsey.src = "images/gordon_boos.png";
    let burnedaudio = new Audio("audio/burned.mp3");                        //audio code van: https://www.youtube.com/watch?v=3xlws5og44U
    burnedaudio.play();                                                     //bron van audio: https://www.youtube.com/watch?v=RTvOBPzsbec 
}


function gordonscorereactie() {                                                  //functie die gordon laat reageren op het moment je scoren kleiner of gelijk is aan 5
    ramsey.src = "images/gordon_boos.png";
    let donkeyaudio = new Audio("audio/donkey.mp3");                        //audio code van: https://www.youtube.com/watch?v=3xlws5og44U
    donkeyaudio.play();                                                     //bron van audio: https://www.myinstants.com/en/search/?name=gordon%20ramsay 
}



//-------------------------------------------------Score-------------------------------------------------//

function klaar(){                                                           //functie om score te geven
    if(ingredientenbijhouden == 0){
        alert("Je hebt geen burger gemaakt")
    } else if (score > 0 ){
        location.reload();                                                  // locationreload code van: https://www.w3schools.com/jsref/met_loc_reload.asp 
    } else if (ingredientenbijhouden <= 5 ){
        score = Math.floor(Math.random() * 5) + 1;
        document.getElementById("scoregeven").textContent = "Je hebt " + score + " punten behaald!";
        afronden.innerHTML = "Opnieuw proberen";                            // innerhtml code van: https://www.permadi.com/tutorial/jsInnerHTMLDOM/
        gordonscorereactie()
    } else if (ingredientenbijhouden > 5){
        score = Math.floor(Math.random() * 5) + 6;
        document.getElementById("scoregeven").textContent = "Je hebt " + score + " punten behaald!";
        afronden.innerHTML = "Opnieuw proberen";                            // innerhtml code van: https://www.permadi.com/tutorial/jsInnerHTMLDOM/
    }
}

//-------------------------------------------------Eventlistners-------------------------------------------------//


topbun.addEventListener("click", addTopBun)
bottombun.addEventListener("click", addBottomBun)
cheese.addEventListener("click", addCheese)
onion.addEventListener("click", addOnion)
lettuce.addEventListener("click", addLettuce)
tomato.addEventListener("click", addTomato)
rawburger.addEventListener("click", addBurger)
burgerpositie.addEventListener("click", burgernaarbrood)
afronden.addEventListener("click", klaar)


