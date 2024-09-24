const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500; // 25min em segundos
let interval; // intervalo de alteração = 1s

// função que atualiza o tempo na tela utilizando duas variáveis, minutos e segundos.
const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.innerHTML = 
    `${minutes.toString().padStart(2,"0")}
    :
    ${seconds.toString().padStart(2,"0")}`;
};

// função que diminui o tempo de segundo em segundo
const startTimer = () => {

    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if(timeLeft <1500 && timeLeft > 0){
            updateTimer();
        }

        if(timeLeft === 0){
            clearInterval(interval);
            alert("Hora de uma pausa!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
};

// função que congela o timer
const stopTimer = () => {
    clearInterval(interval);
}

// função que reseta o timer para seu valor padrão
const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

// definindo os eventos para cada botão
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
