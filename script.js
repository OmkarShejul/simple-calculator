function calculate(op) {
	var num1 = parseFloat(document.form1.num1.value);
	var num2 = parseFloat(document.form1.num2.value);
	var result;

	if (isNaN(num1) || isNaN(num2)) {
		alert("Please enter valid numbers.");
		return;
	}

	switch(op) {
		case 'add':
			result = num1 + num2;
			break;
		case 'sub':
			result = num1 - num2;
			break;
		case 'mul':
			result = num1 * num2;
			break;
		case 'div':
			if (num2 === 0) {
				alert("Cannot divide by zero.");
				return;
			}
			result = num1 / num2;
			break;
	}
	alert("Result: " + result);
}
