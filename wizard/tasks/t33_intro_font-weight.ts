import messagebox from "../messagebox.ts";
import { getStyle } from "./getStyle.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
    getStyle(d, ".intro")?.fontWeight === "bold",
  showMessage() {
    messagebox({
      html: `
      <p>You've created a new CSS rule.</p>
      <p>Let's use it to make the text <b>bold</b>. It's about the weight of the font.</p>
      `,
    });
  }
} as task;
