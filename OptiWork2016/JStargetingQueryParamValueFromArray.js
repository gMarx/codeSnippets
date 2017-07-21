//build an array with all of your PIDS, here's a shortened one:

var optiPIDS = [12579632,12579661,12579656];

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var pid = Number(getParameterByName('productId'));

if(optiPIDS.indexOf(pid) > -1) {
  false;
}

else if(document.location.href.search("productId=")>0) {
  true;
}

else {false;
}