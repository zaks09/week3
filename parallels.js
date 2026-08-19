// independent tasks? run them together
Promise.all([
  getUser(1), getUser(2), getUser(3)
]).then(([a, b, c]) => {
  console.log(a.name, b.name, c.name);
});  // fails fast if ANY rejects
