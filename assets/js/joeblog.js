/*!
=========================================================
* JoeBlog Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

// Confetti


var canvas3Settings = {
    target: 'my-canvas',
    max: 100,
    animate: true,
    props: ['circle',"square","triangle","line"],
    colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
    clock: 15
  };
var canvas = new ConfettiGenerator(canvas3Settings);
var canvasz = document.getElementById('my-canvas')


var confettiSettings = { target: 'my-canvas' };
        const startit = () => {
    setTimeout(function () {
      console.log("start");
      canvas.render();

    }, 50);
  };

  const stopit = () => {
    setTimeout(function () {
      console.log("stop");
      canvas.clear();
    }, 6000);
    canvasz.style.zIndex = "-1";
  };


  startit();
  stopit();