function createExitButton() {
  const exitButton = document.createElement("button");
  exitButton.innerHTML = "&times;";
  exitButton.style.position = "fixed";
  exitButton.style.top = "0";
  exitButton.style.right = "0";
  exitButton.style.fontSize = "20px";
  exitButton.style.padding = "10px";
  exitButton.style.backgroundColor = "transparent";
  exitButton.style.border = "0";
  exitButton.style.cursor = "pointer";
  exitButton.addEventListener("click", () => {
    location.reload();
  });
  document.body.appendChild(exitButton);
}

createExitButton();
