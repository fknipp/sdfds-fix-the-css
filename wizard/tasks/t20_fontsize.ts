import messagebox from "../messagebox.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
    window.getComputedStyle(d.body).getPropertyValue("font-size") ===
    "18px",
  showMessage() {
    messagebox({
      html: `
      <p>Hooray, you've integrated the stylesheet.</p>
      <p>But there is still so much to do.</p>
      <p>Could you change the <b>font size</b> for the complete page to <b>18px</b> to make it better readable for my old aunt?</p>
      <p>This would be a great improvement.</p>
      <p>Hint: Find the CSS rules for <b>body</b> and insert the declaration there.</p>
      <p>You must reload the preview to update my message after CSS changes.</p>
      `,
    });
  },
} as task;
