
const btnEl = document.getElementsByClassName("btn")[0];
const emojiNameEl = document.getElementsByClassName("emoji-name")[0];

const emoji = [];

async function getEmoji() {
  let response = await fetch("https://emoji-api.com/emojis?access_key=98d44317526d3bc2a53526ccdbc928145e3dbfb4");

  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
});
