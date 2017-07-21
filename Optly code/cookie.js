// optly execute JS immediately

/* _optimizely_evaluate=force */
// code here
/* _optimizely_evaluate=safe */

//get a Cookie's value

window.getCookie = function(name) {
  match = document.cookie.match(new RegExp(name + '=([^;]+)'));
  if (match) return match[1];
}

var name = 'popup';
getCookie(name);

// to analyze a value as a number
Number( getCookie(name) );

// Delete a Cookie
// note Domain is specified
window.deleteCookie = function(name) {
    document.cookie = name +'=; Path=/; Domain=.www.tentree.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
var name = 'popup';
deleteCookie(name);

deleteCookie('popup');

// set a cookie
window.setCookie = function(name, value) {
  document.cookie = name + '=' + value + '; Path=/; Expires=Sun Dec 29 2019 02:05:09 GMT;'
};
setCookie( 'pageviewCount', 1 )



// test cookie
document.cookie = 'test=true; Path=/; Expires=Sun Dec 29 2019 02:05:09 GMT;'