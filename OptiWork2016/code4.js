/*this only runs in the Edit Code section & 
forces html to execute only in the Optimizely editor. AWESOME */
/* _optimizely_evaluate=editor_only */
$("#ember-app").append('<div id="ember481" class="ember-view"><script id="metamorph-0-start" type="text/x-placeholder"></script><script id="metamorph-0-end" type="text/x-placeholder"></script><script id="metamorph-1-start" type="text/x-placeholder"></script><div id="ember642" class="ember-view"><div class="modal" style="width: 340px; margin-left: -170px;">  <script id="metamorph-9-start" type="text/x-placeholder"></script><div id="ember643" class="ember-view"><a href="javascript:;" data-ember-action="9" class="close2"></a><a href="javascript:;" data-ember-action="9" class="close2"></a><div class="modal-body log-in">  <h2><span id="i18n-86">Log In</span></h2>  <script id="metamorph-10-start" type="text/x-placeholder"></script>    <fieldset>      <script id="metamorph-11-start" type="text/x-placeholder"></script><script id="metamorph-11-end" type="text/x-placeholder"></script>      <div class="control-group">        <input id="ember656" class="ember-view ember-text-field email input-xlarge" placeholder="Email" type="text" value="">      </div>      <div class="control-group">        <input id="ember671" class="ember-view ember-text-field password input-xlarge" placeholder="Password" type="password" value="">      </div>    </fieldset>    <button data-ember-action="10" class="btn2"><span id="i18n-87">Log In</span></button>    <a data-ember-action="11" href="javascript:;" class="forgot"><span id="i18n-88">Forgot your password?</span></a>    <div class="no-account">      <span id="i18n-89">Don\'t have an account yet?</span> <a data-ember-action="12" href="javascript:;"><span id="i18n-90">Sign Up</span></a>    </div>    <hr>    <a href="/users/auth/facebook" class="fb login_button">     <div class="logo_wrapper"><span class="logo"></span></div>      <span><span id="i18n-91">Login with Facebook</span></span>    </a>  <script id="metamorph-10-end" type="text/x-placeholder"></script></div>');
/* _optimizely_evaluate=safe */

/* _optimizely_evaluate=editor_only */
//Insert comments here
/* _optimizely_evaluate=safe */


https://fxtrade.oanda.com/your_account/fxtrade/register/individual/beforeyoubegin
http://fxtrade.oanda.com.www02-dev.dev.oanda.com/test2
reg ex:   .*/test2


---
http://staging.web.mcg.demandware.net/on/demandware.store/Sites-jtv-Site/default/Cart-Show
optimizely[groupName]
curExperiment

--
/**
 * CUSTOM TARGETING OF MUTUALLY EXCLUSIVE
 * EXPERIMENTS ON THE SAME OR SEPARATE PAGES
 */
/* [expArray] - Setup array of mutually exclusive experiment ids */
expArray=[254123883, 253935231, 254639660];
/* [curExperiment] - Set the id for the current experiment being evaluated */
curExperiment = 253935231;
/* [groupName] - Optional. Needed if excluding multiple groupings */
groupName = "groupA";
/* [chooseRandom] - Optional. Needed to ensure random distribution 
   of first experiment when expArray is on same page */
chooseRandom = 0; /* 1 - YES  -if no match is found pick at random from expArray
                 0 - NO  - if no match is found, pick this experiment */
logging = 0;  /* 1 - YES   0 - NO */
/*--  Do not modify below this line --*/
/*  Internal comments below:
    Iterate over current bucket mappings and
    set the global variable to the experiment
    the user is already included in.
*/
groupName = groupName || "groupA";
// Safety
groupName = "__" + groupName;
var cookieMatch = document.cookie.match("optimizelyBuckets=([^;]*)");
if(cookieMatch){
    for(var key = 0; key < expArray.length; key++) {
         if (cookieMatch[1].indexOf(expArray[key]) > -1 && window.optimizely.allExperiments[expArray[key]].hasOwnProperty("enabled") && decodeURIComponent(cookieMatch[1]).indexOf('"'+expArray[key]+'":"0"') < 0) {
               optimizely[groupName] = expArray[key];
               break; /* we found what we're looking for so end loop */
         }
    }
}
if(logging){
    if(optimizely[groupName]){
        console.log("Experiment " + optimizely[groupName] + " is active - No others in the array will be distributed.")
    } else{
        console.log("No active experiments. " + curExperiment + " is eligible for distribution.")
    }
}
/* If the global variable hasn't been set, set it now to curExperiment or random choice from expArray 
 * To prioritize a certain experiment over another instead of random choice, change the Math.floor function
 */
optimizely[groupName] = optimizely[groupName] || (chooseRandom ? expArray[Math.floor(Math.random()*expArray.length)] : curExperiment);
/* Check if the current experiment matches the global experiment. Return boolean*/
optimizely[groupName] == curExperiment;
--



<!--//--><![CDATA[//><!--
var _gaq = _gaq || [];_gaq.push(["_setAccount", "UA-35713550-5"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script");ga.type = "text/javascript";ga.async = true;ga.src = "http://www.zact.com/sites/default/files/googleanalytics/ga.js?mp39j9";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ga, s);})();
//--><!]]>

----
http://dealchickenloadqa.dev.gmti.com/comingsoon?optimizely_x260992238=1



---
Hey Jesse,

Happy Friday!

For the Revenue tracking API call, it depends on the structure of your page. Is the value of the purchase passed to the confirmation page?
If so, you can put the Optimizely API call immediately after that value and simply have it run when the variable exists, populate the value & then the revenue would be sent to Optimizely.

Can you check on the confirmation page for the variable and let me know? 
If it's there, can you send me the URL & the variable name? I'll be more than happy to guide you from there.

After the variable is where the below code would be installed, though modified to match your page setup:

bc.. 
window.optimizely = window.optimizely || [];
$("#purchaseBtn").live("mousedown", function() {
     var revenueInCents = $("#totalPrice").val() * 100;
     window.optimizely.push(['trackEvent', 'add_cart_button_clicked', revenueInCents]);
});
p. If you wish to have this tracking call sent from the Purchase page, it could run with the @.live@ event when the purchase/confirmation button is clicked.

--
As for GA, they track with a session based parameter where if you reload the page you'll be counted again. Optimizely passes teh user a cookie and dedupes based on if we've seen the user before -- the cookie has a life of 10 years, so unless the user clears their cookies or users a different browser, we're pretty good at removing their duplicated events. This means Google Analytics will always have more visitors than Optimizely. Both are accurate, but for Unique user events, Optimizely is precise.

Let me know,
Gary
-=--

Hey Ryan,

Glad to hear things are working correctly.

As for the variation displaying, when was this variation paused? I'm looking at the RAW data (attached) and the variation id# for Ad Under Header is 249269812.
The data shows all views of that happened today in the last few hours - were any changes made to the experiment regarding traffic allocation in this time?

Gary	