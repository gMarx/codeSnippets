$("body").append("<div id=\"overlay; display: none\"></div>");
$("body").append("<div id=\"lightbox\" class=\"dialog wide\" style=\"z-index: 3000; display: none;\">\n\t<div class=\"closer\"></div>\n\t<div class=\"content panes\">\n\t\t<div class=\"custom-css pane\" style=\"display: block;\">\n\t\t\t<div class=\"header\">\n\t\t\t\t<h1>Sample Lightbox</h1>\n\t\t\t</div>\n\t\t\t<div class=\"content-body\" style=\"max-height: 634px;\">\n\t\t\t<center><img src=\"//cdn.optimizely.com/img/69234495/c5026e72bbf84890994b2323633061ad.png\"></center>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>");
$("div.closer").live('click', function(){$("#lightbox").css({"display":"none", "visibility":""});
    $("#overlay").css({"display":"none", "visibility":""});});
$("center > img").attr({"src":"//cdn.optimizely.com/img/404692387/e8bd170452f44b7b98646dc64c0f3647.jpg"});
$(".header").css({"display":"none", "visibility":""});
$(".content-body, #lightbox, .custom-css, .content").css({"width":700});
$("center > img").wrap("<a href=\"https://www.therealreal.com/consignments\"></a>");







var cookieName = "optiModal";
var cookieValue = "" | cookieValue + 1;
var cookieLife = "90";
var cookieDomain ="";

//push in global JS
function setCookie(c_name,value,exdays,c_domain) {
    c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
}



window.myInterval = setInterval(function() {
  if (document.cookie.search("optiModal=12") === -1) {
  	setCookie(cookieName, cookieValue, cookieLife, cookieDomain);
  	cookieValue++;
  }
  else {
    $("#lightbox").css({"display":"block", "visibility":""});
    $("#overlay").css({"display":"block", "visibility":""});
    $("div.closer").live('click', function(){$("#lightbox").css({"display":"none", "visibility":""});
    $("#overlay").css({"display":"none", "visibility":""});});

    
  	clearInterval(window.myInterval);
  }
}, 10000);


  

  //only show once
  //run across website for logged-in users
  // target a log-in cookie to avoid double modals (login & consignment)
//  ---need cookie name/value -- I think it's 'SLUpsellShown=true'
  
  // target AWAY from the consignment URL
  
  
  //show after 2 mins ofter logging in
  // update cookie every 10 seconds
  // at value of 2 mins (12 on the cookie), show the popup
  // then, target user out of the experiment if the cookie has a value of 12 or 13 (should never get to 13)
//ready to test

---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

var cookieName = "optiModal";
var cookieValue = "" | cookieValue + 1;
var cookieLife = "90";
var cookieDomain ="";

//push in global JS
function setCookie(c_name,value,exdays,c_domain) {
    c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
}



window.myInterval = setInterval(function() {
  if (document.cookie.search("optiModal=12") === -1) {
  	setCookie(cookieName, cookieValue, cookieLife, cookieDomain);
  	cookieValue++;
  }
  else {
  	//show modal
  	clearInterval(window.myInterval);
  }
}, 10000);





need condition to check for & show optiModal