import messagebox from "./messagebox.ts";
import tasks from "./tasks/index.ts";

import "./style.css";
import progress from "./progress.ts";

const nextTask = tasks.find((task) => !task.condition(document));
nextTask?.showMessage(document);

const done = tasks.filter((task) => task.condition(document) && !task.ignoreInCounting).length;
const total = tasks.filter(task => !task.ignoreInCounting).length;

progress({done, total})
