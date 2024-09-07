 let timeData = []; // Global variable to hold the JSON data

 // Function to update the UI with the fetched data
 function updateData(period) {
   // Get all categories by query selecting .overlay elements
   const categories = document.querySelectorAll(".overlay");

   categories.forEach((category, index) => {
     const current = category.querySelector(".current-hours");
     const previous = category.querySelector(".previous-hours");

     // Update the text based on the data fetched from the JSON
     current.innerText = `${timeData[index].timeframes[period].current}hrs`;
     previous.innerText = `Last ${
       period.charAt(0).toUpperCase() + period.slice(1)
     } - ${timeData[index].timeframes[period].previous}hrs`;
   });
 }

 // Fetch data from the local JSON file
 function fetchData() {
   fetch("./data.json") // Assuming the file is in the same directory
     .then((response) => response.json())
     .then((data) => {
       timeData = data; // Store fetched data
       updateData("weekly"); // Initialize with weekly data by default
     })
     .catch((error) => console.error("Error fetching the data:", error));
 }

 // Event listeners for anchor tabs
 document
   .getElementById("daily-button")
   .addEventListener("click", function (e) {
     e.preventDefault();
     updateData("daily");
   });

 document
   .getElementById("weekly-button")
   .addEventListener("click", function (e) {
     e.preventDefault();
     updateData("weekly");
   });

 document
   .getElementById("monthly-button")
   .addEventListener("click", function (e) {
     e.preventDefault();
     updateData("monthly");
   });

 // Fetch the JSON data when the page loads
 window.onload = fetchData;