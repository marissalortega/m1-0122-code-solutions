var totalCounter = 0;

var hotButton = document.querySelector('.hot-button');

var clickCount = document.querySelector('.click-count');

function numberOfClicks() {
  totalCounter++;
  clickCount.textContent = totalCounter;
  if (totalCounter < 4) {
    hotButton.className = 'hot-button cold';
  } else if (totalCounter >= 4 && totalCounter < 7) {
    hotButton.className = 'hot-button cool';
  } else if (totalCounter >= 7 && totalCounter < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (totalCounter >= 10 && totalCounter < 13) {
    hotButton.className = 'hot-button warm';
  } else if (totalCounter >= 13 && totalCounter < 16) {
    hotButton.className = 'hot-button hot';
  } else if (totalCounter >= 16) {
    hotButton.className = 'hot-button nuclear';
  }
}

hotButton.addEventListener('click', numberOfClicks);
