import messagebox from "../messagebox.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
    d.querySelectorAll("h1 + p.intro").length === 1,
  showMessage() {
    messagebox({
      html: `
      <p>Well. You've set the class on an element, but check again, if it was the right paragraph.</p>
      <p>It should be a <b>p</b> element right after an <b>h1</b> element.
      `,
    });
  }
} as task;
