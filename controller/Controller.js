var canvas = document.getElementById('canvas').getContext("2d");
//canvas.imageSmoothingEnable = false;
const soundSettings = getOrCreate("flappy-bird-sound", true)
// Vai ser usado para configuração de level
const levelSettings = getOrCreate("flappy-bird-level", "1")

document.addEventListener("click", function (e) {
  if (play) {
    //vel fica no lugagor do y do passaro                       
    passaro.vel -= 13;
    playSound(somFly)

  }
});

document.addEventListener("keydown", function name(e) {
  if (play) {
    passaro.vel -= 13;
    playSound(somFly)
  }

})

const playSound = (obj) => {
  if (soundSettings) {
    obj.play()
  }
}