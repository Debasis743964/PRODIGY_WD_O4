const typingElement = document.querySelector(".typing");
const words = ["Web Developer", "UI/UX Designer", "Full Stack Developer"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && letterIndex <= words[wordIndex].length) {
        currentWord = words[wordIndex].substring(0, letterIndex);
        letterIndex++;
    } else if (isDeleting && letterIndex >= 0) {
        currentWord = words[wordIndex].substring(0, letterIndex);
        letterIndex--;
    }

    typingElement.innerHTML = currentWord;

    if (!isDeleting && letterIndex === words[wordIndex].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 150);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});