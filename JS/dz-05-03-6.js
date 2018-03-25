var a = +process.argv[2],
oper = process.argv[3],
b = +process.argv[4],
rez = 0;

switch (oper) {
	case "+":
	rez = a + b;
	console.log(rez);
	break;
	case "-":
	rez = a - b;
	console.log(rez);
	break;
	case "*":
	rez = a * b;
	console.log(rez);
	break;
	case "/":
	if (b == 0) {
		console.log("Делить на 0 нельзя")
		break;
	}
	rez = a / b;
	console.log(rez);
	break;
	default:
	console.log(`Формат записи а + b,
вместо + можно использовать одну из операций: +, -, *, /;`);
	break;
}
