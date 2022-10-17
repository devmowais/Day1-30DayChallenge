const RT = (o) => {
    if (o.propertyName !== "transform") {
        return;
    }
    o.target.classList.remove("playing");
}

const PS = (o) => {
    const audio = document.querySelector(`audio[data-key="${o.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${o.keyCode}"]`);
    if (!audio) {
        return;
    }

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', RT));
window.addEventListener('keydown', PS);