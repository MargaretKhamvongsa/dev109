// Create Diamond
function createDiamond(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";

    // Top Diamond
    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>";
        // Left Top
        for (let j = pHeight - 1; j > i; j--) {
            rLine += "<span>&nbsp;&nbsp;</span>";
        }
        for (let j = 0; j <= i; j++) {
            rLine += `<span style='color:${j % 2 ? pColorEven : pColorOdd};'>${pSymbol}</span>`;
        }
        // Right Top
        for (let j = 1; j <= i; j++) {
            rLine += `<span style='color:${j % 2 ? pColorEven : pColorOdd};'>${pSymbol}</span>`;
        }
        rLine += "</p>";
    }

    // Bottom Diamond
    for (let i = pHeight - 1; i >= 0; i--) {
        rLine += "<p>";
        // Left Bottom
        for (let j = pHeight - 1; j > i; j--) {
            rLine += "<span>&nbsp;&nbsp;</span>";
        }
        for (let j = 0; j <= i; j++) {
            rLine += `<span style='color:${j % 2 ? pColorEven : pColorOdd};'>${pSymbol}</span>`;
        }
        // Right Bottom
        for (let j = 1; j <= i; j++) {
            rLine += `<span style='color:${j % 2 ? pColorEven : pColorOdd};'>${pSymbol}</span>`;
        }
        rLine += "</p>";
    }

    // Update Content
    document.getElementById("upRight").innerHTML = rLine;
    document.getElementById("downRight").innerHTML = "";
}
