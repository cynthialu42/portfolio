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

});