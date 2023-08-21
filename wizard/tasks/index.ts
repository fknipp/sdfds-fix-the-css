import t01_authorname from "./t01_authorname.ts";
import t10_stylesheet from "./t10_stylesheet.ts";
import t20_fontsize from "./t20_fontsize.ts";
import t30_intro from "./t30_intro.ts";
import t31_intro from "./t31_intro.ts";
import t99_final from "./t99_final.ts";

export interface task {
  condition: (d: Document) => boolean;
  showMessage: (d: Document) => void;
  ignoreInCounting?: boolean;
}

const tasks: task[] = [
  t01_authorname,
  t10_stylesheet,
  t20_fontsize,
  t30_intro,
  t31_intro,
  t99_final
];

export default tasks;
