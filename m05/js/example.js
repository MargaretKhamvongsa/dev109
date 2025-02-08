// Prompt 0 to 10
let table = prompt("Enter a number from 0 to 10 for the multiplication table:");

// Convert to INT
table = parseInt(table, 10);

// Check if the input is not a number (NaN) or null and set it to 0 if true
if (isNaN(table) || table === null || table < 0 || table > 10) {
    table = 0;
}

// Initialize Table
let msg = '<h2>Multiplication Table</h2>';

// Generate Table
for (let i = 1; i <= 10; i++) {
    // Append each row of the multiplication table to the message
    msg += table + ' x ' + i + ' = ' + (table * i) + '<br />';
}

// Display Table
document.getElementById('content').innerHTML = msg;
