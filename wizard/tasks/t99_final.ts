import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition() {
    return false;
  },
  showMessage(d) {
    messagebox({
      html: `
    <p>Dear ${
      (d.querySelector("head meta[name=author]") as HTMLMetaElement)?.content
    },</p>
    <p>you're so great. Now, my homepage looks beautiful.</p>
    <p>Enjoy the magic of style sheets!</p>
    <p>Kind regards, Cassie.</p>`,
    });
  },
  ignoreInCounting: true,
} as task;
