const paintDate = document.getElementById("statics-date");
const paintStartTime = document.getElementById("time-start");
const paintEndTime = document.getElementById("time-end");
const paintTotalTime = document.getElementById("time-total");
const paintCountPauseBtn = document.getElementById("count-pause");
const paintCountCharacter = document.getElementById("count-character");
const paintBodyText = document.getElementById("text");

const textCopyBtn = document.querySelector("#copy>button");


// 1. 날짜 표시
paintDate.innerText = localStorage.getItem("today");


// 2. 시작 시간 표시
paintStartTime.innerText = localStorage.getItem("start");


// 3. 종료 시간 표시
paintEndTime.innerText = localStorage.getItem("end");


// 4. 총 시간 표시
const handleTotalTime = localStorage.getItem("total");
const totalMin = Math.floor(handleTotalTime / 60);

const totalExtraTime = localStorage.getItem("extrasec");
const totalExtraMin = Math.floor(totalExtraTime / 60);
const totalExtraSec = totalExtraTime % 60;

if (totalExtraTime === "null") { 
    paintTotalTime.innerText = `${totalMin} 분 / ${localStorage.getItem("time")} 분`;    
} else if (totalExtraTime !== "null") {
    paintTotalTime.innerText = `${totalMin} 분  ( + ${totalExtraMin} 분 ${totalExtraSec} 초 )  / ${localStorage.getItem("time")} 분`
}


// 5. pause 집계
paintCountPauseBtn.innerText = `총 ${localStorage.getItem("pause")} 번`;


// 6. 총 글자 수 집계
paintCountCharacter.innerText = `총 ${localStorage.getItem("length")} 자`;


// 본문 입력
paintBodyText.innerText = localStorage.getItem("body1");


// 텍스트 복사 Btn
textCopyBtn.addEventListener("click", () => {
    const r = document.createRange();
    r.selectNode(paintBodyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    alert("텍스트가 복사되었어요!");
});