import messagebox from "../messagebox.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
  window.getComputedStyle(d.querySelector("#about")).getPropertyValue("background-color") !== 'rgb(242, 211, 248)' && 
  window.getComputedStyle(d.querySelector("#about")).getPropertyValue("border-color") !== 'rgb(243, 41, 216)',
  showMessage() {
    messagebox({
      html: `
      <p>It looks real better now.</p>
      <p>Let's play with the colors. Find new colors for the border and the background of the block about me.</p>
      <p>There are many possibilites to define colors in CSS. Try them out!</p>
      `,
    });
  }
} as task;
