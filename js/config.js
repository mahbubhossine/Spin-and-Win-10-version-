// Configure
let gameName;
let sliceNumber;
let spinDuration;
let wheelPrizes;

// let savedConfig = false;

const savedConfig = localStorage.getItem("spinAndWinConfig");
if (savedConfig) {
  const config = JSON.parse(savedConfig);
  gameName = config.gameName;
  sliceNumber = config.sliceNumber;
  spinDuration = config.spinDuration;
  wheelPrizes = config.wheelPrizes;
} else {
  gameName = "Spin And Win";
  sliceNumber = 40;
  spinDuration = 8;
  wheelPrizes = [
    { name: "200 free spin", probability: 100, value: 1 },
    { name: "10$", probability: 0, value: 10 },
    { name: "10$", probability: 0, value: 10 },
    { name: "10$", probability: 0, value: 10 },
    { name: "10$", probability: 0, value: 10 },
    { name: "20$", probability: 0, value: 20 },
    { name: "20$", probability: 0, value: 20 },
  ];
}

let NiceTryColors = "golden"; //"dark" or "light" or "any" or single color like black. just type "black"
const gitHubUrl = "assets/";

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
if (windowWidth < windowHeight) {
  height = windowHeight;
  width = windowWidth;
} else {
  width = 1536;
  height = 1024;
}

let halfWidth = width / 2;
let halfHeight = height / 2;
const gameDiv = document.getElementById("game");
gameDiv.style.width = window.innerWidth + "px";
gameDiv.style.height = window.innerHeight + "px";
window.addEventListener("resize", () => {
  gameDiv.style.width = window.innerWidth + "px";
  gameDiv.style.height = window.innerHeight + "px";
});

const fontUrl = `/assets/fonts/font.otf`;
const myFont = new FontFace("RakeslyRG", `url(${fontUrl})`);
myFont
  .load()
  .then(function (loadedFont) {
    document.fonts.add(loadedFont);
    console.log("RakeslyRG font loaded!");
  })
  .catch(function (err) {
    console.error("Failed to load font:", err);
  });

// URL to your icon (can be online or local)
const iconUrl = `${gitHubUrl}spin/logo.png`;
let link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.getElementsByTagName("head")[0].appendChild(link);
}
link.href = iconUrl;
