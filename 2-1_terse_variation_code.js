$(".nav-menu").css({"display":"none", "visibility":""});
$("#topShoppingCart, .logo-right").css({"display":"none", "visibility":""});
$(".treecount-container").css({"display":"none", "visibility":""});
$(".bottom-footer").css({"display":"none", "visibility":""});

// custom event goal for cart size
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

if ( !!window.location.pathname.match('/onestepcheckout') ) {

  $("body").delegate( "#onestepcheckout-place-order", "mousedown", function() {
    window.optimizely = window.optimizely || [];
    window.optimizely.push([ "trackEvent" , "place_my_order_btn" ]);
  });

  $( 'document' ).ready(function() {
    var cart = parseInt(jQuery('div.item > .name')[0].innerText.split('(')[1].split(')')[0]);
    var cartSize = 0;

    if ( !!cart ) {
      jQuery('div.item > .name').each(function(count){
        var num = parseInt(jQuery('div.item > .name')[count].innerText.split('(')[1].split(')')[0]);
        cartSize = cartSize + num;
      });
    }

    if ( cartSize && cartSize < 10 ) {
        // event = add cartSize.to_string + '_item'
        event = cartSize + "_item";
      }  else if ( cartSize && cartSize >= 10 ) {
        event = "10_or_more_items";
      }

    window.optimizely = window.optimizely || [];
    window.optimizely.push([ "trackEvent" , event ]);
  });
}
