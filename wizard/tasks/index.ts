import t01_authorname from "./t01_authorname.js";
import t99_final from "./t99_final.js";

export interface task {
  condition: (d: Document) => boolean;
  showMessage: (d: Document) => void;
  ignoreInCounting?: boolean;
}

const tasks: task[] = [
  t01_authorname,
  t99_final
];

export default tasks;
