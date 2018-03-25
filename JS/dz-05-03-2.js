var x = +process.argv[2];

for (var i = 1; i < 11; i++) {
	if (x % [i] == 0) {
		console.log(i)
	}
}