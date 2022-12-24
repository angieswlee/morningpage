const progressBar = document.querySelector(".progress-inner");

function handleProgressBar() {
    let progressWidth = remainingSeconds / (submitTime * 60) * 100;
    
    progressBar.style.width = progressWidth + "%";
    
}