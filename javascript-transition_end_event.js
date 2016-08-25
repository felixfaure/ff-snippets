function transitionEndEventName() {
  var i,
      el = document.createElement('div'),
      transitions = {
          'transition':'transitionend',
          'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
          'MozTransition':'transitionend',
          'WebkitTransition':'webkitTransitionEnd'
      };
  for (i in transitions) {
    if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
      return transitions[i];
    }
  }
  return false;
}

function animationEndEventName() {
  var i,
      el = document.createElement('div'),
      animations = {
        'animation':'animationend',
        'OAnimation':'oanimationend',  // oAnimationEnd in very old Opera
        'MozAnimation':'animationend',
        'WebkitAnimation':'webkitAnimationEnd'
      };
  for (i in animations) {
    if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
      return animations[i];
    }
  }
  return false;
}

var transitionEnd = transitionEndEventName();
if( transitionEnd ) element.addEventListener(transitionEnd, theFunctionToInvoke, false);
else theFunctionToInvoke();
