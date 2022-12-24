let interval = "state";
let extraSeconds = null;

function handleInterval() {
    if (interval === "state") {
        startTimer();
    } else if (interval === "plus") {
        continueTimer();
    } else {
        stopTimer();
    }
}

timerBtnPlay.addEventListener("click", handleInterval);
timerBtnPause.addEventListener("click", handleInterval);
// $("#morning-page").one("keypress", startTimer());

function updateInterFaceTime() {
    const minutesR = Math.floor(remainingSeconds / 60);
    const secondsR = remainingSeconds % 60;
    const minutesE = Math.floor(extraSeconds / 60);
    const secondsE = extraSeconds % 60;

    if (remainingSeconds > 0) {
        timeSet.innerText = `${minutesR.toString().padStart(2, "0")} : ${secondsR.toString().padStart(2, "0")}`;
    } 
    else if (remainingSeconds === 0 && extraSeconds === null) {
        timeSet.innerText = "00 : 00";
        
        let confirmAction = confirm("타이머가 끝났어요! 조금 더 쓸까요?");
        if (confirmAction) {
            clearInterval(interval);
            $("#morning-page").one("keypress", continueTimer());
        } else {
            // 종료버튼 이벤트 생성 및 결과 페이지로 연결
            handelDoneBtn();
            location.href="result.html";
        }
    }
    else if (extraSeconds >= 0) {
        timeSet.innerText = ` + ${minutesE.toString().padStart(2, "0")} : ${secondsE.toString().padStart(2, "0")}`  
    };
}

function updateInterFaceControls() {
    if (interval === "state") {
        timerBtnPlay.classList.remove("hidden");
        timerBtnPause.classList.add("hidden");
    } else {
        timerBtnPlay.classList.add("hidden");
        timerBtnPause.classList.remove("hidden");
    }
}

function startTimer() {
    interval = setInterval(() => {
        remainingSeconds--;
        updateInterFaceTime();
        handleProgressBar();
        if (remainingSeconds === 0) {
            stopTimer();
        };
    }, 1000);
    updateInterFaceControls();
}

function stopTimer() {
    clearInterval(interval);
    interval = "state"; //count-down timer에서 pause 한 경우
    updateInterFaceControls();
    if (remainingSeconds === 0) {
        interval = "plus";
    };
    if (interval === "plus" && extraSeconds > 0) {
        //pause 했을 때, 값을 저장하도록
        localStorage.setItem("extrasec", extraSeconds);
    };
}

function continueTimer() {
    interval = setInterval(() => {
        extraSeconds++;  
        updateInterFaceTime();
    }, 1000);
    updateInterFaceControls();
}