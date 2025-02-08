
// Prompt the user for a # from 0 to 10
let table = prompt("Enter a number from 0 to 10 for the multiplication table:");

// Convert the Input to Integer
table = parseInt(table, 10);

//If the input IS NULL or NOT # (NaN) and set it to 0 if true
if (isNaN(table) || table === null) {
    table = 0;
}

// Force 0-10, Else set to 0
if (table < 0 || table > 10) {
    table = 0;
}

// Initialize the * 
let msg = '<h2>Multiplication Table</h2>';

// Multiplication Table
for (let i = 1; i <= 10; i++) {
    // Append each row of the multiplication table to the message
    msg += table + ' x ' + i + ' = ' + (table * i) + '<br />';
}

// Display the * Table
document.getElementById('content').innerHTML = msg;
