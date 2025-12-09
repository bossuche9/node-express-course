const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.on("firstEvent", (msg) => {
  console.log("First event received:", msg);
  emitter.emit("secondEvent", "This is the second event!");
});

emitter.on("secondEvent", (msg) => {
  console.log("Second event received:", msg);
});

emitter.on("timer", (message) => {
  console.log("Timer event:", message);
});

setInterval(() => {
  emitter.emit("timer", "2 seconds have passed");
}, 2000);

const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on("specialEvent", (msg) => resolve(msg));
  });
};

const doWait = async () => {
  const msg = await waitForEvent();
  console.log("Special event caught:", msg);
};

doWait();

emitter.emit("greet", "Uchenna");
emitter.emit("firstEvent", "Starting chain...");
setTimeout(() => {
  emitter.emit("specialEvent", "Async event finished!");
}, 3000);
