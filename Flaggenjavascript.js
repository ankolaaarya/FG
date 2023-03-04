const bars = document.querySelectorAll(".bar");
const flag = document.getElementById("flag");

flag.addEventListener("click", function() {
  bars.forEach(bar => {
    bar.style.backgroundColor = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;
  });
});

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}