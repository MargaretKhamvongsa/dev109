// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;    // Name of the hotel
  this.rooms = rooms;  // Total number of rooms
  this.booked = booked;  // Number of booked rooms

  // Method to check availability
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

// Create three hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 86, 10);

// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ' + quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ' + parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details3 = sunsetHotel.name + ' rooms: ' + sunsetHotel.checkAvailability();
var elHotel3 = document.createElement('div');
elHotel3.textContent = details3;
document.getElementById('info').appendChild(elHotel3);

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 21, 26, and 31, but note the security issues on p228-231
*/
