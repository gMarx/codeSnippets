ga('send', 'event', 'Clicks', 'Logo', 'First Screen');
ga('send', 'event', 'Clicks', 'click', 'size');

// in anchor tag add:
onClick="ga(‘send’, ‘event’, ‘Color Selection’, ‘Click’, ‘color’);"

// update to add quotes on 'label'
// cart.liquid ( under snippets)
onClick="ga(‘send’, ‘event’, ‘Begin Checkout’, ‘Click’, 'checkout');"
// cart.liquid ( under snippets)
onClick="ga(‘send’, ‘event’, ‘Continue Shopping’, ‘Click’, 'shop');"
// GB-min.js
onClick="ga(‘send’, ‘event’, ’Size Selection’, ‘Click’, ’size’);"


// general format
onClick="ga(‘send’, ‘event’, ‘category’, ‘action’, ‘label’, value, {‘NonInteraction’: 1});"

event: "event", 
category: 'Color Selection',
action: 'Click', 
label: 'color', 

event: "event", 
category: 'Begin Checkout',
action: 'Click', 
label: 'checkout', 

event: "event", 
category: 'Continue Shopping',
action: 'Click', 
label: 'shop', 