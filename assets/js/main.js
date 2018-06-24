

// SMOOTH SCROLL ON A TAG CLICK
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

// SCROLL REVEAL
window.sr = ScrollReveal({ reset: false });

// Customizing a reveal set
sr.reveal('.cyl', { duration: 500, scale: .3, delay: 500});
sr.reveal('.cyl-no-delay', { duration: 500, scale: .3});

sr.reveal('.scroll-left', { duration: 1000, origin: 'left', distance: '500px', scale: .5});
sr.reveal('.scroll-left-delay', { duration: 1000, origin: 'left', distance: '500px', scale: .5, delay:500});

sr.reveal('.scroll-left-3', { duration: 1000, origin: 'left', distance: '500px', scale: .5, delay:800});

sr.reveal('.scroll-left-2', { duration: 1000, origin: 'left', distance: '500px', scale: .5, delay:600});

sr.reveal('.scroll-left-1', { duration: 1000, origin: 'left', distance: '500px', scale: .5, delay:400});

sr.reveal('.scroll-bottom', { duration: 500, origin: 'bottom', distance: '50px', scale: .8});
sr.reveal('.scroll-right', { duration: 1000, origin: 'right', distance: '500px', scale: .5});
sr.reveal('.scroll-right-delay', { duration: 1000, origin: 'right', distance: '500px', scale: .5, delay:500});

sr.reveal('.scroll-right-bird', { duration: 1500, origin: 'right', distance: '500px', scale: .5});

// CAROUSEL
// $('.carousel').carousel({
//     interval: 1000
//   });
$('.project-footer').on('click', function(){
    console.log('hi');
})