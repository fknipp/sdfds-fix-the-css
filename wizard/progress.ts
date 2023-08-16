import "./progress.css";

const progress = document.createElement("div");
progress.className = "wizard-progress";
document.body.appendChild(progress);

export default function ({ done = 0, total = 1 }) {
  progress.innerText = `${done}/${total}`;
}
