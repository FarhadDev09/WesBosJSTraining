function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`); //I use e.key instead of e.keyCode because keyCode is deprecated
  if (!audio) return; //stop the function from running all together

  audio.currentTime = 0; //rewind to the start
  audio.play();

  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);