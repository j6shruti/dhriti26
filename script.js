function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "Dhriti26") {
    document.getElementById("gate").style.display = "none";
    document.getElementById("scrapbook").style.display = "block";
    loadLetters();
  } else {
    document.getElementById("error").innerText = "Wrong password ❤️ try again";
  }
}

const videos = Array(26).fill("https://www.youtube.com");

function loadLetters() {
  const container = document.getElementById("letters");

  for (let i = 1; i <= 26; i++) {
    const div = document.createElement("div");
    div.className = "letter";
    div.innerText = "Letter " + i;

    div.onclick = () => {
      window.open(videos[i - 1], "_blank");
    };

    container.appendChild(div);
  }
}
