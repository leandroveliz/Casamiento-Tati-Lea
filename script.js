const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');

//Fecha a futuro
const countdownDate = new Date('02 04, 2023 22:00:00').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);

				/* Some random colors*/
                const colors = ["#d1d1d1", "#99adbb", "#1b1b1baa", "#ffffff7c", "#f4f4f4"];
		
                const numBalls = 150;
                const balls = [];

                
                
                for (let i = 0; i < numBalls; i++) {
                  let ball = document.createElement("div");
                  ball.classList.add("ball");
                  ball.style.position = "absolute";
                  ball.style.borderRadius = `${Math.floor(Math.random() * 100)}%`;
                  ball.style.opacity = ".7";
                  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
                  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
                  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
                  ball.style.transform = `scale(${Math.random()})`;
                  ball.style.width = `${Math.random()}em`;
                  ball.style.height = ball.style.width;
                  
                  balls.push(ball);
                  document.getElementById('top-container').append(ball);
                }
                
                /* Keyframes*/
                balls.forEach((el, i, ra) => {
                  let to = {
                    x: Math.random() * (i % 2 === 0 ? -11 : 11),
                    y: Math.random() * 12
                  };
                
                  let anim = el.animate(
                    [
                      { transform: "translate(0, 0)" },
                      { transform: `translate(${to.x}rem, ${to.y}rem)` }
                    ],
                    {
                      duration: (Math.random() + 1) * 2000, /* random duration*/
                      direction: "alternate",
                      fill: "both",
                      iterations: Infinity,
                      easing: "ease-in-out"
                    }
                  );
                });
//Audio
/*const cargarSonido = function (fuente) {
  const sonido = document.createElement("audio");
  sonido.src = fuente;
  sonido.setAttribute("preload", "auto");
  sonido.setAttribute("controls", "none");
  sonido.style.display = "none"; // <-- oculto
  document.body.appendChild(sonido);
  return sonido;
};
const $botonReproducir = document.querySelector("#btnReproducir"),
  $botonPausar = document.querySelector("#btnPausar"),
  $botonReiniciar = document.querySelector("#btnReiniciar");
// El sonido que podemos reproducir o pausar
const sonido = cargarSonido("./audio/All of Me  John Legend.mp3");
$botonReproducir.onclick = () => {
  sonido.play();
};
$botonPausar.onclick = () => {
  sonido.pause();
};
$botonReiniciar.onclick = () => {
  sonido.currentTime = 0;
};*/