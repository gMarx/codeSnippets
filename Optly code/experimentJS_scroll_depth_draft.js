// get page's entire height
document.body.clientHeight

// or function to grab the max

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

// track position on view - detect amount scrolled upon scroll
var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

// add the size of the page to this to get the 'bottom'
//
//
// ++++++++++++++++++++++++++++++++++++++++++++++++


// var output = document.getElementById('output')

// track scroll depth on pages
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

var winheight, docheight, trackLength, throttlescroll

function getmeasurements(){
  winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
  docheight = getDocHeight()
  trackLength = docheight - winheight
}

function amountscrolled(){
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  // console.log(pctScrolled + '% scrolled');

  // fire custom event to measure scroll depth by percentages of 25, 50, 75, 100
  window.optimizely = window.optimizely || [];

  if ( !!pctScrolled && 25 <= pctScrolled < 50 ){
    window.optimizely.push(["trackEvent", "25_percent_viewed"]);
  } else if ( !!pctScrolled && 50 <= pctScrolled < 75 ) {
    window.optimizely.push(["trackEvent", "50_percent_viewed"]);
  } else if ( !!pctScrolled && 75 <= pctScrolled < 95 ) {
    window.optimizely.push(["trackEvent", "75_percent_viewed"]);
  } else if ( !!pctScrolled && pctScrolled >= 95 ){
    window.optimizely.push(["trackEvent", "100_percent_viewed"]);
  }
}

getmeasurements()

window.addEventListener("resize", function(){
  getmeasurements()
}, false)

window.addEventListener("scroll", function(){
  clearTimeout(throttlescroll)
    throttlescroll = setTimeout(function(){ // throttle code inside scroll to once every 50 milliseconds
    amountscrolled()
  }, 50)
}, false)

// ++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++








// track scroll depth on pages
window.getDocumentHeight = function() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
};

var windowHeight, documentHeight, trackLength, throttleScroll;

window.getMeasurements = function(){
  windowHeight= window.innerHeight || (document.documentElement || document.body).clientHeight;
  documentHeight = getDocumentHeight();
  trackLength = documentHeight - windowHeight;
};

window.amountScrolled = function(){
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var pctScrolled = Math.floor(scrollTop/trackLength * 100); // get percentage scrolled (ie: 80 or NaN if tracklength == 0)

  // fire custom event to measure scroll depth by percentages of 25, 50, 75, 100
  window.optimizely = window.optimizely || [];
  console.log('pctScrolled = ' + pctScrolled)
  console.log(!!pctScrolled && 25 <= pctScrolled < 50 );

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

window.getMeasurements();

window.addEventListener("resize", function(){
  getMeasurements();
}, false);

window.addEventListener("scroll", function(){
  clearTimeout(throttleScroll);
    throttleScroll = setTimeout(function(){ // throttle code inside scroll to once every 50 milliseconds
    amountScrolled();
  }, 50);
}, false);
// +++++++++++++++++++++
// +++++++++++++++++++++