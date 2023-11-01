document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audio-player');
  const nowPlaying = document.getElementById('now-playing');
  const albumCover = document.getElementsByClassName('album-cover')[0];
  const playPauseBtn = document.getElementById('play-pause-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const progressBar = document.getElementById('progress-bar');
  
  class Song {
    constructor(src, cover, title) {
      this.src = src;
      this.cover = cover;
      this.title = title;
    }
  }
  
  const songs = [
    new Song('musica/daoxian.mp3', 'musica/daoxian.jpg', '稻香', '周杰伦'),
    new Song('musica/2002.mp3', 'musica/2002.jpg', '2002', 'Anne Marie'),
    new Song('musica/Something Just Like This.mp3', 'musica/somethink.jpg', 'Something Just Like This', 'The Chainsmokers'),
    new Song('musica/Creep.mp3', 'musica/creep.jpg', 'Creep', 'Radiohead'),
    new Song('musica/Nirvana.mp3', 'musica/narriva.jpg', 'Smells Like Teen Spirit', 'Nirvana'),
    new Song('musica/Alright.mp3', 'musica/alright.jpg', 'Alright', 'Kendrick Lamar'),
    new Song('musica/Their Nightmares .mp3', 'musica/xxxtentation.png', 'Everybody Dies In Their Nightmares', 'XXXTENTACION'),
    new Song('musica/Hope.mp3', 'musica/xxxtentation1.jpg', 'Hope', 'XXXTENTACION'),
    new Song('musica/WHERE SHE GOES.mp3', 'musica/bad.jpg', 'WHERE SHE GOES', 'Bad Bunny'),
    new Song('musica/Vol57.mp3', 'musica/MILO.jpg', 'Bzrp Music Sessions', 'Milo J'),
    new Song('musica/MyLife.mp3', 'musica/Bon_.jpg', 'Bon Jovi', 'Its My Life'),
    new Song('musica/MONACO.mp3', 'musica/bad 2.jpg', 'MONACO', 'Bad Bunny'),
    new Song('musica/LIGHT YEARS AWAY.mp3', 'musica/Gem.jpg', '光年之外 LIGHT YEARS AWAY', 'G.E.M.'),
    new Song('musica/StressedOut.mp3', 'musica/StressedOut.jpg', 'Stressed Out', 'The Chainsmokers'),

  ];
  
  let currentSongIndex = 0;
  let playedSongs = [];  // 存储已播放歌曲的索引
  
  function getRandomSongIndex() {
    if (songs.length > 1) {
      let newSongIndex;
      do {
        newSongIndex = Math.floor(Math.random() * songs.length);
      } while (newSongIndex === currentSongIndex || playedSongs.includes(newSongIndex));
      return newSongIndex;
    }
    return 0;
  }
  
  function playMusic(songUrl, coverUrl, songTitle) {
    if (audioPlayer.src !== songUrl) {
      audioPlayer.src = songUrl;
      albumCover.src = coverUrl || 'default-album-cover.jpg';
      nowPlaying.textContent = songTitle || 'Unknown Song';
      audioPlayer.load();
    }
    if (audioPlayer.paused) {
      audioPlayer.play().then(() => {
        playPauseBtn.innerHTML = '&#10074;&#10074;';
      }).catch(error => console.error("Playback failed", error));
    } else {
      audioPlayer.pause();
    }
  }
  
  function playNextSong() {
    currentSongIndex = getRandomSongIndex();
    const nextSong = songs[currentSongIndex];
    playMusic(nextSong.src, nextSong.cover, nextSong.title);
    playedSongs.push(currentSongIndex);
    if (playedSongs.length > songs.length - 1) playedSongs.shift();  // 保持 playedSongs 的大小
  }
  
  function playPreviousSong() {
    if (playedSongs.length > 0) {
      currentSongIndex = playedSongs.pop();  // 获取上一首歌曲的索引
      const prevSong = songs[currentSongIndex];
      playMusic(prevSong.src, prevSong.cover, prevSong.title);
    }
  }
  
  playPauseBtn.addEventListener('click', function() {
    if (audioPlayer.src) {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    } else {
      playNextSong();
    }
  });

  prevBtn.addEventListener('click', playPreviousSong);
  nextBtn.addEventListener('click', playNextSong);
  
  audioPlayer.addEventListener('play', function() {
    playPauseBtn.innerHTML = '&#10074;&#10074;';
  });
  
  audioPlayer.addEventListener('pause', function() {
    playPauseBtn.innerHTML = '&#9654;';
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
});


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








