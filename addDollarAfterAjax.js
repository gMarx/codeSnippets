// add `$` to each element
var prices = document.getElementsByClassName('price');
for ( var i = 0; i < prices.length; i++) { prices[i].update('$' + prices[i].innerHTML ) };

// cart page

var intervals = [];
function checkByInterval() {
  intervals.push( window.setInterval(checkDollar, 200) );
}
function checkDollar() {
  var prices = document.getElementsByClassName('price');
  for ( var i = 0; i < prices.length; i++) {
    if (prices[i].innerHTML.indexOf('$') == -1) {
      prices[i].update('$' + prices[i].innerHTML );
    }
    if (prices[prices.length - 1].innerHTML.indexOf('$') == 0 ) {
      for ( var j = 0; j < intervals.length; j++) {
        clearInterval(intervals[j]);
      }      
    }
  }
}

(function() {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        this.addEventListener('load', function() {
            checkByInterval();
        });
        origOpen.apply(this, arguments);
    };
})();