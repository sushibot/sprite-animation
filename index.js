const character = document.querySelector("[data-character]");

document.addEventListener("keydown", (event) => {
  character.classList.forEach((className) => {
    if (className.includes("face")) {
      character.classList.remove(className);
    }
  });

  switch (event.key.toLowerCase()) {
    case "arrowleft":
      character.classList.add("face-left");
      break;
    case "arrowright":
      character.classList.add("face-right");
      break;
    case "arrowup":
      character.classList.add("face-up");
      break;
    case "arrowdown":
      character.classList.add("face-down");
      break;
  }
});
