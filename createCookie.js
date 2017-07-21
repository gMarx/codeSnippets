// code by GMarx
//
// purpose - to set cookies in Optimizely and iterate value of cookies
// as a counter
// cookies are created as session level, and will expire upon closing of the tab
// if desired, the cookies can be set for longer. I recommend no more than 30 days

/* _optimizely_evaluate=force */
// creates a session cookie
window.createCookie = function(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
  console.log( name + '=' + value + " cookie added");
};
/* _optimizely_evaluate=safe */

/* _optimizely_evaluate=force */
window.createCookie('tt_popup','1');
/* _optimizely_evaluate=safe */


window.increaseVisitCount = function(cookieName) {
  var hasPreviousVisit = !!document.cookie.match(new RegExp(cookieName + '=([^;]+)'));

  if (hasPreviousVisit) {
    newCookieValue = parseInt( getOldCookieValue(cookieName) ) + 1;
    window.createCookie(cookieName, newCookieValue);
  } else {
    window.createCookie(cookieName, '1');
  }
};

window.getOldCookieValue = function(cookieName) {
  var cookies = document.cookie.split('; ');

  var c = cookies.filter( function(cookie) {
    if(!cookie.indexOf(cookieName + '=')) return cookie;
  });
  return c[0].split('=')[1];
};

var cookieName = 'pages_viewed';
window.increaseVisitCount( cookieName );

trackPageViewCount = function(){
  var pageViewCount = window.getOldCookieValue( cookieName );
  window['optimizely'] = window['optimizely'] || [];
  optimizely.push(['trackEvent', pageViewCount + '_pages']);
};
trackPageViewCount();