//constantes butoes
const resetBtn = document.getElementById('resetBtn');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');

const reload = document.getElementById('reload');
reload.addEventListener('click', ()=>{
    document.location.reload();
})

//valores numeros html
const hoursHT = document.getElementById('hoursHT');
const minutesHT = document.getElementById('minutesHT');
const secondsHT = document.getElementById('secondsHT');
const milisecHT = document.getElementById('milisecHT');

//variaveis tempo
let interval = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milisec = 0;
let paused = true;

//dias
document.addEventListener('DOMContentLoaded', (event) => {
    const radios = document.getElementsByName('dia');
    for (const radio of radios) {
        radio.addEventListener('change', () => {
            if (radio.value == 'normal') {
                resetTime();
                console.log(`${radio.value}`, ' radio')
                startBtn.addEventListener('click', startTime);
            }
            if (radio.value == 'dia1') {
                resetTime();
                console.log(`${radio.value}`, " radio");
                startBtn.addEventListener('click', startTimeFirstDay);
            }
            if (radio.value == 'dia2') {
                resetTime();
                console.log(`${radio.value}`, " radio");
                startBtn.addEventListener('click', startTimeSecDay);
            }
        })
    }
})


//escutador de eventos click e inicia uma funcao
pauseBtn.addEventListener('click', pauseTime);
resumeBtn.addEventListener('click', resumeTime);
resetBtn.addEventListener('click', resetTime);

//cronometro normal
function startTime() {
    paused = false;
    console.log('normal', paused);
    interval = setInterval(() => {
        if (paused == false) {
            // se pausado for igual a falso, execute isso:
            milisec += 10; //adiciona +10 milisec

            if (milisec == 1000) { //1000 milisec = 1 segundo
                seconds++; //adiciona +1 segundo
                milisec = 0; //zera os milisec
            }

            if (seconds == 60) { //60  segundos = 1 minuto
                minutes++; //adiciona +1 minuto
                seconds = 0; //zera os segundos
            }

            if (minutes == 60) { //60 minutos = 1 hora
                hours++; //adiciona +1 hora
                minutes = 0; //zera os minutos
            }

            //mostra os valores na tela formatado
            hoursHT.textContent = formatTime(hours);
            minutesHT.textContent = formatTime(minutes);
            secondsHT.textContent = formatTime(seconds);
            milisecHT.textContent = formatMilisec(milisec);
        }
    }, 10)//a cada 10 milisec

    //aparecer botao pausar
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}


//primeiro dia
function startTimeFirstDay() {
    paused = false;
    console.log('first', paused);
    interval = setInterval(() => {
        if (paused == false) {
            // se pausado for igual a falso, execute isso:
            milisec += 10; //adiciona +10 milisec

            if (milisec == 1000) { //1000 milisec = 1 segundo
                seconds++; //adiciona +1 segundo
                milisec = 0; //zera os milisec
            }

            if (seconds == 60) { //60  segundos = 1 minuto
                minutes++; //adiciona +1 minuto
                seconds = 0; //zera os segundos
            }

            if (minutes == 60) { //60 minutos = 1 hora
                hours++; //adiciona +1 hora
                minutes = 0; //zera os minutos
            }

            //mostra os valores na tela formatado
            hoursHT.textContent = formatTime(hours);
            minutesHT.textContent = formatTime(minutes);
            secondsHT.textContent = formatTime(seconds);
            milisecHT.textContent = formatMilisec(milisec);

            const rest = document.getElementById('rest');

            if (hours == 0 && minutes == 30 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 5h'
                console.log('5h')
                resetTime();
                startTime();
                pauseBtn.addEventListener('click', () => {
                    console.log(hours, minutes, seconds)
                    rest.textContent = 'Você gastou ' + `${hours}h,  ${minutes} min,  ${seconds} segundos ` + ' a mais'
                    resetTime();
                })
                resetBtn.addEventListener('click', () => {
                    document.location.reload();
                })
            }

            if (hours == 1 && minutes == 0 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 4:30h'
                console.log('4:30');
            }

            if (hours == 1 && minutes == 30 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 4h'
                console.log('4h')
            }

            if (hours == 2 && minutes == 0 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 3:30h'
                console.log('3:30')
            }

            if (hours == 2 && minutes == 30 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 3h'
                console.log('3h')
            }

            if (hours == 3 && minutes == 0 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 2:30h'
                console.log('2:30')
            }

            if (hours == 3 && minutes == 30 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 2h'
                console.log('2h')
            }

            if (hours == 4 && minutes == 0 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 1:30h'
                console.log('1:30')
            }

            if (hours == 4 && minutes == 30 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 1h'
                console.log('1h')
            }

            if (hours == 5 && minutes == 0 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 30min'
                console.log('30')
            }

            if (hours == 5 && minutes == 30 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Tempo esgotado'
                console.log('00')
                resetTime();
                startTime();
                pauseBtn.addEventListener('click', () => {
                    console.log(hours, minutes, seconds)
                    rest.textContent = 'Você gastou ' + `${hours}h,  ${minutes} min,  ${seconds} segundos ` + ' a mais'
                    resetTime();
                })
                resetBtn.addEventListener('click', () => {
                    document.location.reload();
                })
            }

        }
    }, 10)//a cada 10 milisec

    //aparecer botao pausar
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

//segundo dia
function startTimeSecDay() {
    console.log('sec')
    paused = false;
    interval = setInterval(() => {
        if (paused == false) {
            // se pausado for igual a falso, execute isso:
            milisec += 10; //adiciona +10 milisec

            if (milisec == 1000) { //1000 milisec = 1 segundo
                seconds++; //adiciona +1 segundo
                milisec = 0; //zera os milisec
            }

            if (seconds == 60) { //60  segundos = 1 minuto
                minutes++; //adiciona +1 minuto
                seconds = 0; //zera os segundos
            }

            if (minutes == 60) { //60 minutos = 1 hora
                hours++; //adiciona +1 hora
                minutes = 0; //zera os minutos
            }

            //mostra os valores na tela formatado
            hoursHT.textContent = formatTime(hours);
            minutesHT.textContent = formatTime(minutes);
            secondsHT.textContent = formatTime(seconds);
            milisecHT.textContent = formatMilisec(milisec);

            const rest = document.getElementById('rest');

            if (hours == 0 && minutes == 30 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 4:30'
                console.log('5h')
                resetTime();
                startTime();
                pauseBtn.addEventListener('click', () => {
                    console.log(hours, minutes, seconds)
                    rest.textContent = 'Você gastou ' + `${hours}h,  ${minutes} min,  ${seconds} segundos ` + ' a mais'
                    resetTime();
                })
                resetBtn.addEventListener('click', () => {
                    document.location.reload();
                })
            }

            if (hours == 1 && minutes == 0 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 4h'
                console.log('4:30');
            }

            if (hours == 1 && minutes == 30 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 3:30h'
                console.log('4h')
            }

            if (hours == 2 && minutes == 0 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 3h'
                console.log('3:30')
            }

            if (hours == 2 && minutes == 30 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 2:30h'
                console.log('3h')
            }

            if (hours == 3 && minutes == 0 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 2h'
                console.log('2:30')
            }

            if (hours == 3 && minutes == 30 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 1:30h'
                console.log('2h')
            }

            if (hours == 4 && minutes == 0 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 1h'
                console.log('1:30')
            }

            if (hours == 4 && minutes == 30 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Restam: 30min'
                console.log('1h')
            }

            if (hours == 5 && minutes == 0 && seconds == 0 && milisec == 0) {
                rest.textContent = 'Tempo esgotado'
                console.log('30')
                resetTime();
                startTime();
                pauseBtn.addEventListener('click', () => {
                    console.log(hours, minutes, seconds)
                    rest.textContent = 'Você gastou ' + `${hours}h,  ${minutes} min,  ${seconds} segundos ` + ' a mais'
                    resetTime();
                })
                resetBtn.addEventListener('click', () => {
                    document.location.reload();
                })
            }
        }
    }, 10)//a cada 10 milisec

    //aparecer botao pausar
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function pauseTime() {
    //pausar tempo e exibir o botao de continuar
    paused = true;
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
}

function resumeTime() {
    //continuar o tempo e exibir o botao de pausar
    paused = false;
    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function resetTime() {
    //zera tudo
    console.log('pausado', paused)
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milisec = 0;
    
    hoursHT.textContent = '00';
    minutesHT.textContent = '00';
    secondsHT.textContent = '00';
    milisecHT.textContent = '000';
    
    startBtn.style.display = 'block';
    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'none';
    
    paused = true;
}

function formatTime(time) {
    //tempo formatado com o 0 na frente
    return time < 10 ? `0${time}` : time;
}

function formatMilisec(time) {
    //tempo formatado do miliseg com o 0 na frente
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}