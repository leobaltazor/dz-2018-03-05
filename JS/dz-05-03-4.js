var x = process.argv,
ar = [],
mid,
sum = 0,
razn = 0,
chet = 0,
nchet = 0,
min = 0,
max = 0,
pol = 0,
otr = 0,
zer = 0;

for (var i = 0; i < x.length-2; i++) {
	ar[i] = +x[i+2];
}
console.log(ar)
//одним циклом
for (var i = 0; i < ar.length; i++) {
	sum = sum + ar[i];
	razn = razn - ar[i];
	if (ar[i] % 2 == 0) {chet++} else {nchet++};
	if (ar[i] > max) {max = ar[i]};
	if (ar[i] < min) {min = ar[i]};
	if (ar[i] < 0) {otr++}
	else if (ar[i] == 0) {zer++}
	else {pol++};

}
//Сумма
for (var i = 0; i < ar.length; i++) {
	// sum = sum + ar[i];
}
//Среднее
mid = sum / ar.length;
console.log(`Среднее ${mid}`)
console.log(`Сумма ${sum}`)
//Разность не уверен что правильно
for (var i = 0; i < ar.length; i++) {
	// razn = razn - ar[i]
}
console.log(`Разность ${razn}`)
//Количество четных / нечетных элементов
for (var i = 0; i < ar.length; i++) {
	// if (ar[i] % 2 == 0) {chet++}
	// else {nchet++}
}

console.log(`Количество четных элементов= ${chet}, 
Количество не четных элементов= ${nchet}`)
//MIN MAX
for (var i = 0; i < ar.length; i++) {
	// if (ar[i] > max) {max = ar[i]}
	// if (ar[i] < min) {min = ar[i]}
}
console.log(`min= ${min}, 
max= ${max}`);
//Количество положительных и отрицательных элементов
for (var i = 0; i < ar.length; i++) {
	// if (ar[i] < 0) {otr++}
	// else if (ar[i] == 0) {zer++}
	// else {pol++}
}
console.log(`Количество положительных= ${pol}, 
Количество отрицательных= ${otr},
Количество 0= ${zer}`);