type AddType = (a: number, b: number) => number;
type PrintType = (a: number) => void;

function add(n1: number, n2: number) {
	return n1 + n2;
}

const printResult = (num: number) => {
	console.log("RESULT as", num);
};

function addAndandle(n1: number, n2: number, cb: PrintType) {
	cb(n1 + n2);
}

printResult(add(1, 2));

addAndandle(1, 33, printResult);

const func: AddType = add;
