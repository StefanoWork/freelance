const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

// console.log(path.resolve(__dirname, "./src/pages"));
sitemap({
  baseUrl: "https://www.stefanomontemarli.it",
  pagesDirectory: path.resolve(__dirname, "./src/app"),
  targetDirectory: "public/",
});
