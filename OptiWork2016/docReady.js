$(document).ready(function() {
    $(thingToClick).event(function() {
        $(thingToAffect).effect();
    });
});

var object_1 = $('object_1');
//declares object_1 & turns it into a jQuery Object()