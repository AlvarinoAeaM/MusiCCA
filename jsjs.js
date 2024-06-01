function playSong(url) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = url;
    audioPlayer.play();
}
