function turnOffBulb(event) {
  if (lightbulb.className === 'lightbulb turn-on' && background.className === 'background-on') {
    lightbulb.className = 'lightbulb turn-off';
    background.className = 'background-off';
  } else if (lightbulb.className === 'lightbulb turn-off' && background.className === 'background-off') {
    lightbulb.className = 'lightbulb turn-on';
    background.className = 'background-on';
  }
}

var lightbulb = document.querySelector('.lightbulb');
var background = document.querySelector('body');
lightbulb.addEventListener('click', turnOffBulb);
