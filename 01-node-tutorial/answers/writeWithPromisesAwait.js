const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile("temp.txt", `Here is the  first line\n`);

    await writeFile("temp.txt", `Here is the  second line\n`, {
      flag: "a",
    });

    await writeFile("temp.txt", `Here is the  third line`, {
      flag: "a",
    });
  } catch (err) {
    console.log("An error occured while writing:", err);
  }
};

const reader = async () => {
  try {
    const readValue = await readFile("temp.txt", "utf8");
    console.log("Contents read from the file:\n", readValue);
  } catch (err) {
    console.log("An error occured while reading", err);
  }
};

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch (err) {
    console.log(
      "An error occured while calling the writer and reader functions",
      err
    );
  }
};

readWrite();
