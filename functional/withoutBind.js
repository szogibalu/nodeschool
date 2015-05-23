var slice = Array.prototype.slice

function logger(namespace) {
	return function() {
		var args = slice.call(arguments, 0);
		console.log.apply(null, [ namespace, args ]);
		// TODO finish
	};
}

module.exports = logger;
