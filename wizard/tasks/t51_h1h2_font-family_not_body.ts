import messagebox from "../messagebox.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
  window.getComputedStyle(d.body).getPropertyValue("font-family") !== 'cursive' && 
  window.getComputedStyle(d.querySelector("h1") as Element).getPropertyValue("font-family") === 'cursive' && 
  window.getComputedStyle(d.querySelector("h2") as Element).getPropertyValue("font-family") === 'cursive',
  showMessage(d) {
    messagebox({
      html: `
      <p>Hey ${
        (d.querySelector("head meta[name=author]") as HTMLMetaElement)?.content
      }, don't cheat on me.</p>
      <p>Use <b>serif</b> for the <b>body</b> and create a new rule for <b>h1</b> and <b>h2</b> only.</p>
      `,
    });
  }
} as task;
