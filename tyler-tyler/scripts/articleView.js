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

// comment: Where is this function called? Why?
// It's called at the end of the body tag in new.html so that we can create the necessary elements on that page that we are setting up here in Javascript.
articleView.initNewArticlePage = () => {
  console.log('articleView.initNewArticlePage');
  // todo: Ensure the main .tab-content area is revealed. We might add more tabs later or otherwise edit the tab navigation.
  $('.tab-content').show();

  // todo: The new articles we create will be copy/pasted into our source data file.
  // Set up this "export" functionality. We can hide it for now, and show it once we have data to export.
  $('export-field').hide();

  $('#export-field input').on('focus', function(){
    this.select();
  });

  // todo: Add an event handler to update the preview and the export field if any inputs change.
  // $('#new-form').on(event (i think change or change of focus, maybe just focus), optionaldelegation, articleView.create());
  // articleView.create();
  $('#new-form').on('change', 'input', articleView.create);
};

articleView.create = () => {
  // todo: Set up a variable to hold the new article we are creating.
  // let article;

  // Clear out the #articles element, so we can put in the updated preview
  $('#articles').empty();

  // todo: Instantiate an article based on what's in the form fields:
  let article = new Article({
    title: $('#article-title').val(),
    author: $('#article-author').val(),
    body: $('#article-body').val(),
    category: $('#article-category').val(),
    authorUrl: $('#article-authorUrl').val(),
    publishedOn: $('#article-published:checked').length ? new Date() : null,
  });

  // todo: Use our interface to the Handblebars template to put this new article into the DOM:
  $('#articles').append(article.toHtml());

  // todo: Activate the highlighting of any code blocks; look at the documentation for hljs to see how to do this by placing a callback function in the .each():
  $('pre code').each(function(i, block){
    hljs.highlightBlock(block);
  });

  // todo: Show our export field, and export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
  // console.log(article);
  // console.log(JSON.stringify(article));
  // console.log(JSON.parse(article));
  $('#export-field input').val(JSON.stringify(article)+ ',');
  // $('#article-json').val('test string');
  // fill something in here to make this a setter. think about what we know about JSON to do this

};

// comment: Where is this function called? Why?
// this function is called at the end of the HTML after calling the JS files in the body. We put it in a script tag at the end of the body tag so that we can invoke it's blog building powers!
articleView.initIndexPage = () => {
  articles.forEach(article => $('#articles').append(article.toHtml()));
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};