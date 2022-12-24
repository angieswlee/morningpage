const showOnPx = 100;
const backToTopButton = document.getElementById("tothetop");

// conditionally showing the button
const CLASSNAME_HIDDEN = "hidden";

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove(CLASSNAME_HIDDEN)
  } else {
    backToTopButton.classList.add(CLASSNAME_HIDDEN)
  }
});

// scroll to the top logic
const goToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

backToTopButton.addEventListener("click", goToTop);
