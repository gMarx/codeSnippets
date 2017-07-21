// grabs # elements in cart
var cartSize = parseInt(jQuery('body > div.wrapper > div.page > div.main-container.active > div.col1-layout > div > div > div.col-main.sixteen.columns.clearfix > div > div.left-wrap > div > p > span')[0].innerText.split('(')[1]);

setup custom goals

1_item
2_item
3_item
4_item
5_item
6_item
7_item
8_item
9_item
10_or_more_items

// optly variation code - custom event goal for cart size
// only on cart page
if ( !!window.location.pathname.match('checkout/cart') ) {
  var cartSize = parseInt(window.jQuery(".cart-header > p > span:eq(0)")[0].innerText.split('(')[1].split(' ')[0]);
  var event;

  if ( !!cartSize && cartSize < 10 ) {
    // event = add cartSize.to_string + '_item'
    event = cartSize + "_item";
  }  else if ( !!cartSize && cartSize >= 10 ) {
      event = "10_or_more_items";
  }

  window.optimizely = window.optimizely || [];
  window.optimizely.push([ "trackEvent" , event ]);
}