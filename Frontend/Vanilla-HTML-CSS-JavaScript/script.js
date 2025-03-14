// script.js - JavaScript file for handling interactivity and dynamic behavior

// This file is responsible for:
// - Adding event listeners for user interactions (e.g., button clicks, navigation)
// - Handling DOM manipulations to update the page dynamically
// - Logging useful information for debugging purposes
// - Providing a foundation for additional JavaScript functionality as needed
// - API requests for dynamic content

// script.js - JavaScript file for handling interactivity and dynamic behavior

// This file is responsible for:
// - Adding event listeners for user interactions (e.g., button clicks, navigation)
// - Handling DOM manipulations to update the page dynamically
// - Logging useful information for debugging purposes
// - Providing a foundation for additional JavaScript functionality as needed
// - API requests for dynamic content

// -------------------------------
//  1. Adding Event Listeners
// -------------------------------
//  Example: Listening for a button click and performing an action.

//  document.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("myButton"); // Selects a button with id="myButton"

//   if (button) {
//     button.addEventListener("click", () => {
//       alert("Button Clicked!");
//     });
//   }
// });

//   -------------------------------
//    2. Handling DOM Manipulations
//   -------------------------------
//    Example: Dynamically updating content on the page.

// function updateHeading() {
//   const heading = document.querySelector("h1"); // Selects the first <h1> element
//   if (heading) {
//     heading.textContent = "New Heading Updated by JavaScript!";
//   }
// }

//   -------------------------------
//    3. Logging for Debugging
//   -------------------------------
//    Example: Logging user actions and events.

//   console.log("JavaScript Loaded!"); // Confirms the script is running

//   document.addEventListener("click", (event) => {
//     console.log(`User clicked on: ${event.target.tagName}`); // Logs the clicked element
//   });

//   -------------------------------
//    4. API Requests for Dynamic Content
//   -------------------------------
//    Example: Fetching data from an API and displaying it.

//    async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     ); // Example API request
//     const data = await response.json();
//     console.log("Fetched Data:", data); // Logs API data

//     const contentDiv = document.getElementById("content"); // Selects an element with id="content"
//     if (contentDiv) {
//       contentDiv.textContent = `Fetched Title: ${data.title}`; // Updates page content
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
