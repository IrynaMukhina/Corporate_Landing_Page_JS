const video = document.getElementById('video');
const play = document.getElementById('play');
const icon = document.getElementById('header-icon');

function startVideo() {
  if (video.paused) {
    icon.classList.remove('header-item-play');
    icon.classList.add('header-item-pause');
    video.play();
  } else {
    icon.classList.add('header-item-play');
    icon.classList.remove('header-item-pause');
    video.pause();
  }
}

const playVideo = {
  init: () => {
    play.addEventListener('click', startVideo);
  },
};

export default playVideo;
