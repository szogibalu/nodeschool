function duckCount() {
   var args = Array.prototype.slice.call(arguments);
   return args.reduce(function(counter, actual) {
        if(Object.prototype.hasOwnProperty.call(actual, 'quack')) {
             counter.counter++;
        }
        return counter;
   }, {counter : 0}).counter;
}

module.exports = duckCount;
