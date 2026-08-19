//from previous slides to construct the order
const order = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      const ok = Math.random() > 0.3;
      if (ok) resolve("noodles ready");
      else reject(new Error("closed"));
    }, 1000);
  });


order
  .then(value => {
    console.log("OK:", value);
  })
  .catch(err => {
    console.log("Failed:", err.message);
  })
  .finally(() => {
    console.log("done either way");
  });
