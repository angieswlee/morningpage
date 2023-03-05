const modal = document.getElementById("modal-wrap");
const shareBtn = document.getElementById("share");
const modalContents = document.getElementById("modal-content");
const modalCloseBtn = document.getElementById("modal-close");

// 1. modal show/hide
// Done btn click 했을 때 modal 보여줌
function showModal() {
    modal.style.display = "block";
    modal.classList.add("show");
}

shareBtn.addEventListener("click", showModal);

modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.style.display = "none";
})

// modal 밖을 click 했을 때, 닫히도록
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show");
        modal.style.display = "none";
    }
}

// esc click 했을 때, 닫히도록
window.addEventListener("keyup", e => {
    if(modal.style.display === "block" && e.key === "Escape") {
        modal.style.display = "none"
    }
})


// 2. modal contents
const modalDate = document.getElementById("modal-date");
const modalTime = document.getElementById("modal-time");
const modalPeriod = document.getElementById("modal-period");
const modalPause = document.getElementById("modal-pause");
const modalCharacters = document.getElementById("modal-characters");
const modalSumShow = document.querySelector("#summary-result :nth-child(4)");

const modalSumPerBtn = document.querySelector("#summary-btn div:nth-child(1)");
const modalSumPauseBtn = document.querySelector("#summary-btn div:nth-child(2)");
const modalSumCharcBtn = document.querySelector("#summary-btn div:nth-child(3)");

// 날짜 입력
modalDate.innerHTML = localStorage.getItem("today");

modalTime.innerText = `${localStorage.getItem("start")} - ${localStorage.getItem("end")}`

if (totalExtraTime === "null") {
    // 추가 시간이 없는 경우
    modalPeriod.innerText = `${totalMin} 분 ${totalSec} 초 동안`;    
} else if (totalExtraTime !== "null") {
    // 추가 시간까지 작성한 경우
    modalPeriod.innerText = `${totalMin + totalExtraMin} 분 ${totalExtraSec} 초 동안`
}

const valuePause = Number(localStorage.getItem("pause"));
if (valuePause === 0) {
    modalPause.innerText = `쉬지 않고`;
} else if (valuePause !== 0) {
    modalPause.innerText = `${valuePause} 번 쉬고`;
}

modalCharacters.innerText = `총 ${localStorage.getItem("length")} 글자`;


modalSumPerBtn.addEventListener("click", () => {
    if (modalPeriod.className === "hidden") {
        modalPeriod.classList.remove("hidden");
        modalSumShow.classList.remove("hidden");
        modalSumPerBtn.classList.add("clicked-summary-btn");
    } else {
        modalPeriod.classList.add("hidden");
        modalSumShow.classList.add("hidden");
        modalSumPerBtn.classList.remove("clicked-summary-btn");
    };
});

modalSumPauseBtn.addEventListener("click", () => {
    if (modalPause.className === "hidden") {
        modalPause.classList.remove("hidden");
        modalSumShow.classList.remove("hidden");
        modalSumPauseBtn.classList.add("clicked-summary-btn");
    } else {
        modalPause.classList.add("hidden");
        modalSumShow.classList.add("hidden");
        modalSumPauseBtn.classList.remove("clicked-summary-btn");
    };
});

modalSumCharcBtn.addEventListener("click", () => {
    if (modalCharacters.className === "hidden") {
        modalCharacters.classList.remove("hidden");
        modalSumShow.classList.remove("hidden");
        modalSumCharcBtn.classList.add("clicked-summary-btn");
    } else {
        modalCharacters.classList.add("hidden");
        modalSumShow.classList.add("hidden");
        modalSumCharcBtn.classList.remove("clicked-summary-btn");
    };
});

