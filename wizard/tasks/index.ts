import t01_authorname from "./t01_authorname.ts";
import t10_stylesheet from "./t10_stylesheet.ts";
import t99_final from "./t99_final.ts";

export interface task {
  condition: (d: Document) => boolean;
  showMessage: (d: Document) => void;
  ignoreInCounting?: boolean;
}

const tasks: task[] = [
  t01_authorname,
  t10_stylesheet,
  t99_final
];

export default tasks;
