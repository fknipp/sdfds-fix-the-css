import messagebox from "../messagebox.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
    !!(d.querySelector("head meta[name=author]") as HTMLMetaElement)?.content,
  showMessage() {
    messagebox({
      html: `
<p>Hello, I'm Cassie.</p>
<p>Who are you?</p>
<p>Please enter your name in the <b>meta</b> tag for the <b>author</b>. You'll find it in the <b>head</b> section of <i>index.html</i>.
`,
    });
  },
} as task;
