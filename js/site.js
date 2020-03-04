// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.getElementById("input-submit").addEventListener("click",function() {
  alert("Submission Reeceived: You are Subscribed!");
});
