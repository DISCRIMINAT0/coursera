const bookingTimeSelect = document.getElementById("booking-time");

const startTime = "10:30"; // 10:30 AM
const endTime = "23:30"; // 11:30 PM
const timeInterval = 30 * 60; // 30 minutes in seconds

// Generate time options
const timeOptions = [];
let currentTime = startTime;
while (currentTime <= endTime) {
  timeOptions.push(currentTime);
  currentTime = new Date(currentTime);
  currentTime.setMinutes(currentTime.getMinutes() + timeInterval);
  currentTime = currentTime.toTimeString().slice(0, 5); // Format time
}

// Add options to select element
timeOptions.forEach(time => {
  const option = document.createElement("option");
  option.value = time;
  option.text = time;
  bookingTimeSelect.appendChild(option);
});
