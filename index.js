
var simpleExcerpt = function(opts) {
  var opts = opts || {};
  var options = {
    size: opts.size || 50,
    bufferSize: opts.bufferSize || 300,
    encoding: opts.encoding || 'utf-8'
  }

  return function(files, metalsmith, done) {
     var tmp; 
     for(file in files) { 
       tmp = files[file].contents.toString(options.encoding, 0, options.bufferSize).split().slice(0, options.size); 
       files[file]['excerpt'] = tmp.join(' '); 
     } 
     done();
  }  
}

module.exports = simpleExcerpt;
