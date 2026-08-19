console.log("1 - order food");
 
setTimeout(() => {
  console.log("2 - food arrives");
}, 2000);
 
console.log("3 - keep chatting");
 
// Output order:
// 1 - order food
// 3 - keep chatting
// 2 - food arrives   (after 2s)
