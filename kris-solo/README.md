# Kilovolt Blog

**Author**: Kris Sakarias
**Version**: 1.0.4

## Overview
This blog now supports the ability to add articles via a form on new.html. The form accepts inputs for different parts of the new article and creates a copyable json string of data to add to the index page.

## Getting Started
Knowledge of jQuery and javascript objects is required.

## Architecture
Improvements include using jQuery and Handlebars to allow the addition of new blog entries that can be appended to the other articles.

## Change Log
5:00 - completed form for new article
5:30 - use handlebars template to display a new article that is created as a new object when a new article is submitted.
6:00 - delegate change event to input values of the form to update the new article draft below the form.
6:30 - append stringified javascript object of form data to be copied and included as another blog entry.
