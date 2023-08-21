import messagebox from "../messagebox.ts";
import { getStyle } from "./getStyle.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
    getStyle(d, "#about")?.display === "",
  showMessage() {
    messagebox({
      html: `
      <p>Great work!</p>
      <p>I can remember that I wrote something about me, but it isn't <b>display</b>ed anymore.</p>
      <p>Find the <b>id</b> of this element in <i>index.html</i> and the corresponding CSS rule in <i>style.css</i>.</p>
      <p>Hint: This time you've to remove a line.</p>
      `,
    });
  }
} as task;
