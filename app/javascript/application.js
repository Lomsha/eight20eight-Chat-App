// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

//= require jquery
//= require semantic-ui
//= require semantic-ui/modal
//= require semantic-ui/dropdown

$(document).on('turbolinks:load', function()  {
$('.ui.dropdown').dropdown();
$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;

})




