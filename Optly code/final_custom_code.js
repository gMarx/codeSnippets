// ------------------
// old variation code
// ------------------
var name = 'pageViews';
var popup = 'popup';
var pageViewCount = Number( window.getCookieValue( name ) );

if ( !window.document.cookie.match( name ) ) {
  window.document.cookie = popup +'=true; Path=/; Domain=.www.tentree.com; Expires=Sun Dec 29 2019 02:05:09 GMT;';
  $(".login-overlay").css({"display":"none", "visibility":""});
  $('.close').click();
  window.document.cookie = name + '=1; Path=/; Domain=.www.tentree.com; Expires=Sun Dec 29 2019 02:05:09 GMT;';
} else if ( !!pageViewCount && pageViewCount == 1 ) {
  // this is 1 b/c of timing. when page loads for 2nd visit, the value is 1. We read that, then iterate the count to 2 in this code where the popup cookie is removed allowing the next visit to show the splash page

  pageViewCount = pageViewCount + 1;
  window.document.cookie = name + '=' + pageViewCount + '; Path=/; Domain=.www.tentree.com; Expires=Sun Dec 29 2019 02:05:09 GMT;';
  window.deleteCookie( popup );

} else if ( !!pageViewCount ) {
  pageViewCount = pageViewCount + 1;
  window.document.cookie = name + '=' + pageViewCount + '; Path=/; Domain=.www.tentree.com; Expires=Sun Dec 29 2019 02:05:09 GMT;';
}


//track custom event for 3rd pageView
var pageViewCount = Number( window.getCookieValue( name ) );
if ( !!pageViewCount && pageViewCount == 3 ) {
  window.optimizely.push(["trackEvent", "3_pages"]);
}

// ------------------
// other variation cookie code
// ------------------

var name = 'pageViews';
var popup = 'popup';
var pageViewCount = Number( window.getCookieValue( name ) );

if ( !window.document.cookie.match( name ) ) {
  window.document.cookie = name + '=1; Path=/; Domain=.www.tentree.com; Expires=Sun Dec 29 2019 02:05:09 GMT;';
} else {
  pageViewCount = pageViewCount + 1;
  window.document.cookie = name + '=' + pageViewCount + '; Path=/; Domain=.www.tentree.com; Expires=Sun Dec 29 2019 02:05:09 GMT;';

  //track custom event for 3rd pageView
  if ( !!pageViewCount && pageViewCount == 3 ) {
    window.optimizely.push(["trackEvent", "3_pages"]);
  }
}




// the below has timing issues with setting of popup cookie & display of the splash screen. not using this for those reasons (inconsistent performance per device & internet speed)
// ------------------
// new experiment JS
// ------------------

var name = 'pageViews';

//if first pageview & no cookie has been set, set the pageViewCookie
// else, iterate pageViewCount up 1

if ( !window.document.cookie.match( name ) ) {
  window.document.cookie = name + '=' + '1; Path=/; Domain=.www.tentree.com; Expires=Sun Dec 29 2019 02:05:09 GMT;';
} else {
  var pageViewCount = Number( window.getCookieValue( name ) );
  pageViewCount = pageViewCount + 1;
  window.document.cookie = name + '=' + pageViewCount + '; Path=/; Domain=.www.tentree.com; Expires=Sun Dec 29 2019 02:05:09 GMT;';
}

//track custom event for 3rd pageView
if ( !!pageViewCount && pageViewCount == 3 ) {
  window.optimizely.push(["trackEvent", "3_pages"]);
}




// ------------------
// new variation code
// ------------------
// var name = 'pageViews';
// var popup = 'popup';
// var pageViewCount = Number( window.getCookieValue( name ) );

// if ( !window.document.cookie.match( name ) || pageViewCount == 1 ) {
//   window.document.cookie = popup +'=true; Path=/; Domain=.www.tentree.com; Expires=Sun Dec 29 2019 02:05:09 GMT;';
//   $(".login-overlay").css({"display":"none", "visibility":""});
//   $('.close').click();
// } else if ( !!pageViewCount && pageViewCount == 2 ) {
//     window.deleteCookie( popup );
// }

var name = 'pageViews';
var popup = 'popup';
var pageViewCount = Number( window.getCookieValue( name ) );

if ( !window.document.cookie.match( name ) || pageViewCount == 1 ) {
  window.document.cookie = popup +'=true; Path=/; Domain=.www.tentree.com; Expires=Sun Dec 29 2019 02:05:09 GMT;';
  $(".login-overlay").css({"display":"none", "visibility":""});
  $('.close').click();
  window.console.log('pageViewCount == ' + pageViewCount + ' & closed popup');
} else if ( !!pageViewCount && pageViewCount == 3 ) {
  window.deleteCookie( popup );
  window.console.log('pageViewCount == ' + pageViewCount + ', popup cookie deleted');
} else {
  $(".login-overlay").css({"display":"none", "visibility":""});
  $('.close').click();
  window.console.log('simply closed popup. pageViewCount == ' + pageViewCount);
}