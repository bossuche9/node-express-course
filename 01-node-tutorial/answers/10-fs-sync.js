const { readFileSync, writeFileSync } = require("fs");

writeFileSync("./temporary/fileA.txt", `Here is the  first line\n`);

writeFileSync("./temporary/fileA.txt", `Here is the  second line\n`, {
  flag: "a",
});

writeFileSync("./temporary/fileA.txt", `Here is the  third line`, {
  flag: "a",
});

const second = readFileSync("./temporary/fileA.txt", "utf8");

console.log(second);
