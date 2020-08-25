// print process.argv
process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});

var exec = require('child_process').exec;
exec('node r.js -o build.js', function (error, stdout, stderr) {
  console.log(error);
  console.log(stdout);
  console.log(stderr);
});