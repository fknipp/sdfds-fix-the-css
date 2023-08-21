import messagebox from "../messagebox.ts";
import { task } from "./index.ts";

export default {
  condition: (d) =>
    !!Array.from(d.styleSheets).find(s => s.href?.endsWith('/style.css')),
  showMessage(d) {
    messagebox({
      html: `
      <p>Hello ${(d.querySelector("head meta[name=author]") as HTMLMetaElement)?.content
        }!</p>
      <p>I'm so glad that you're here.</p>
      <p>My web page has lost its styles. I've already prepared some of them, but they are missing now.</p>
      <p>Please help me. Look for a file with the ending <b>CSS</b>, it must be near this file.</p>
      <p>Once, you've found it, it should be integrated as <b>stylesheet</b> right into the <b>head</b> of <em>index.html</em></p>.
      `,
    });
  },
} as task;
