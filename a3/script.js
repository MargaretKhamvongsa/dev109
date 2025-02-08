// Create Rhombus
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    // Call Functions For Upper And Lower Right Parts Of The Rhombus
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

// Upper Right Rhombus
function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    // Loop Through Each Line Of The Rhombus
    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>";
        // Loop Through Each Position In The Line
        for (let j = 0; j <= i; j++) {
            // Check If Position Is Even Or Odd And Apply Corresponding Color
            if (j % 2) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>";
    }
    // Update HTML Content
    document.getElementById("upRight").innerHTML = rLine;
}

// Lower Right Rhombus
function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    // Rhombus Loop
    for (let i = pHeight; i > 0; i--) {
        rLine += "<p>";
        // Rhombus Position Loop
        for (let j = 0; j < i; j++) {
            // Check Even or Odd
            if (j % 2) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>";
    }
    // Update HTML
    document.getElementById("downRight").innerHTML = rLine;
}
