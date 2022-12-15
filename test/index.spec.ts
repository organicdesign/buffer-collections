import BufferMap from "../src/index.js";
import dataSet from "./test-data.js";

describe("type", () => {
	it("has the same toStringTag as map", () => {
		const bm = new BufferMap();
		const m = new Map();

		expect(m[Symbol.toStringTag]).toStrictEqual(bm[Symbol.toStringTag]);
	});
});
