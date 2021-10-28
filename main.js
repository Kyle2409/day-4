$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})
$(function(){
    var link = $("nav a");
   //click handler
    link.on("click" , function(){
      var $this = $(this);
      var page = $this.data("page");
                    
      $("body").removeClass().addClass(page);
      link.removeClass("active");
      $this.addClass("active");
    })
  });
  

  