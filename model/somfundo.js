var audio = new Audio("../assets/assobio.mp3");

audio.addEventListener('canplaythrough', function() {
  audio.play();
});
