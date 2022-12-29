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
speed.innerText = 1;
bar.append(title, speed);
document.body.append(bar);
video = document.querySelector('video');
video.onmouseover = () => {
    bar.style.opacity = 1;
}
video.onmouseleave = () => {
    bar.style.opacity = 0;
}
window.addEventListener('keydown', (e) => {
    video = document.querySelector('video');
    if (e.keyCode == 39)
        video.currentTime += 10;
    else if (e.which == 37)
        video.currentTime -= 10;
    else if (e.key === '>')
        video.playbackRate += 0.25;
    else if (e.key === '<' && video.playbackRate >0.25)
        video.playbackRate -= 0.25;
    speed.innerText = video.playbackRate;
})