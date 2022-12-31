let video, playing = true;
console.log('extension on');
window.addEventListener('keydown', async (e) => {
    console.log('extension read');
    video = document.querySelector('video');
    video.controls = true;
    if (e.which == 32) {
        playing ? video.pause() : await video.play();
        playing = !playing;
        setTimeout(() => {
            window.scroll(0, 0);
        }, 300);
    }
    else if (e.key == 'ArrowRight')
        video.currentTime += 10;
    else if (e.key == 'ArrowLeft')
        video.currentTime -= 10;
    else if (e.key == '>')
        video.playbackRate += 0.25;
    else if (e.key == '<' && video.playbackRate > 0.25)
        video.playbackRate -= 0.25;
    else if (e.key == 'ArrowDown' && video.volume > 0.1)
        video.volume -= 0.20;
    else if (e.key == 'ArrowUp' && video.volume < 1)
        video.volume += 0.20;
    else if (e.key == 'f')
        video.requestFullscreen();
    else if (e.key == 'm')
        video.muted = !video.muted;
});