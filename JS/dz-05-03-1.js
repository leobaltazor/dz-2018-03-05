var p1 = +process.argv[2],
	p2 = +process.argv[3],
	p3 = +process.argv[4],
	max;
max = p1;

if (p2 > max) {
	max = p2
}
if (p3 > max) {
	max = p3
}

console.log(max);
max = 0;
max = p1 > p2 ? p1 : p2;
max = max < p3 ? p3: max;
console.log(max);