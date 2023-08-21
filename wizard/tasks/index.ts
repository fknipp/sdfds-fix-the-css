import t01_authorname from "./t01_authorname.ts";
import t10_stylesheet from "./t10_stylesheet.ts";
import t20_fontsize from "./t20_fontsize.ts";
import t30_intro from "./t30_intro.ts";
import t31_intro from "./t31_intro.ts";
import t32_intro_css_rule from "./t32_intro_css_rule.ts";
import t33_intro_fontWeight from "./t33_intro_font-weight.ts";
import t40_about_display from "./t40_about_display.ts";
import t41_about_width from "./t41_about_width.ts";
import t42_about_background_border from "./t42_about_background_border.ts";
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
  t32_intro_css_rule,
  t33_intro_fontWeight,
  t40_about_display,
  t41_about_width,
  t42_about_background_border,
  t99_final
];

export default tasks;
