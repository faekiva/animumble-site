const fs = require('fs');

fs.mkdirSync("dist");
fs.copyFileSync("index.html", "dist/index.html")