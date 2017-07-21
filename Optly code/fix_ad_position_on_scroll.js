// this code requires thefull jQuery installed for the .scrollTop function
$(".sidebar-on > .wrapper").append("<div id='scroller-anchor'></div> <div id=\"right_banner\"><h2>help us reach our goal to plant 10 Million trees.</h2></div>");
$('body').append("<style>#right_banner{ float:right; width: 20%; position: static; right: 8%;}</style>");

$( document ).ready(function() {

  console.log( "ready!" );
  var fixBanner = function() {
    var distFromTop = $(window).scrollTop();
    var topPosition = $("#scroller-anchor").offset().top;
    var banner = $("#right_banner");
    if ( distFromTop > topPosition ) {
      banner.css({position:"fixed",top:"8%"});
    } else {
      if ( distFromTop <= topPosition ) {
        banner.css({position:"static",top:""});
      }
    }
  };
  $(window).on('scroll', fixBanner);
  fixBanner();
});