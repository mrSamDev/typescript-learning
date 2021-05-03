function add(n1: number, n2: number, sResult: boolean) {
	if (sResult) console.log({ n1, n2, result: n1 + n2 });
	return n1 + n2;
}

const n1 = 2;
const n2 = 5;

const pResult = true;

const result = add(n1, n2, pResult);
console.log("result: ", result);
