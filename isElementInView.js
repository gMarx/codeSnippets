// created by Gary Marx
// scroll depth - track if element is in view

// Insert the element's selector
window.elementSelector = document.getElementsByClassName('eco-box')[0];
window.optlyEventName = "scrollToEcoBox";

//---------------------------------
//Do not modify below this line
//---------------------------------
window.isScrolledIntoView = function(elem) {
  var pageHeight = window.innerHeight;
  var elementPosition = elem.getBoundingClientRect().top;

  return (( elementPosition > 0 ) && ( elementPosition < pageHeight ));
};

window.trackElementView = function() {
  if ( isScrolledIntoView( elementSelector ) ) {
    window.optimizely = window.optimizely || [];
    window.optimizely.push(["trackEvent", optlyEventName]);
    console.log('tracking call sent');
    window.removeEventListener('scroll', trackElementView );
  }
};

window.addEventListener('scroll', trackElementView );