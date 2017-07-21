var OptiCurrentURL = window.location.href;
var OptiQueries = OptiCurrentURL.split('?')[1];
OptiQueries=OptiQueries.split('&');
var OptiBucket;
for (var i = 0; i < OptiQueries.length ; i ++) { 
     if (OptiQueries[i].search(/ppc=(sixt|brand)/) || !!document.cookie.match(/(R|r)eferer=(sixt|brand).*/) ) {
        OptiBucket = true;
        i= OptiQueries.length;
     }

}
if (OptiBucket) {
  console.log('OptiBucket = ' +OptiBucket); 
  window['optimizely'].push(["bucketVisitor", 594474705, 590774486]);
}
else if (!OptiBucket) {
  console.log('OptiBucketFAILED = ' +OptiBucket); 
  window['optimizely'].push(["bucketVisitor", 594011926, 594601390]);
}