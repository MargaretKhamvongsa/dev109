// Add new item
function addItem() {
  // Declare all variables at the top
  var newItem;
  var newEl;
  var newText;
  var position;

  // Get input value
  newItem = document.getElementById("newItem").value; 
  // Create new list item
  newEl = document.createElement("li"); 
  // Create text node
  newText = document.createTextNode(newItem);
  // Attach text node to list item
  newEl.appendChild(newText);
  // Find position
  position = document.getElementsByTagName("ul")[0]; 
  // Append new item to list
  position.appendChild(newEl); 
  // Clear input box
  document.getElementById("newItem").value = "";
}

// Add Enter key event
document.getElementById("newItem")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addItem(); // Call addItem() on Enter key press
    }
  });
