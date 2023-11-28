const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on 21st in horny jail!!";
  gif.src =
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmkwc2R4Zm5uZHg4dWo4dmRod3d3M3dnYjV5aWJ6Z2Fmbm5waHE4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HxMhuDg7O4pKOhhcRC/giphy.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});