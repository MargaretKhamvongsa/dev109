
// Prompt the User for a Number
let table = prompt("Enter a value for the multiplication table:");

// Ensure User enters a number
table = parseInt(table, 10);

// Initialize Multiplication Table Header
let msg = '<h2>Multiplication Table</h2>';

// Generate the multiplication table
for (let i = 1; i <= 10; i++) {
    // Append Each Row
    msg += table + ' x ' + i + ' = ' + (table * i) + '<br />';
}

// Display Multiplication table
document.getElementById('content').innerHTML = msg;
