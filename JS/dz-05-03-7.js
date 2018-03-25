var ar = [1,1,3,4,5,6,7,8,9,10],
	sum = process.argv[2];
console.time('mark')
console.log("#########################v1#не правильно")
for (var i = 0; i < ar.length; i++) {
	for (var k = 0; k < ar.length; k++) {
		if (ar[i] + ar[k+i] == sum && ar[i] != ar[k+i]) {
			console.log(`${ar[i]} + ${ar[k+i]} = ${sum} ваши числа`)
		}

	}
}
console.log("#########################v2#не правильно")
for (var i = 0; i < ar.length-1; i++) {
	for (var k = 0; k < ar.length; k++) {
		if (ar[i] + ar[k+1] == sum) {
			console.log(`${ar[i]} + ${ar[k+1]} = ${sum} ваши числа`)
		}

	}
}
console.log("#########################v3#")
for (var i = 0; i < ar.length; i++) {
	for (var k = i; k < ar.length; k++) {
		if (ar[i] + ar[k] == sum && i != k) {
			console.log(`${ar[i]} + ${ar[k]} = ${sum} ваши числа`)
		}

	}
}
console.log("#########################v4#")
for (var i = 0; i < ar.length; i++) {
	for (var k = i+1; k < ar.length; k++) {
		if (ar[i] + ar[k] == sum) {
			console.log(`${ar[i]} + ${ar[k]} = ${sum} ваши числа`)
		}

	}
}
var res = [];
console.log("#########################v5#")
for (var i = ar.length; i--;) {
	for (var k = ar.length; k--;) {
		if (ar[i] + ar[k] == sum) {
			res[res.lenght] = ar[i];
			res[res.lenght] = ar[k];
		}

	}
}
console.log(res);
console.timeEnd('mark')