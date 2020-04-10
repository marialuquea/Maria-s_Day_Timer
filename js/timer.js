
var countdown;
var countdown_exercise;
var countdown_descanso;

function alarm() {
  //var audio = new Audio();
  //audio.src = "sounds/alarm.mp3";
  //audio.play()

  var myAudio = new Audio('sounds/alarm.mp3');
  myAudio.play();
}

function countdown_trigger() {
    var done = false;
    if (countdown_exercise > 0) {
        countdown_exercise--;
        document.getElementById('countdown_text').innerHTML = countdown_exercise;
        if (countdown_exercise > 0) { countdown = setTimeout(countdown_trigger, 1000); }
        if (countdown_exercise === 0) {
          audio.play()
          done = true;
        }
      }

      if (countdown_descanso > 0) && (done == true) {
        countdown_descanso--;
        document.getElementById('countdown_text').innerHTML = countdown_descanso;
        if (countdown_descanso > 0) { countdown = setTimeout(countdown_trigger, 1000); }
        if (countdown_descanso === 0) { audio.play() }
      }

}

function countdown_clear() { clearTimeout(countdown); }

function countdown_init() {
    countdown_exercise = 5;
    countdown_descanso = 3;
    countdown_trigger();
  }
