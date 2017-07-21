if (subtotal < 15) { show shipping as 7,98}
else if (subtotal > = 15 {show shipping as 5,99}

       $(".subtotal .price font:contains('€'):eq(1)")

------------

var optiSubTotal = $(".subtotal .price:contains('€')").text().replace('€','');
optiSubTotal = optiSubTotal.split(',');
optiSubTotal = optiSubTotal[0] + '.' + optiSubTotal[1];

optiSubTotal = parseFloat(optiSubTotal);

var optiTotal = $(".total .price:contains('€')").text().replace('€','');
optiTotal = optiTotal.split(',');
optiTotal = optiTotal[0] + '.' + optiTotal[1];
optiTotal = parseFloat(optiTotal);


if (optiSubTotal < 15) { 
	$(".additional.last .price").replaceWith('<td class="price">+ 	7,98 €</td>');
	optiTotal = optiTotal +1;
	optiTotal = optiTotal.toFixed(2);
	optiTotal = optiTotal.split('.');
    optiTotal = optiTotal[0] + ',' + optiTotal[1];
	$(".total .price").replaceWith('<td class="price">	' + optiTotal + ' €</td>');

}
else if (optiSubTotal >= 15) {
	$(".additional.last .price").replaceWith('<td class="price">+ 	5,99 €</td>');
	optiTotal = optiTotal + 1;
	optiTotal = optiTotal.toFixed(2);
	optiTotal = optiTotal.split('.');
    optiTotal = optiTotal[0] + ',' + optiTotal[1];
	$(".total .price").replaceWith('<td class="price">	' + optiTotal + ' €</td>');
};

