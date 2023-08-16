import "./messagebox.css";

const box = document.createElement("div");
box.className = "wizard-messagebox";
box.innerHTML = `
  <div class="close">✖</div>
  <div class="wizard">🧙‍♀️</div>
  <div class="text"></div>
`;
document.body.appendChild(box);

const textElement = box.querySelector(".text") as HTMLElement;

box.addEventListener("click", () => {
  if (!sessionStorage.getItem("hintForCloseButton")) {
    messagebox({
      text: "Good bye! Just reload the page to see me again.",
      backgroundColor: "rgb(231, 158, 89)",
    });
    sessionStorage.setItem("hintForCloseButton", "1");
  } else {
    box.remove();
  }
});

export default function messagebox({
  text = "",
  html = "",
  backgroundColor = "",
}): void {
  if (text) textElement.innerText = text.trim();
  if (html) textElement.innerHTML = html.trim();
  if (backgroundColor) {
    box.style.backgroundColor = backgroundColor;
  }
}
