 push 
UTM_FamSegTest = 1 into Variation 1, and UTM_FamSegTest = 2 into 
variation 2.




if(document.location.href.search("UTM_FamSegTest=1") > 0) {
   //bucketvisitor into original
window['optimizely'].push(["bucketVisitor", 1577453688, 1571843467]);
  true;
}

else if(document.location.href.search("UTM_FamSegTest=2")>0) {
   //bucketvisitor into variation 1
window['optimizely'].push(["bucketVisitor", 1577453688, 1569843821]);
  true;
}

else {false;
}