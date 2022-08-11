// счетчик кликов
let clicker = 0;
let oneClick = 1;
// скорость в мс
let speed = 1024; 
// создание повторяющегося события с интервалов в speed
let timerId = setInterval(() => click(), speed)

// прибавляет 1 к элемунту по id из документа
function oneclick() {
    clicker = clicker + oneClick;
    document.getElementById("total").innerHTML = clicker;
};

//это програма для автоматического прибавления к кликеру
function click() {
    remove_elem();
    clicker++;
    document.getElementById("total").innerHTML = clicker;
};

function speed1() {
    if (clicker >= 10) {
        // если кликер равно или больше 10  при нажатии вычитаеться 10
        clicker = clicker - 10;
        document.getElementById("total").innerHTML = clicker;
        // после нажатия speed1 удаляется
        const button = document.getElementById("speed1");
        // .remove() удаляет элемент 
        button.remove();
        // скорость в мс
        speed = 512;
        //прибавляется 100 кликов
        oneClick = 100;
        let timerId = setInterval(() => click(), speed)
    }
};

function speed2() {
    if (clicker >= 100){
        clicker = clicker - 100;
        document.getElementById("total").innerHTML = clicker;
        const button = document.getElementById("speed2");
        button.remove();
        speed = 128;
        oneClick = 1000;
        let timerId = setInterval(() => click(), speed)
    }
};
function speed3() {
    if(clicker >= 1000){
        clicker = clicker - 1000;
        document.getElementById("total").innerHTML = clicker;
        const button = document.getElementById("speed3");
        button.remove();
        speed = 64;
        oneClick = 10000;
        let timerId = setInterval(() => click(), speed)
    }
};
function remove_elem() {
    if (clicker >= 10000) {
        h= document.getElementById("h");
        h.remove();
         m= document.getElementById("m");
        m.remove();
        const video = document.getElementById('b');
        video.insertAdjacentHTML('afterend', '   <video src="/src/videoplayback_Trim.mp4" preload="auto" id="fireworks" no-controls autoplay loop playsinline muted></video>');
        
    }
};
