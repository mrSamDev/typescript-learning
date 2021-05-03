let input: unknown;
let namse: string;

input = "sijo";
input = 1;

// namse = input; error

if (typeof input === "string") {
	namse = input;
}

const genError = (message: string, code: number) => {
	throw { message, code };
};
