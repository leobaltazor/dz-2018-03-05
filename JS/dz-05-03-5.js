var a = +process.argv[2],
	oper = process.argv[3],
	b = +process.argv[4],
	rez = 0;

switch (oper) {
case "+":
	rez = a + b;
	break;
case "-":
	rez = a - b;
	break;
case "*":
	rez = a * b;
	break;
case "/":
	rez = a / b;
	break;
}
console.log(rez)
