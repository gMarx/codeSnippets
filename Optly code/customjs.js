var name = 'pageviewCount';
var popup = 'popup';
// check for cookie with name
if ( !!document.cookie.match( name ) ) {
// if cookie, check value.
  var cookieValue = Number( getCookieValue( name ) );
  if ( !!cookieValue && cookieValue == 2 ) {
//     If == 2, delete the 'popup' cookie & add 1 to the value
    setCookie( name, cookieValue + 1 );
    deleteCookie( popup );
  } else if ( !!cookieValue ) {
//     if < 3 add 1 to the value
//     else ( if > 3 ) add 1 to the value
    setCookie( name, cookieValue + 1 );
  }
} else {
// if no cookie,
//     set one with value = 1

  setCookie( name, 1 );
}



//   needs:
//     - setCookie
//     - getCookieValue
//     - getCookieValueAsNumber
//     - updateCookieValue
//     - deleteCookie


var name = 'pageviewCount';
var popup = 'popup';

if ( !!document.cookie.match( name ) ) {
  var cookieValue = Number( getCookieValue( name ) );
  if ( !!cookieValue && cookieValue == 2 ) {
    setCookie( name, cookieValue + 1 );
    deleteCookie( popup );
  } else if ( !!cookieValue ) {
    setCookie( name, cookieValue + 1 );
  }
} else {
  setCookie( name, 1 );
}


// Add to experiment JS
getCookieValue
setCookie
deleteCookie

document.cookie = 'popup=true; Path=/; Domain=.www.tentree.com; Expires=Sun Dec 29 2019 02:05:09 GMT;';