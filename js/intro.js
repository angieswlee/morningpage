const date = document.getElementById("date");
const timerForm = document.getElementById("timer-wrap");
const timerSubmitInput = document.getElementById("timer");
const timerSubmitBtn = document.getElementById("timer-submit-btn");

const today = new Date();
const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


// 날짜 입력
date.innerText = `${today.getFullYear()} . ${today.getMonth() + 1} . ${today.getDate()} ${dayList[today.getDay()]}`;
localStorage.setItem("today", date.innerText);


// 타이머 입력
function handleSubmitForm(event) {
    event.preventDefault();
    
    const setTimer = timerSubmitInput.value;
    localStorage.setItem("time", setTimer);

    timerSubmitBtn.addEventListener("click", location.href="main.html");
}

timerForm.addEventListener("submit", handleSubmitForm);
