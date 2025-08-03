function startWebsite() {
  const name = document.getElementById("username").value.trim();
  if (name !== "") {
    localStorage.setItem("visitorName", name);
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("user-name-placeholder").textContent = name;
  } else {
    alert("Isi dulu dong namanya 😄");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("visitorName");
  if (savedName) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("user-name-placeholder").textContent = savedName;
  }
});

// === TYPING EFFECT ===
const text = "Derma's Portofolio";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

window.onload = typing;

// === CURSOR TRAIL EFFECT ===
document.addEventListener("mousemove", function (e) {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 500);
});
const quotes = [
  "Believe in yourself and all that you are.",
  "You are capable of amazing things.",
  "Every day is a new beginning.",
  "Create your own future.",
  "Small steps every day lead to big results."
];

document.addEventListener("DOMContentLoaded", function () {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
});
function playMusic() {
  const audio = document.getElementById("bgm");
  audio.play();
}

