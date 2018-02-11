function add(a, b) {
	try {
		if (validate(a, b)) {
			displayResult(a + b);
		} else {
			displayResult("Invalid Inputs");
		}
	} catch (err) {
		alert("Invalid Inputs");
	}
}

function validate(a, b) {
	return a && b && typeof a === "number" && typeof b === "number";
}

function displayResult(result) {
	document.getElementById("result").innerHTML = result;
}