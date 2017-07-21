//Please insert the element's selector, do NOT surround with quotes
window.optlySelector = $("#comments");

//Please place the eventName from the custom event you've set up in quotes
window.optlyEventName = "scrollComments"




//---------------------------------
//Don't modify below this line
//---------------------------------

$(document).ready(function() {

  function isScrolledIntoView(elem) {
    var docViewTop = window.$(window).scrollTop();
    var docViewBottom = docViewTop + window.$(window).height();
    var elemTop = window.$(elem).offset().top;
    var elemBottom = elemTop + window.$(elem).height();
     //print out True or False for element in view or not
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  

$(window).bind("scroll",function (event) {
     if (isScrolledIntoView(optlySelector)) {
      window.optimizely = window.optimizely || [];
      window.optimizely.push(["trackEvent", optlyEventName]);

    $(window).unbind(event);
    }
});

});


/*******************************************************************************
/*******************************************************************************

  AUTHOR:

    Kyle Rush, Head of Optimization at Optimizely
    - http://kylerush.net
    - https://github.com/kylerush
    - https://twitter.com/kylerush

  OVERVIEW:

    An Optimizely Project JavaScript snippet that tracks to which quarter of
    the page the visitor scrolled. This is useful for determining which
    variation a user "consumed" more of.

    If the user is on the /pricing page, the custom event goal in Optimizely
    will have these values:

    - "/pricing second quarter viewed"
    - "/pricing third quarter viewed"
    - "/pricing fourth quarter viwed"

  OPTIONS:

    pageID (string)
      You can define a global variable on the window object to identify the page
      rather than relying on window.location.pathname. This is helpful when
      doing redirect experiments that show two different versions of a page.
      When you define window.pageID = '/pricing' in the variation code for each
      variation, even though the actual URLs are different, this script will
      still report /pricing for the conversion goal so that you can compare the
      two pages against each other.

  NOTES:

    - In order for the script to work properly you must either load jQuery
      before the Optimizely snippet or include jQuery in your Optimizely snippet
    - You will setup 3 custom goals total
    - The snippets removes any trailing slaches from the URL
    - The path of the page is included because this is project level JavaScript.
      If the path was not included then the results would be disingenuous since
      scrolling on any page of your website (not just the variation) would
      trigger a "second quarter viewed" conversion
    - Customize the report function to suit your needs - you can enable
      Google Analytics (Universal Analytics) by uncommenting that line

*******************************************************************************/
(function(){



})(window, document);



$(function(){

  var $ = jQuery;

  var secondQuarterViewed, thirdQuarterViewed, fourthQuarterViewed;

  secondQuarterViewed = false;
  thirdQuarterViewed = false;
  fourthQuarterViewed = false;

  determinePosition();

  $(window).scroll(determinePosition);

  function report(quarter){

    var pageID;

    if(window.optimizelyScrollTrackerID){

      pageID = window.optimizelyScrollTrackerID;

    } else {

      if(window.location.pathname === '/'){

        pageID = window.location.pathname;

      } else {

        pageID = window.location.pathname.replace(/\/$/, '');

      }

    }

    if(window.analytics){

      window.analytics.ready(function(){

        window.analytics.track(pageID + ' ' + quarter + ' quarter viewed', {
          category: 'quarter of page viewed'
        },
        {
          integrations: {
            'Marketo': false
          }
        });

      });

    }

  }

  function determinePosition(){

    var quarters = $(document).height() / 4;

    // $('body').css('position', 'relative');
    // $('body').append('<div style="width: 100%; height: 5px; background: red; position: absolute; top: '+quarters*1+'px;"></div>');
    // $('body').append('<div style="width: 100%; height: 5px; background: red; position: absolute; top: '+quarters*2+'px;"></div>');
    // $('body').append('<div style="width: 100%; height: 5px; background: red; position: absolute; top: '+quarters*3+'px;"></div>');

    if(quarters * 1 >= pageYOffset && quarters * 1 <= (pageYOffset + $(window).height() ) ){
      if(!secondQuarterViewed){
        report('second');
        secondQuarterViewed = true;
        //console.log('second quarter viewed');
      }
    }
    if(quarters * 2 >= pageYOffset && quarters * 2 <= (pageYOffset + $(window).height() ) ){
      if(!thirdQuarterViewed){
        report('third');
        thirdQuarterViewed = true;
        //console.log('third quarter viewed');
      }
    }
    if(quarters * 3 >= pageYOffset && quarters * 3 <= (pageYOffset + $(window).height() ) ){
      if(!fourthQuarterViewed){
        report('fourth');
        fourthQuarterViewed = true;
        //console.log('fourth quarter viewed');
      }
    }

  }

});
