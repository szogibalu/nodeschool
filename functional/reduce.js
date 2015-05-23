function countWords(inputWords) {
	return inputWords.reduce(function(map, word) {
		console.log(map);
		if (map[word]) {
			map[word] = ++map[word];
		} else {
			map[word] = 1;
		}
		return map;
	}, {});
}

module.exports = countWords;
