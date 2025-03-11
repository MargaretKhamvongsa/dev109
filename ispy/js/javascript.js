// Track found items
let foundCount = 0;

// Handle item found
function foundItem(itemId) {
    const item = document.getElementById(itemId);
    if (!item.style.textDecoration || item.style.textDecoration !== "line-through") {
        item.style.textDecoration = "line-through"; // Cross out the item
        foundCount++;
    }

    const totalItems = document.querySelectorAll("#item-list li").length;
    if (foundCount === totalItems) {
        alert("Congratulations! You've found all the items!");
        document.getElementById("replay-btn").style.display = "block"; // Show replay button
    }
}

// Replay the game
function replay() {
    // Reset all list items
    const items = document.querySelectorAll("#item-list li");
    items.forEach(item => {
        item.style.textDecoration = ""; // Remove line-through
    });

    foundCount = 0; // Reset found count
    document.getElementById("replay-btn").style.display = "none"; // Hide replay button
}

