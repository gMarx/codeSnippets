// +++++++++++++++++++++++++++++++++
// final code start
// +++++++++++++++++++++++++++++++++

window.addEventListener('keydown', closePopUp);

function closePopUp(e) {
  if(e.keyCode == 27) {
    var opened = document.querySelector('.state-opened')
    opened.classList.remove('state-opened');
  }
}

// +++++++++++++++++++++++++++++++++
// notes
// 27 is the keycode for pressing the escape button
// the class 'state-opened' was something Northern had added onto each impact piece. 
// Northern Development agency appears to be using a plugin called 'slick' to make the impact pieces expand & work https://kenwheeler.github.io/slick/
// This is a hack. 

// +++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++
// final code end
// +++++++++++++++++++++++++++++++++



// +++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++
// model code


function playSound ( event ) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event,keyCode}"]`);
  if( !audio ) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if( e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

// +++++++++++++++++
// +++++++++++++++++
// +++++++++++++++++
// Let's write a function to simply listen for the 'esc' keypress & signal this with console.log

window.addEventListener('keydown', closePopUp);

function closePopUp(e) {
  if(e.keyCode == 27) {
    // console.log('Esc pressed');
    // insert code here to minimize or hide a div
    // 1 find div with class 'state-opened'
    var opened = document.querySelector('.state-opened')
    // 2 remove class 'state-opened'
    opened.classList.remove('state-opened');
  }
}
