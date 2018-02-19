'use strict';

let articleView = {};

articleView.populateFilters = () => {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      let val = $(this).find('address a').text();
      let optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = () => {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = () => {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = () => {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = () => {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if ($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
  });
};

// COMMENT: Where is this function called? Why?
// This function is called at the bottom on new.html after the script files are linked to make the page handle any input that gets entered
articleView.initNewArticlePage = () => {
  // REVIEW/TO (stretch): Ensure the main .tab-content area is revealed. We might add more tabs later or otherwise edit the tab navigation.
  $('.tab-content').show();

  // DONE: The new articles we create will be copy/pasted into our source data file.
  // Set up this "export" functionality. We can hide it for now, and show it once we have data to export.
  $('#export-field').hide();
  // enable highlight entire field on single click
  $('#article-json').on('focus', function(){
    this.select();
  });

  // DONE: Add an event handler to update the preview and the export field if any inputs change.
  $('#new-form').on('change', 'input, textarea', articleView.create);
};

articleView.create = () => {
  // DONE: Set up a variable to hold the new article we are creating. (Note, don't need to define it separately)
  // let article;

  // Clear out the #articles element, so we can put in the updated preview
  $('#articles').empty();

  // DONE: Instantiate an article based on what's in the form fields:
  let article = new Article({
    title: $('#article-title').val(),
    author: $('#article-author').val(),
    authorUrl: $('#article-authorUrl').val(),
    category: $('#article-category').val(),
    body: $('#article-body').val(),
    publishedOn: $('#article-published:checked').length ? new Date() : null,
  })

  // DONE: Use our interface to the Handblebars template to put this new article into the DOM:
  $('#articles').append(article.toHtml());

  // REVIEW (stretch): Activate the highlighting of any code blocks; look at the documentation for hljs to see how to do this by placing a callback function in the .each():
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  // DONE: Show our export field, and export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
  $('#article-json').val(JSON.stringify(article));
  $('#export-field').show();
};

// COMMENT: Where is this function called? Why?
// This method is being called at the bottom of index.html after linking all the script files. It replaces $('document').ready() and runs all the methods to populate the content of index.html. We wrapped all the above methods into one function so we can just call the one function to run them all instead of having to invoke each one individually.
articleView.initIndexPage = () => {
  articles.forEach(article => $('#articles').append(article.toHtml()));
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};
