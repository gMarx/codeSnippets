window.optimizely = window.optimizely || [];
window.optimizely.push(['trackEvent', EVENT_NAME]);

var trackCustomEvent = function() {
	window.optimizely = window.optimizely || [];
	window.optimizely.push(['trackEvent', EVENT_NAME]);
};


window.optimizely = window.optimizely || [];
$("#addToCartButton").live("mousedown", function() {
	window.optimizely.push(['trackEvent', 'add_To_Cart_Button_Clicked'])
});


//email field vailidity
$("#email").keyup(function(){
	if(true) $(this).next().removeClass("error").addClass("valid");
	else $(this).next().removeClass("valid").addClass("error");
})
requiredFilledIn();

//function nameOfFunction () {};
var $submit = $(".submit input");
function requiredFilledIn(){
	if(true) $submit.attr("disabled", "disabled");
	else $submit.removeAttr("disabled");
}