$(document).ready(function(){

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        // document.getElementById("hey").style.top = "0";
        $('#hey').css('top','0');
      } else {
        // document.getElementById("hey").style.top = "-60px";
        $('#hey').css('top','-60px');

      }
      prevScrollpos = currentScrollPos;
    }

    window.sr = ScrollReveal({ reset: false });

    // Customizing a reveal set
    sr.reveal('.cyl', { duration: 1000, scale: .3});
    sr.reveal('.scroll-left', { duration: 1000, origin: 'left', distance: '500px', scale: .5});
    sr.reveal('.scroll-bottom', { duration: 500, origin: 'bottom', distance: '50px', scale: .8});
    // sr.reveal('.scroll-right', { duration: 1000, origin: 'right', distance: '500px', scale: .5});
    sr.reveal('.scroll-right-bird', { duration: 1500, origin: 'right', distance: '500px', scale: .5});

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
    });

    new Vivus('react', {duration: 200}, myCallback);

    $('.carousel').carousel({
      interval: 2000
    });

    $('[data-toggle="tooltip"]').tooltip();
    // $('.carousel').carousel('cycle');

    $('#seemore').hover(function(){
      $('#arr').addClass('arrow-icon');
      console.log('hi');
    }, function(){
      $('#arr').removeClass('arrow-icon');
    });
});