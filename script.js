console.log("Test");
// shniy odds
let SBadge
let SPS
let SWall
let SRunes
let expert = false

function ShinyBadgeContentClicked(btn) {
    const ShinyBadgeLuckText = document.getElementById("ShinyBadgeLuck");
    let value = btn.innerText;
    ShinyBadgeLuckText.textContent = value;
    SBadge = value.substring(1);
    UpdateShinyOdds();
}

function ShinyWallContentClicked(btn) {
    const ShinyWallLuckText = document.getElementById("ShinyWallLuck");
    let value = btn.innerText;
    ShinyWallLuckText.textContent = value;
    SWall = value.substring(1);
    UpdateShinyOdds();
}

function ShinyPetScore() {
    const check = document.getElementById("ExpertLuckCheck")
    const PSI = document.getElementById("PS-input-text")
    if (PSI.value > 100000000) {
        PSI.value = 100000000;
    }
    if (check.checked == true) {
        SPS = PSI.value;
        expert = true;
        UpdateShinyOdds();
    }
    else {
        expert = false;
        UpdateShinyOdds();
    }
}

function ShinyRunesContentClicked(btn) {
    const ShinyRunesLuckText = document.getElementById("ShinyRunesLuck");
    let value = btn.innerText;
    ShinyRunesLuckText.textContent = value;
    SRunes = value.substring(1);
    UpdateShinyOdds();
}

function UpdateShinyOdds() {
    const SResult = document.getElementById("ShinyResult")
    if (SBadge == undefined) {
        SBadge = 1;
    }
    if (SWall == undefined) {
        SWall = 1;
    }
    if (SRunes == undefined) {
        SRunes = 1;
    }
    if (expert == true) {
        SResult.textContent = "Shiny odds: 1 in " + (Math.round((1000/SBadge/SWall/SRunes/(1+SPS/10000000))*10)/10)
    }
    else {
        SResult.textContent = "Shiny odds: 1 in " + (Math.round((1000/SBadge/SWall/SRunes)*10)/10)
    }
}