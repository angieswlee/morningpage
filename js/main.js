const timerShow = document.getElementById("main-timer-wrap");
const dateShow = document.getElementById("main-date");
const textArea = document.getElementById("morning-page");


// 1. 타이머 입력
timerShow.innerHTML = 
    `
        <span id="timer"></span>
        <div class="button-wrap play">
            <button id="play">
                <ion-icon name="play-sharp"></ion-icon>
                <span>PLAY</span>
            </button>
        </div>
        <div class="button-wrap">
            <button id="pause" class="hidden">
                <ion-icon name="pause-sharp"></ion-icon>
                <span>PAUSE</span>
            </button>
        </div>
        <div class="button-wrap">
            <button id="done">
                <ion-icon name="stop-sharp"></ion-icon>
                <span>DONE</span>
            </button>
        </div>
    `;

const timeSet = document.getElementById("timer");
const timerBtnPlay = document.getElementById("play");
const timerBtnPause = document.getElementById("pause");
const timerBtnDone = document.getElementById("done");

const submitTime = parseInt(localStorage.getItem("time"));


let remainingSeconds = submitTime * 60;
const submitMin = remainingSeconds / 60;
const submitSec = remainingSeconds % 60;

timeSet.innerText = `${submitMin.toString().padStart(2, "0")} : ${submitSec.toString().padStart(2, "0")}`;


// 2. 날짜 입력
dateShow.innerText = localStorage.getItem("today");


// 3. 입력 시작 시간
function showTime(time) {
    let affix;
    let hour = time.getHours();
    const mins = String(time.getMinutes()).padStart(2, "0");

    affix = (hour >= 12) ? "PM" : "AM";
    hour = String((hour + 11) % 12 + 1).padStart(2, "0");
    
    return `${affix} ${hour} : ${mins}`
}

const inputTime = new Date();
localStorage.setItem("start", showTime(inputTime));


// 4. pause 숫자 집계
let pauseCount = 0;

timerBtnPause.onclick = function () {
    pauseCount++;
};


// 5. 총 글자 수 집계
textArea.addEventListener("input", function (e) {
    const target = e.target;
    
    // Save textarea
    const bodyText = target.value;
    localStorage.setItem("body1", bodyText);

    // Count the current number of characters
    const currentLength = target.value.length;

    localStorage.setItem("length", currentLength);
});


// 6. 종료 버튼 이벤트
function handelDoneBtn() {
    location.href="result.html";
    
    // 종료 시간 저장
    const doneTime = new Date();
    localStorage.setItem("end", showTime(doneTime));

    // 총 작성 시간 저장
    const totalTime = submitTime * 60 - remainingSeconds;
    localStorage.setItem("total", totalTime);

    // 추가 시간 저장
    localStorage.setItem("extrasec", extraSeconds);
    
    // pause 집계 저장
    localStorage.setItem("pause", pauseCount);
}

timerBtnDone.addEventListener("click", handelDoneBtn);
