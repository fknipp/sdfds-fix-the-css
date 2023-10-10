import messagebox from "../messagebox.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
    window.getComputedStyle(d.querySelector("h1") as Element).getPropertyValue("font-family") === 'cursive' &&
    window.getComputedStyle(d.querySelector("h2") as Element).getPropertyValue("font-family") === 'cursive',
  showMessage() {
    messagebox({
      html: `
      <p>Oooh, I like your style.</p>
      <p>There's a last wish. I want a different font for the headings. My page uses only <b>h1</b> und <b>h2</b>.</p>
      <p>Let's take a look, how the built-in font <b>cursive</b> looks like.</p>
      <p>Hint: you can multiple selectors in a CSS rule separating them by a comma.</p>
      `,
    });
  },
  ignoreInCounting: true,
} as task;
