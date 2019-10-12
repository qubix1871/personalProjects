var oppRed = 4, oppGreen = 4, oppBlue = 4, oppYellow = 4, oppWhite = 4, oppBlack = 4;
var red = 4, green = 4, blue = 4, yellow = 4, white = 4, black = 4;
var redC = false, blueC = false, yellowC = false, greenC = false, whiteC = false, blackC = false;
var dicenum;

function diceVisible(visible){
    document.getElementById("button").style.visibility = visible;
}

function buttonVisible(visible){
    document.getElementById("coloredName").style.visibility = visible;
    document.getElementById("whitecard").style.visibility = visible;
    document.getElementById("blackcard").style.visibility = visible;
}

function errorAnimation(text){
    var div = document.createElement("div");
    div.id = "error";
    div.style.position = 'fixed';
    div.style.zIndex = '200';
    div.style.width = '20%';
    div.style.height = '10%';
    div.style.backgroundColor = 'rgb(69, 69, 120)';
    div.style.boxShadow = '2px 5px 10px rgb(30, 30, 51)';
    div.style.top = '10%';
    div.className = 'animation';
    document.body.appendChild(div);

    var p = document.createElement("p");
    p.id = "errMsg";
    p.style.color = 'white';
    p.style.fontFamily = 'bahnschrift';
    p.style.fontSize = '20px';
    p.style.textAlign = 'center';
    p.style.position = 'relative';
    p.style.top = '5%';
    p.className = 'animation';
    div.appendChild(p);

    p.innerHTML = text;
}

document.getElementById("numRed").innerHTML = red;
document.getElementById("numGreen").innerHTML = green;
document.getElementById("numBlue").innerHTML = blue;
document.getElementById("numYellow").innerHTML = yellow;
document.getElementById("numWhite").innerHTML = white;
document.getElementById("numBlack").innerHTML = black;

document.getElementById("opp_red").innerHTML = oppRed;
document.getElementById("opp_green").innerHTML = oppGreen;
document.getElementById("opp_blue").innerHTML = oppBlue;
document.getElementById("opp_yellow").innerHTML = oppYellow;
document.getElementById("opp_white").innerHTML = oppWhite;
document.getElementById("opp_black").innerHTML = oppBlack;

document.getElementById("coloredName").innerHTML = "Color";

function rand(){
    dicenum = Math.floor((Math.random() * 5) + 1);
    cardChoice();
    lossCheck();
    diceVisible("hidden");
    buttonVisible("visible");
}

function createDiv(text){
    document.getElementById("winLoss").style.visibility = "visible";
    document.getElementById("context").style.visibility = "hidden";
    document.getElementById("status").innerHTML = text;
}
function lossCheck(){
    var youlose = "You Lost <br> <font size = 20>hit refresh to restart</font>";
    var youwin = "You Win <br> <font size = 20> hit refresh to restart</font>";

    if(black == 0 || white == 0){
        createDiv(youlose);
    }else if(oppBlack == 0 || oppWhite == 0){
        createDiv(youwin);
    }
}

function cardChoice(){
    if(dicenum == 1){
        redC = true;
        greenC = false;
        blueC = false;
        yellowC = false;
        whiteC = true;
        blackC = true;

        document.getElementById("coloredName").innerHTML = "Red";
    }
    else if(dicenum == 2){
        redC = false;
        greenC = true;
        blueC = false;
        yellowC = false;
        whiteC = true;
        blackC = true;

        document.getElementById("coloredName").innerHTML = "Green";
    }
    else if(dicenum == 3){
        redC = false;
        greenC = false;
        blueC = true;
        yellowC = false;
        whiteC = true;
        blackC = true;

        document.getElementById("coloredName").innerHTML = "Blue";
    }
    else if(dicenum == 4){
        redC = false;
        greenC = false;
        blueC = false;
        yellowC = true;
        whiteC = true;
        blackC = true;

        document.getElementById("coloredName").innerHTML = "Yellow";
    }
    else if(dicenum == 5){
        redC = false;
        greenC = false;
        blueC = false;
        yellowC = false;
        whiteC = true;
        blackC = true;

        document.getElementById("coloredName").innerHTML = "Color";
    }
    scoreDisplay();
}

function coloredChoice(){
    if(dicenum == 1){
        if(red <= 0){
            errorAnimation("Can't use Red because<br> you have none left");
        }
        else{
            red--;
        }
        scoreDisplay();
    }
    else if(dicenum == 2){
        if(green <= 0){
            errorAnimation("Can't use Green because<br> you have none left");
        }
        else{
            green--;
        }
        scoreDisplay();
    }
    else if(dicenum == 3){
        if(blue <= 0){
            errorAnimation("Can't use Blue because<br> you have none left");
        }
        else{
            blue--;
        }
        scoreDisplay();
    }
    else if(dicenum == 4){
        if(yellow <= 0){
            errorAnimation("Can't use Yellow because<br> you have none left");
        }
        else{
            yellow--;
        }
        scoreDisplay();
    }
    else if(dicenum == 5){
        white--;
        scoreDisplay();
    }
    diceVisible("visible");
    buttonVisible("hidden");
    opponentTurn();
}

function whitecard(){
    if(dicenum == 1){
        white -= 2;
        scoreDisplay();
    }
    else if(dicenum == 2){
        white -= 2;
        scoreDisplay();
    }
    else if(dicenum == 3){
        white -= 2;
        scoreDisplay();
    }
    else if(dicenum == 4){
        white -= 2;
        scoreDisplay();
    }
    else if(dicenum == 5){
        white--;
        scoreDisplay();
    }
    diceVisible("visible");
    buttonVisible("hidden");
    opponentTurn();
}

function blackcard(){
    if(dicenum == 1){
        black--;
        scoreDisplay();
    }
    else if(dicenum == 2){
        black--;
        scoreDisplay();
    }
    else if(dicenum == 3){
        black--;
        scoreDisplay();
    }
    else if(dicenum == 4){
        black--;
        scoreDisplay();
    }
    else if(dicenum == 5){
        black--;
        scoreDisplay();
    }
    diceVisible("visible");
    buttonVisible("hidden");
    opponentTurn();
}

function scoreDisplay(){    
    document.getElementById("numRed").innerHTML = red;
    document.getElementById("numGreen").innerHTML = green;
    document.getElementById("numBlue").innerHTML = blue;
    document.getElementById("numYellow").innerHTML = yellow;
    document.getElementById("numWhite").innerHTML = white;
    document.getElementById("numBlack").innerHTML = black;

    lossCheck();
}

function oppScoreDisplay(){
    document.getElementById("opp_red").innerHTML = oppRed;
    document.getElementById("opp_green").innerHTML = oppGreen;
    document.getElementById("opp_blue").innerHTML = oppBlue;
    document.getElementById("opp_yellow").innerHTML = oppYellow;
    document.getElementById("opp_white").innerHTML = oppWhite;
    document.getElementById("opp_black").innerHTML = oppBlack;

    lossCheck();
}

function opponentTurn(){
    var oppChoices = Math.floor((Math.random() * 4) + 1);
    
    if(oppChoices == 1){
        var cardChoices = Math.floor((Math.random() * 2) + 1);
        if(cardChoices == 1){
            if(oppRed <= 0){
                var oppSecChoices = Math.floor((Math.random() * 2) + 1);
                if(oppSecChoices == 1){
                    oppWhite -= 2;
                }
                else if(oppSecChoices == 2){
                    oppBlack--;
                }
            }
            else{
                oppRed--;
            }
        }
        else if(cardChoices == 2){
            oppWhite -= 2;
        }
        else if(cardChoices == 3){
            oppBlack--;
        }
        oppScoreDisplay();
    }
    else if(oppChoices == 2){
        var cardChoices = Math.floor((Math.random() * 2) + 1);
        if(cardChoices == 1){
            if(oppGreen <= 0){
                var oppSecChoices = Math.floor((Math.random() * 2) + 1);
                if(oppSecChoices == 1){
                    oppWhite -= 2;
                }
                else if(oppSecChoices == 2){
                    oppBlack--;
                }
            }
            else{
                oppGreen--;
            }
        }
        else if(cardChoices == 2){
            oppWhite -= 2;
        }
        else if(cardChoices == 3){
            oppBlack--;
        }
        oppScoreDisplay();
    }
    else if(oppChoices == 3){
        var cardChoices = Math.floor((Math.random() * 2) + 1);
        if(cardChoices == 1){
            if(oppBlue <= 0){
                var oppSecChoices = Math.floor((Math.random() * 2) + 1);
                if(oppSecChoices == 1){
                    oppWhite -= 2;
                }
                else if(oppSecChoices == 2){
                    oppBlack--;
                }
            }
            else{
                oppBlue--;
            }
        }
        else if(cardChoices == 2){
            oppWhite -= 2;
        }
        else if(cardChoices == 3){
            oppBlack--;
        }
        oppScoreDisplay();
    }
    else if(oppChoices == 4){
        var cardChoices = Math.floor((Math.random() * 2) + 1);
        if(cardChoices == 1){
            if(oppYellow <= 0){
                var oppSecChoices = Math.floor((Math.random() * 2) + 1);
                if(oppSecChoices == 1){
                    oppWhite -= 2;
                }
                else if(oppSecChoices == 2){
                    oppBlack--;
                }
            }
            else{
                oppYellow--;
            }
        }
        else if(cardChoices == 2){
            oppWhite -= 2;
        }
        else if(cardChoices == 3){
            oppBlack--;
        }
        oppScoreDisplay();
    }
    else if(oppChoices == 5){
        var cardChoices = Math.floor((Math.random() * 2) + 1);
        if(cardChoices == 1){
            oppWhite--;
        }
        else if(cardChoices == 2){
            oppBlack--;
        }
        oppScoreDisplay();
    }
}



