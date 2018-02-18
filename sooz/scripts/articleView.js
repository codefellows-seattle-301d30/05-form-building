'use strict';

let articleView = {};
let FadeIn_TimeOut = 750;

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
    $(`#${$(this).data('content')}`).fadeIn(FadeIn_TimeOut);
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = () => {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.read-on', function(e) {
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

articleView.initNewArticlePage = () => {
  // DONE: Ensure the main .tab-content area is revealed. We might add more tabs later or otherwise edit the tab navigation.
  $('.tab-content').show();

  // TODO: The new articles we create will be copy/pasted into our source data file.
  // Set up this "export" functionality. We can hide it for now, and show it once we have data to export. 
  $('#export-field').hide();
  $('#article-json').on('focus', function(e){
    $(this).select();
    $('#article-published:checked').length ? ($('article-json').val(JSON.stringify(article) ) ): null
  });

  // TODO: Add an event handler to update the preview and the export field if any inputs change.
  $('#new-form').on('checked : click', '#article-published', function(e){
    ($(this).text() === /^[\w]$/) ?
      $(this).parent().find('articles').fadeIn(FadeIn_TimeOut)
      : $(this).show();
  });
  articleView.handleMainNav();
  articleView.create();
};

// COMMENT: Where is this function called? Why?
// This function is called on the index.HTML page because the one JS file is used by both the index and new pages. By calling it on the index page, it allows the function to be specific to that page.

articleView.create = () => {
  // DONE: Set up a variable to hold the new article we are creating. (see below)

  // Clear out the #articles element, so we can put in the updated preview
  $('#articles').empty();

  // DONE: Instantiate an article based on what's in the form fields:
  let article = new Article({
    title:   $('#article-title').val(),
    category: $('#article-category').val(),
    author:   $('#article-author').val(),
    authorUrl: $('#article-authorUrl').val(),
    publishedOn: $('#article-published:checked').length ? new Date() : null,
    body: $('#article-body').val(),
  })

  // DONE: Use our interface to the Handblebars template to put this new article into the DOM:
  $('#articles').append(article.toHtml());

  // DONE: Activate the highlighting of any code blocks; look at the documentation for hljs to see how to do this by placing a callback function in the .each():
  $('pre code').each(function(i,block){
    hljs.highlightBlock(block);
  });

  // DONE: Show our export field, and export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
  let articleExport = JSON.stringify('article', article);
  $('#article-published:checked').length ? $('#article-json').html(articleExport) : null

};

// COMMENT: Where is this function called? Why?
// PUT YOUR RESPONSE HERE

articleView.initIndexPage = () => {
  articles.forEach(article => $('#articles').append(article.toHtml()));
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};