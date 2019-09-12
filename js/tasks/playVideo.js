import changeClass from '../modules/changeClass.js';

const handler = changeClass();

const video = document.getElementById('video');
const play = document.getElementById('play');
const icon = document.getElementById('header-icon');

function startVideo() {
  if (video.paused) {
    handler.toggleClass(icon, 'header-item-pause', 'header-item-play');
    video.play();
  } else {
    handler.toggleClass(icon, 'header-item-play', 'header-item-pause');
    video.pause();
  }
}

const playVideo = {
  init: () => {
    play.addEventListener('click', startVideo);
  },
};

export default playVideo;
