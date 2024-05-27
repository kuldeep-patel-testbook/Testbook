
const playAudio = function (audio, key) {
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('showEffect');
}

const removeEffect = function (e) {
    console.log(e);
    if (e.propertyName !== 'transform')
        return;
    this.classList.remove('showEffect');
}

window.addEventListener('keydown', e => {
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    playAudio(audio, key);
});

const drumKeys = document.querySelectorAll('.key');
// Add event listeners for mouse click events
for (const key of drumKeys) {
    console.log(key);
    const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
    key.addEventListener('click', () => playAudio(audio, key));
    key.addEventListener('transitionend', removeEffect);
}
