const gen = (...args: number[]) => {
	return [new Uint8Array(args), `[${args.join(", ")}]`];
};

export default [
	gen(),
	gen(0),
	gen(1),
	gen(0, 0),
	gen(0, 0, 0),
	gen(0, 1, 2),
	gen(255),
	gen(255, 255),
	gen(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
] as [Uint8Array, string][];
