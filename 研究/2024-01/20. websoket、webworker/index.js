const worker = new Worker("worker.js", { name: "worker" });

worker.addEventListener("message", (result) => {
  console.log(result);
});

worker.postMessage("test11, source");
