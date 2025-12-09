const { writeFile, readFile } = require("fs").promises;

console.log("Writing the first line\n");

writeFile("temp.txt", `Here is the  first line\n`)
  .then(() => {
    console.log("Writing the second line\n");

    writeFile("temp.txt", `Here is the  second line\n`, {
      flag: "a",
    });
  })
  .then(() => {
    console.log("Writing the third line\n");

    writeFile("temp.txt", `Here is the  third line\n`, {
      flag: "a",
    });
  })
  .then(() => {
    console.log("reading from the file\n");

    return readFile("temp.txt", "utf8");
  })
  .then((data) => {
    console.log("File contents:\n", data);
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
