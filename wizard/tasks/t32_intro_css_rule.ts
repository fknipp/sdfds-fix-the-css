import messagebox from "../messagebox.ts";
import { getStyle } from "./getStyle.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
    !!getStyle(d, ".intro"),
  showMessage() {
    messagebox({
      html: `
      <p>The next step will be in the <i>style.css</i> file.</p>
      <p>You must create a new CSS rule for the class <b>intro</b>.</p>
      `,
    });
  }
} as task;
