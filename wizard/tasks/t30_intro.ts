import messagebox from "../messagebox.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
    d.querySelectorAll(".intro").length === 1,
  showMessage() {
    messagebox({
      html: `
      <p>Super, now my old aunt can read it better.</p>
      <p>Take a look into <i>index.html</i>.</p>
      <p>I want to use a bold font for the first paragraph, but without changing the HTML structure. An <b>class</b> named <b>intro</b> seems to be a good way to style this introduction.</p>
      <p>Hint: You've to change the HTML and the stylesheet to do this.</p>
      `,
    });
  },
  ignoreInCounting: true
} as task;
