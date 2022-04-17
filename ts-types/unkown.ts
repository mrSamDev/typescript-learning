let input: unknown;
let data: string;

if (typeof input === "string") data = input;

function generateError(message: string): never {
  throw { message };
}
