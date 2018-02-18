# Kilovolt Blog

**Author**: Jennifer Williams Piper
**Version**: 1.0.0

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->

This is a fun website containing a blog with content that is appealing to the user,and easy to use, to entice the user to come back regularly. It should also ensure that the user has a similar experience on desktop and mobile devices, and allows the user to filter articles by author or category.
The user can add new blog articles by filling out a form. The app converts the content to JSON, and the user can cut and paste the JSON into blogArticles.js to create a new article.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
* Get starter code from this repo: https://github.com/codefellows-seattle-301d30/05-form-building

* Update new.html and articleView.js to display form allowing creating of a new blog article using a duplicate of the same Handlebars template used in index.html.


## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
Uses HTML, CSS, JavaScript (ES6), jQuery, Markdown.
Uses Handlebars library to dynamically render templates.

Blog articles are stored as objects in the rawData array. They are appended to the DOM using jQuery traversal and setter methods in article.js.  Each article displays author, title, link to author page, time since publication, and blog entry. articleView.js contains code to populate author and category filters, and show or hide appropriate articles depending on user input.

## Change Log
2018-02-16 5:00pm  add code from class demo
2018-02-17 4:30pm  add code for all required TODOs
2018-02-18 11:20am  Answer remaining questions, clean up code, add and update README.md.

## Credits and Collaborations

* Starter code from: https://github.com/codefellows-seattle-301d30/05-form-building
* Handlebars CDN from https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js
* Many TODOs completed by following Allie Grampa's class demo on 2018-02-16.