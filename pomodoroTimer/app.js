const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500; // tempo que será decrementado
let totalTime = 1500; 
let interval; // intervalo de alteração = 1s
let isTimerRunning = false; // controla se o timer está rodando

// função que atualiza o tempo na tela utilizando duas variáveis, minutos e segundos.
const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    updateCirularProgress()
    timer.innerHTML = 
    `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
};

function updateCirularProgress(){
    const percentage = (timeLeft/totalTime)*100;
    const angle = (percentage/100)*360;
    document.documentElement.style.setProperty('--angle', `${angle}deg`);
}

// função que diminui o tempo de segundo em segundo
const startTimer = () => {

    if(!isTimerRunning){
        isTimerRunning = true;
        interval = setInterval(() => {
            timeLeft--;
            updateTimer();

            if(timeLeft <1500 && timeLeft > 0){
                updateTimer();
            }

            if(timeLeft === 0){
                clearInterval(interval);
                isTimerRunning = false; 
                alert("Hora de uma pausa!");
                timeLeft = 1500;
                updateTimer();
            }

        }, 1000);
    }
};

// função que congela o timer
const stopTimer = () => {
    clearInterval(interval);
    isTimerRunning = false;
}

// função que reseta o timer para seu valor padrão
const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
    isTimerRunning = false;
}

// definindo os eventos para cada botão
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
