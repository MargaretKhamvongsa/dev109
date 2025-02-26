// Add new item
function addItem() {
  // Declare all variables at the top
  var newItem;
  var newEl;
  var newText;
  var position;

  // Get Input Value
  newItem = document.getElementById("newItem").value;
  if (newItem.trim() !== "") { // Ensure the input is not empty
    // Create new List Item
    newEl = document.createElement("li");
    // create text node
    newText = document.createTextNode(newItem);
    // Attach text node to list Item
    newEl.appendChild(newText);
    // find position
    position = document.getElementsByTagName("ul")[0];
    // new item to list
    position.appendChild(newEl);
    // Clear input box
    document.getElementById("newItem").value = "";
  }
}

// Add Enter key event
document.getElementById("newItem")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addItem(); // Call addItem() on Enter key press
      event.preventDefault(); // Prevent default form sub
    }
  });
