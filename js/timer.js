var countdown;
var countdown2;
var countdown_exercise;
var countdown_rest;
var audio = new Audio("sounds/alarm.mp3");
var done = false;
var count = 0

function countdown_trigger() {
    if (countdown_exercise > 0 && count === 0) {
        countdown_exercise--;
        document.getElementById('countdown_text').innerHTML = countdown_exercise;
        if (countdown_exercise > 0) { countdown = setTimeout(countdown_trigger, 1000); }
        if (countdown_exercise === 0) {
          audio.play();
          console.log("termina ejercicio");
          document.getElementById('countdown_text').innerHTML = 'Ejercicio';
          done = true;
        }
      }
    if (countdown_rest > 0 && done === true && count === 0) {
        countdown_rest--;
        document.getElementById('descanso').innerHTML = countdown_rest;
        if (countdown_rest > 0) { countdown2 = setTimeout(countdown_trigger, 1000); }
        if (countdown_rest === 0) {
          audio.play();
          console.log("termina descanso");
          document.getElementById('descanso').innerHTML = 'Descanso';
          done = false;
          count++;
          countdown_exercise = 31;
          countdown_rest = 11;
        }
      }


      if (countdown_exercise > 0 && count === 1) {
          countdown_exercise--;
          document.getElementById('countdown_text').innerHTML = countdown_exercise;
          if (countdown_exercise > 0) { countdown = setTimeout(countdown_trigger, 1000); }
          if (countdown_exercise === 0) {
            audio.play();
            console.log("termina ejercicio");
            document.getElementById('countdown_text').innerHTML = 'Ejercicio';
            done = true;
          }
        }
      if (countdown_rest > 0 && done === true && count === 1) {
          countdown_rest--;
          document.getElementById('descanso').innerHTML = countdown_rest;
          if (countdown_rest > 0) { countdown2 = setTimeout(countdown_trigger, 1000); }
          if (countdown_rest === 0) {
            audio.play();
            console.log("termina descanso");
            document.getElementById('descanso').innerHTML = 'Descanso';
            done = false;
            count++;
            countdown_exercise = 31;
            countdown_rest = 11;
          }
        }


      if (countdown_exercise > 0 && count === 2) {
          countdown_exercise--;
          document.getElementById('countdown_text').innerHTML = countdown_exercise;
          if (countdown_exercise > 0) { countdown = setTimeout(countdown_trigger, 1000); }
          if (countdown_exercise === 0) {
            audio.play();
            console.log("termina ejercicio");
            document.getElementById('countdown_text').innerHTML = 'Ejercicio';
            done = true;
          }
        }
      if (countdown_rest > 0 && done === true && count === 2) {
          countdown_rest--;
          document.getElementById('descanso').innerHTML = countdown_rest;
          if (countdown_rest > 0) { countdown2 = setTimeout(countdown_trigger, 1000); }
          if (countdown_rest === 0) {
            audio.play();
            console.log("termina descanso");
            document.getElementById('descanso').innerHTML = 'Descanso';
            done = false;
            count++;
            countdown_exercise = 31;
            countdown_rest = 11;
          }
        }


      if (countdown_exercise > 0 && count === 3) {
          countdown_exercise--;
          document.getElementById('countdown_text').innerHTML = countdown_exercise;
          if (countdown_exercise > 0) { countdown = setTimeout(countdown_trigger, 1000); }
          if (countdown_exercise === 0) {
            audio.play();
            console.log("termina ejercicio");
            document.getElementById('countdown_text').innerHTML = 'Ejercicio';
            done = true;
          }
        }
      if (countdown_rest > 0 && done === true && count === 3) {
          countdown_rest--;
          document.getElementById('descanso').innerHTML = countdown_rest;
          if (countdown_rest > 0) { countdown2 = setTimeout(countdown_trigger, 1000); }
          if (countdown_rest === 0) {
            audio.play();
            console.log("termina descanso");
            document.getElementById('descanso').innerHTML = 'Descanso';
            done = false;
            count++;
            countdown_exercise = 31;
            countdown_rest = 11;
          }
        }

      if (countdown_exercise > 0 && count === 4) {
          countdown_exercise--;
          document.getElementById('countdown_text').innerHTML = countdown_exercise;
          if (countdown_exercise > 0) { countdown = setTimeout(countdown_trigger, 1000); }
          if (countdown_exercise === 0) {
            audio.play();
            console.log("termina ejercicio");
            document.getElementById('countdown_text').innerHTML = 'Ejercicio';
            done = true;
          }
        }
      if (countdown_rest > 0 && done === true && count === 4) {
          countdown_rest--;
          document.getElementById('descanso').innerHTML = countdown_rest;
          if (countdown_rest > 0) { countdown2 = setTimeout(countdown_trigger, 1000); }
          if (countdown_rest === 0) {
            audio.play();
            console.log("termina descanso");
            document.getElementById('descanso').innerHTML = 'Descanso';
            done = false;
            count++;
            countdown_exercise = 31;
            countdown_rest = 11;
          }
        }
      if (countdown_exercise > 0 && count === 5) {
          countdown_exercise--;
          document.getElementById('countdown_text').innerHTML = countdown_exercise;
          if (countdown_exercise > 0) { countdown = setTimeout(countdown_trigger, 1000); }
          if (countdown_exercise === 0) {
            audio.play();
            console.log("termina ejercicio");
            document.getElementById('countdown_text').innerHTML = 'Ejercicio';
            done = true;
          }
        }
      if (countdown_rest > 0 && done === true && count === 5) {
          countdown_rest--;
          document.getElementById('descanso').innerHTML = countdown_rest;
          if (countdown_rest > 0) { countdown2 = setTimeout(countdown_trigger, 1000); }
          if (countdown_rest === 0) {
            audio.play();
            console.log("termina descanso");
            document.getElementById('descanso').innerHTML = 'Descanso';
            done = false;
            count++;
            countdown_exercise = 31;
            countdown_rest = 11;
          }
        }
}

function countdown_clear() {
  clearTimeout(countdown);
  clearTimeout(countdown2);
  document.getElementById('countdown_text').innerHTML = 'Ejercicio';
  document.getElementById('descanso').innerHTML = 'Descanso';

}

function countdown_init() {
    countdown_exercise = 31;
    countdown_rest = 11;
    countdown_trigger();
}
