import { sidebar } from "vuepress-theme-hope";

export const nlSidebar = sidebar({
  "/nl/": [
    "",
    {
      icon: "discover",
      text: "Demonstratie",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Documentatie",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
