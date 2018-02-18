# Kilovolt Blog - Lab 05

**Author**: Suzanne (Sooz) Richman
**Version**: 1.0.4 

## Overview

This product is designed to give users a consistent reading and navigation experience across mobile and desktop devices, with content ordered by most recent first and sortable by both author or category. Additionally, users who want to add articles to the blog may now do so and either publish immediately or review a draft. If they want they can use the JSON link at the bottom to add their new content to the blogArticles.js to be displayed on the main blog, as well. 

## Getting Started

The user would need to 
* Create index.html
* Get the icons from IcoMoon (including all related files and CSS).
* Get the normalize.css from github.com/necolas/normalize.css.
* Search and find images of bacon, baseball, and cats
* Add filler text.
* Build CSS files according to SMACSS methodology.
* Include link to jQuery library (CDN).
* Create the articles as objects within an array with consistent property values.
* Create a constructor function to make the article array accessible to the constructor's method.
* Use jQuery to access and clone HTML elements of the DOM and populate those elements with content from the article array.
* Create forEach loops to generate new object instances and then append them to the DOM.
* Create an array of objects to hold the content generation for the DOM for each object.
* Create a JS file to generate a more interactive view of the DOM (selecting authors, catagories and hiding/showing full articles as well as navigating the long page as if it was a multipage website).
* Add Handlebars library and use it to create a tempalte for the HTML articles. 
* Add the Higlight JS library and related CSS styling to have the ability to highlight content.
* Create a new HTML page to handle article submissions that offers a form to create an article and ability to preview content.
* Connect the new HTML page to the exisiting blog page and update articleView.js, as well as articles.js to render content correctly across both pages.
* Be sure to write DRY code and leverage the libraries, as well as arrow functions to make code work as optimially as possible.
* Regularly use console logs, Chrome developer console tools and the help of others to identify and correct all coding and rendering erros. 


## Architecture

I used IcoMoon icon font for navigation icons. I included the jQuery, Handlebars, Hightlight JS, and Railcasts libraies, with related CSS as needed. I used Chrome to analyze and inspect. Project is built used HTML, CSS and JavaScript.

## Change Log

02-16-2018 5:30 pm - Commit lab files, with new "Sooz" folder as well as all work done on Friday afternoon. 

02-17-2018 11:40 am - Commit additional class workshop changes as well as added CSS file for hljs (stretch goal) library and the links to the highlights (hljs) library for both the new and index html pages. Also adding new icons files so new icons available for navigation. Worked on new HTML page navigation.

02-17-2018 4:50 pm - Added README, updated CSS and HTML for improved accessibility in navigation for screen readers. Working on generating content on both index.HTML (now working) and Form (not working). 

02-17-2018 10:22 pm - Updated README, updated CSS for improved viewing of images. Working on article page functionality (generating preview of article and JSON).


## Credits and Collaborations

* Thanks to my instructors and TAs and my classmates for great questions during the lab workshop.
* The following libraries were used: jQuery,Highlight JS, Handlebars and Railcast.
* I referenced the jQuery cheat sheet: https://oscarotero.com/jquery/
* I used HandleBars library.
* I referenced our text book: Jon Duckett - JavaScript and JQuery.