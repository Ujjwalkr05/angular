var args = process.argv;

console.log(args);
console.log(args.slice(2))

console.log("****************************************************************");
process.argv.forEach(function (val, index) {
  console.log(index + ': ' + val);
});
