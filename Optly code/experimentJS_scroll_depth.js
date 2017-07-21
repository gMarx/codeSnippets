// this code works in the experiment JS
// track scroll depth on pages
window.getDocumentHeight = function() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
};

//window.windowHeight = 0;
//window.documentHeight = 0;
//window.trackLength = 0;
var throttleScroll;

window.getMeasurements = function(){
  window.windowHeight= window.innerHeight || (document.documentElement || document.body).clientHeight;
  window.documentHeight = getDocumentHeight();
  window.trackLength = documentHeight - windowHeight;
};

window.amountScrolled = function(){
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var pctScrolled = Math.floor(scrollTop/trackLength * 100); // get percentage scrolled (ie: 80 or NaN if tracklength == 0)

  // fire custom event to measure scroll depth by percentages of 25, 50, 75, 100
  window.optimizely = window.optimizely || [];

  if ( !!pctScrolled && 25 <= pctScrolled && pctScrolled < 50 ){
    window.optimizely.push(["trackEvent", "25_percent_viewed"]);
  } else if ( !!pctScrolled && 50 <= pctScrolled && pctScrolled < 75 ) {
    window.optimizely.push(["trackEvent", "50_percent_viewed"]);
  } else if ( !!pctScrolled && 75 <= pctScrolled && pctScrolled < 95 ) {
    window.optimizely.push(["trackEvent", "75_percent_viewed"]);
  } else if ( !!pctScrolled && pctScrolled && pctScrolled >= 95 ){
    window.optimizely.push(["trackEvent", "100_percent_viewed"]);
  }
};

getMeasurements();

(function(){
  window.getMeasurements();

  window.document.addEventListener("resize", function(){
    getMeasurements();
  }, false);

  window.document.addEventListener("scroll", function(){
    if( !!throttleScroll){
      clearTimeout(throttleScroll);
    }
      throttleScroll = setTimeout(function(){ // throttle code inside scroll to once every 50 milliseconds
      amountScrolled();
    }, 50);
  }, false);
})();
// +++++++++++++++++++++
// +++++++++++++++++++++