const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  gif.style.width = gif.getBoundingClientRect().width + "px";
  gif.style.height = gif.getBoundingClientRect().height + "px";
  question.innerHTML = "Yay, see you on the 30th!";
  gif.src ="https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  noBtn.style.opacity = "0";
  yesBtn.style.marginLeft = "0px";
});

function handleNoBtn () {
  noBtn.style.left = noBtn.getBoundingClientRect().x + "px";
  noBtn.style.top = noBtn.getBoundingClientRect().y + "px";
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", handleNoBtn);
noBtn.addEventListener("click", handleNoBtn);