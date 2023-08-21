export function getStyle(d: Document, selector = ""): CSSStyleDeclaration | null {
  for (let s of d.styleSheets) {
    if (s.href?.endsWith('/style.css')) {
      for (let r of s.cssRules) {
        if ((r as CSSStyleRule).selectorText === selector) {
          return (r as CSSStyleRule).style;
        }
      }
    }
  }
  return null;
}
