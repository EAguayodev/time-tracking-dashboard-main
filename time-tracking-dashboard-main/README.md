# Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [Github](https://github.com/EAguayodev/time-tracking-dashboard-main/tree/master/time-tracking-dashboard-main)
- Live Site URL: [Vercel](https://time-tracking-dashboard-main-orcin.vercel.app/)

## My process
My process involved these steps

1.HTML Structure: Write the HTML layout for the data and profile reports (daily, weekly, and monthly).
2.CSS Grid Layout: Use a CSS grid to display the columns in a repeat(2, 1fr) structure, ensuring consistent layout across the dashboard.
3.JavaScript for Dynamic Data: Fetch the local JSON file to display the starting data and implement functionality to update the display based on user interaction with tabs (daily, weekly, monthly).
This provides a clean, functional design with responsive data visualization.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Desktop-first workflow

### What I learned

In this challenge I learned how to fetch data from a local json file to display daily, weekly, and monthly data on personal categories using Vanilla Javascript. Integrated assistance from ChatGPT to help speed up the process and write celan javascript code.

To see how you can add code snippets, see below:

```html
<div class="overlay overlay-work">
  <div class="overlay-img img-work"></div>
  <div class="data-box">
    <div class="elipses-bar">
      <div>
        <small>Work</small>
      </div>
      <div>
        <img class="ellipsis-bars" src="images/icon-ellipsis.svg" alt="elispes bars for hover effect">
      </div>
    </div>
    <div class="log-data">
      <!-- weekly -->
      <h1>32hrs</h1>
      <small>Last Week - 36hrs</small>
      <!-- weekly -->
    </div>
  </div>
</div>
```
```css
.data-box {
    background-color: var(--Dark-blue);
    border-radius: 0.625rem;
    width: 15.938rem;
    position: absolute;
    top: 3rem;
    height: 12.438rem;
    z-index: 10;
    cursor: pointer;
}
```
```js
function fetchData() {
   fetch("./data.json") // Assuming the file is in the same directory
     .then((response) => response.json())
     .then((data) => {
       timeData = data; // Store fetched data
       updateData("weekly"); // Initialize with weekly data by default
     })
     .catch((error) => console.error("Error fetching the data:", error));
 }
```

### Continued development

I'll continue the Javascript learning path to level up my skills in the methodoliges provided in the Javascript learning path to honed down the main concepts needed to start using javascript frameworks.


### Useful resources

- [](https://www.geeksforgeeks.org/read-json-file-using-javascript/#) - This resource helped me get ideas on how to generate the javascript code needed to grab the local.json data and display each types of data according to the tab clicked.



## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev)

## Acknowledgments