const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200,
});

let chunkCount = 0;

stream.on("data", (chunk) => {
  chunkCount++;
  console.log("Received chunk:", chunk);
});

stream.on("end", () => {
  console.log("Stream finished.");
  console.log("Total chunks read:", chunkCount);
});

stream.on("error", (err) => {
  console.log("Stream error:", err);
});
