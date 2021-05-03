type Combinable = number | string;
type ResultType = "as-number" | "as-string";

function combine(n1: Combinable, n2: Combinable, resultConversion: ResultType) {
	let result;
	if ((typeof n1 === "number" && typeof n2 === "number") || resultConversion === "as-number") result = +n1 + +n2;
	else result = n1 + "" + n2 + "";
}

combine(1, 2, "as-number");
combine("sdsd", 2, "as-string");
