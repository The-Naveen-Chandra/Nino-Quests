const word = "Naveen is super cool."; // add more as words as needed

const ANIMATION_DURATION = 4000; // 4 seconds

// separate each character into it's own div
const characters = word.split("").forEach((char, i) => {
  function createElement(offset) {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

    return div;
  }

  document.getElementById("spiral").append(createElement(0));
  document
    .getElementById("spiral2")
    .append(createElement(-1 * (ANIMATION_DURATION / 2)));
});
