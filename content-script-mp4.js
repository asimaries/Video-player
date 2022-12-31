let video;
let playBackRate = 1;

let bar = document.createElement('div');
let title = document.createElement('div');
let speed = document.createElement('div');
const allstyle = 'display: inline;color:aliceblue;font-size: 40px; margin: 0 100px'
bar.setAttribute('style', 'width: 1000px;height: 50px;background-color: #00000066;transition: all 0.5s; position:fixed; opacity:0;')
title.setAttribute('style', allstyle)
speed.setAttribute('style', allstyle + 'float: right;')

title.innerText = document.baseURI.substring(document.baseURI.lastIndexOf('/') + 1);
bar.append(title, speed);
document.body.append(bar);
video = document.querySelector('video');
if (localStorage.getItem('spped'))
    video.playbackRate = localStorage.getItem('spped');
if (localStorage.getItem(document.baseURI + 'currentTime'))
    video.currentTime = localStorage.getItem(document.baseURI + 'currentTime');
speed.innerText = video.playbackRate;
video.onmouseover = () => {
    bar.style.opacity = 1;
}
video.onmouseleave = () => {
    bar.style.opacity = 0;
}

window.addEventListener('keydown', (e) => {
    video = document.querySelector('video');
    if (e.key == 'ArrowRight')
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
    speed.innerText = video.playbackRate;
    localStorage.setItem('spped', video.playbackRate);
    localStorage.setItem(document.baseURI + 'currentTime', video.currentTime);
})