// rotate selection of materials display

// ToDo
// add function where a user's click will call window.clearInterval( rotateActive )
//   && start a timer of 1 minute ( or less ) to restart window.rotateActive
//
// add tracking

var ecobox = document.getElementsByClassName('eco-box');
var ecoboxInfo = document.getElementsByClassName('eco-box-informaiton');

if ( ecobox.length == 1 && ecoboxInfo.length == 1 ) {
  console.log('1 of each');
  var materialButtons = ecobox[0].children;
  var materialDescriptions = ecoboxInfo[0].children;
  var ecoboxIds = [];
  var ecoboxDescriptionClasses = [];

  for (var i = 0; i < materialButtons.length; i++) {
    if ( !!materialButtons[i].id && materialButtons[i].id != '' ) ecoboxIds.push( `#${materialButtons[i].id}` );
    if ( !!materialDescriptions[i].className && materialDescriptions[i].className != "info-item active main-item" ) ecoboxDescriptionClasses.push(`.${materialDescriptions[i].className.replace(' ','.')}` );
  }
} else {
    console.log('Something wrong');
}

var position = 2; // starting active selection. Choose 0-5
window.rotateActive = setInterval( changeActive, 9000);

function changeActive() {
  $( ".info-item.active.main-item" ).removeClass('active');

  $( ecoboxDescriptionClasses[position] ).removeClass('active');
  $( ecoboxIds[position] ).removeClass('active');

  position++;
  if ( position >= ecoboxDescriptionClasses.length ) position = 0;

  $( ecoboxDescriptionClasses[position] ).addClass('active');
  $( ecoboxIds[position] ).addClass('active');

  // console.log( ecoboxDescriptionClasses[position] );
}

clearInterval( rotateActive );

// sudo code
// find buttons & store in a variable
// grab id's or classes to traverse elements
// rotate through these elements on a timed basis
// store which element is 'active'
// remove 'active' class from old element and add 'active' class to next element

// onClick of one of the elements, the loop should STOP.
//   10 seconds after the click, the loop should start up again
