/* _optimizely_evaluate=force */
var newText = "Buy 3 Get 1 Free";
var oldText = "Save $40";
var newText1 = "Buy 4 Get 2 Free";
var oldText1 = "Save $80";
var newText2 = "Buy 3 Get 1 Free";
var oldText2 = "Save $180";
var newText3 = "";
var oldText3 = "";
/* _optimizely_evaluate=safe */

$("#ctl00_cBody_ddProducts > option[value='614']").html($("#ctl00_cBody_ddProducts > option[value='614']").html().replace(oldText, newText));


$("#ctl00_cBody_ddProducts > option[value='626']").html($("#ctl00_cBody_ddProducts > option[value='626']").html().replace(oldText1, newText1));
//delete the third option:
$("#ctl00_cBody_ddProducts > option[value='615']").html($("#ctl00_cBody_ddProducts > option[value='615']").html().replace(oldText2, newText2));

//$("#ctl00_cBody_ddProducts > option[value='613']").html($("#ctl00_cBody_ddProducts > option[value='613']").html().replace(oldText, newText));

//if need to force check for timing--
window.myInterval = setInterval(function() {
if ($("#ctl00_cBody_ddProducts").length > 0) {
$("#ctl00_cBody_ddProducts > option[value='614']").html($("#ctl00_cBody_ddProducts > option[value='614']").html().replace(oldText, newText));
clearInterval(window.myInterval);
}
}, 50);

//
$("a.get_this_offer:eq(1)").live("mousedown", function() {
     window.optimizely.push(['trackEvent', 'slider_-_support_created']);
});

$("a.get_this_offer:eq(3)").live("mousedown", function() {
     window.optimizely.push(['trackEvent', '2nd_get_this_offer_-_support_created']);
});
$("a.get_this_offer:eq(5)").live("mousedown", function() {
     window.optimizely.push(['trackEvent', '3rd_get_this_offer_-_support_created']);
});
$("a.get_this_offer:eq(7)").live("mousedown", function() {
     window.optimizely.push(['trackEvent', '4th_get_this_offer_-_support_created']);
});
$("a.get_this_offer:eq(9)").live("mousedown", function() {
     window.optimizely.push(['trackEvent', '5th_get_this_offer_-_support_created']);
});
