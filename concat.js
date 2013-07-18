var concat = require('concat-stream');

var cc = concat(function(buf) {
    var ser = buf.toString().split("").reverse().join("");
    console.log(ser);
});

process.stdin
    .pipe(cc)
    .pipe(process.stdout);