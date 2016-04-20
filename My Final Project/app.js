
// $(function() {
  // var headerHeight = $('header').height();
  // $('a[href*="#"]:not([href="#"])').click(function() {
    // if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      // var target = $(this.hash);
      // target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      // if (target.length) {
        // $('html, body').animate({
          // scrollTop: target.offset().top - headerHeight
        // }, 1000);
        // return false;
      // }
    // }
  // });
// });

console.clear();

$('nav li a').click(function(){
  var headerHeight = $('header').height();

  var a = $(this).attr('href')

  var targetDistance = $(a).offset().top

  console.log(targetDistance);


  $('html, body').animate({
    scrollTop: targetDistance - headerHeight
  }, 1000);



})
