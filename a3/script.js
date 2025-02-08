// Create Diamond
function createDiamond(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";

    // Top Diamond
    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>";
        // Left top part
        for (let j = pHeight - 1; j > i; j--) {
            rLine += "<span>&nbsp;&nbsp;</span>";
        }
        for (let j = 0; j <= i; j++) {
            rLine += `<span style='color:${j % 2 ? pColorEven : pColorOdd};'>${pSymbol}</span>`;
        }
        // Right top part
        for (let j = 1; j <= i; j++) {
            rLine += `<span style='color:${j % 2 ? pColorEven : pColorOdd};'>${pSymbol}</span>`;
        }
        rLine += "</p>";
    }

    // Bottom diamond
    for (let i = pHeight - 1; i >= 0; i--) {
        rLine += "<p>";
        // Left bottom part
        for (let j = pHeight - 1; j > i; j--) {
            rLine += "<span>&nbsp;&nbsp;</span>";
        }
        for (let j = 0; j <= i; j++) {
            rLine += `<span style='color:${j % 2 ? pColorEven : pColorOdd};'>${pSymbol}</span>`;
        }
        // Right bottom part
        for (let j = 1; j <= i; j++) {
            rLine += `<span style='color:${j % 2 ? pColorEven : pColorOdd};'>${pSymbol}</span>`;
        }
        rLine += "</p>";
    }

    // Update HTML
    document.getElementById("upRight").innerHTML = rLine;
    document.getElementById("downRight").innerHTML = "";
}
