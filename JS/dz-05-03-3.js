var x = +process.argv[2],
	ar = [];

for (var i = 0; i <= x; i++) {
	ar[i] = -i;
}
ar[0] = 0;
console.log(ar);