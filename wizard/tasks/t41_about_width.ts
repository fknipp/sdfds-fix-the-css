import messagebox from "../messagebox.ts";
import { getStyle } from "./getStyle.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
    getStyle(d, "#about")?.width === "20em",
  showMessage() {
    messagebox({
      html: `
      <p>Well done, you've recreated this bewitched element.</p>
      <p>Take a look at this delicate CSS witchcraft in the rules with the selectors starting with <b>#about</b>.</p>
      <p>Resize the window to see a little bit of responsive web design.</p>
      <p>This block about me is little bit to broad. Could you resize the <b>width</b> to <b>20em</b>?</p>
      <p>By the way, 1em is just the current font size.</p>
      `,
    });
  }
} as task;
