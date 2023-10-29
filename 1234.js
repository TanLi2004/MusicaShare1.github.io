const audioPlayer = document.getElementById('audio-player');
const nowPlaying = document.getElementById('now-playing');
const albumCover = document.getElementById('album-cover');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');

function playMusic(songUrl, coverUrl, songTitle) {
  if (audioPlayer.src !== songUrl) {
    audioPlayer.src = songUrl;
    albumCover.src = coverUrl || 'default-album-cover.jpg';
    nowPlaying.textContent = songTitle || 'Unknown Song';
    audioPlayer.load(); // 重新加载音频以确保能够自动播放

    audioPlayer.play().then(() => {
      playPauseBtn.innerHTML = '&#10074;&#10074;'; // 设置为播放状态的显示
    }).catch(error => console.error("Playback failed", error));
  }
}

audioPlayer.addEventListener('play', function() {
    playPauseBtn.innerHTML = '&#10074;&#10074;';
});

audioPlayer.addEventListener('pause', function() {
    playPauseBtn.innerHTML = '&#9654;';
});

playPauseBtn.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

audioPlayer.addEventListener('timeupdate', updateProgressBar);

function updateProgressBar() {
  const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = percentage;
}

progressBar.addEventListener('input', seek);

function seek() {
  const time = (progressBar.value * audioPlayer.duration) / 100;
  audioPlayer.currentTime = time;
}


class Song {
  constructor(src, cover, title) {
    this.src = src;
    this.cover = cover;
    this.title = title;
  }
}

const songs = [
  new Song('musica/daoxian.mp3', 'musica/daoxian.jpg', 'Canción 18')
];


document.querySelectorAll('.song-card').forEach(card => {
  card.addEventListener('click', function() {
    const index = this.dataset.songIndex;
    const song = songs[index];
    playMusic(song.src, song.cover, song.title);
  });
});




function filterMusic(category) {
  // 隐藏所有音乐类型容器
  const categories = document.querySelectorAll('.music-category');
  categories.forEach(cat => cat.style.display = 'none');

  // 显示选定的音乐类型容器
  const selectedCategory = document.getElementById(category);
  if (selectedCategory) {
    selectedCategory.style.display = '';
  }
}
if (audioPlayer.readyState >= 2) {
  audioPlayer.play();
} else {
  audioPlayer.addEventListener('canplay', function() {
    audioPlayer.play();
  }, { once: true });
}
audioPlayer.play().catch(error => {
  console.error("Playback failed", error);
  alert("Playback failed. Please click the play button to start playing.");
});


if (audioPlayer.readyState >= 2) {
  audioPlayer.play().catch(error => {
    console.error("Playback failed", error);
    alert("Playback failed. Please click the play button to start playing.");
  });
} else {
  audioPlayer.addEventListener('canplay', function() {
    audioPlayer.play().catch(error => {
      console.error("Playback failed", error);
      alert("Playback failed. Please click the play button to start playing.");
    });
  }, { once: true });
}

