// a callback is just a function passed
// as an argument, called later
function downloadFile(name, onDone) {
  console.log(`downloading ${name}...`);
  setTimeout(() => {
    onDone(`${name} saved`);
  }, 1500);
}
 
downloadFile("report.pdf", result => {
  console.log(result);
});
// downloading report.pdf...
// report.pdf saved   (1.5s later)
