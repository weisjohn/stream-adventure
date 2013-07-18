var split = require('split')
  , through = require('through')
  ;

var line_count = 0;
var tr = through(function(buf) {
    var line = buf.toString();
    line_count++;
    this.queue(line[ line_count % 2 === 0 
        ? 'toUpperCase'
        : 'toLowerCase'
    ]() + '\n');
});


process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);