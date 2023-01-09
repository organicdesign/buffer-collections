import { equals } from "uint8arrays/equals";
import { BufferMap } from "../src/index.js";
import dataSet from "./test-data.js";

describe("assigning", () => {
	it("instanciates a map from an iterable", () => {
		const bm = new BufferMap(dataSet);

		for (const [key, value] of dataSet) {
			expect(bm.get(new Uint8Array(key))).toBe(value);
		}
	});

	it("sets and gets values from a map", () => {
		const bm = new BufferMap();

		for (const [key, value] of dataSet) {
			bm.set(key, value);
		}

		for (const [key, value] of dataSet) {
			expect(bm.get(new Uint8Array(key))).toBe(value);
		}
	});

	it("has returns true for values in the map", () => {
		const bm = new BufferMap(dataSet);

		for (const [key] of dataSet) {
			expect(bm.has(new Uint8Array(key))).toBe(true);
		}
	});

	it("clear removes all values in the map", () => {
		const bm = new BufferMap(dataSet);

		bm.clear();

		for (const [key] of dataSet) {
			expect(bm.has(new Uint8Array(key))).toBe(false);
		}
	});

	it("delete removes individual values from the map", () => {
		const bm = new BufferMap(dataSet);

		for (const [key] of dataSet) {
			bm.delete(key);
			expect(bm.has(new Uint8Array(key))).toBe(false);
		}
	});
});

describe("iteration", () => {
	it("keys returns the map keys", () => {
		const bm = new BufferMap(dataSet);
		const keys = Array.from(bm.keys());

		for (const [key] of dataSet) {
			const o = keys.find(k => equals(k, key));

			expect(o).toBeTruthy();
		}
	});

	it("values returns the map values", () => {
		const bm = new BufferMap(dataSet);
		const values = Array.from(bm.values());

		for (const [_, value] of dataSet) {
			const o = values.find(v => v === value);

			expect(o).toBeTruthy();
		}
	});

	it("entires returns the map keys and values", () => {
		const bm = new BufferMap(dataSet);
		const entries = Array.from(bm.entries());

		for (const [key, value] of dataSet) {
			const o = entries.find(([k, v]) => v === value && equals(k, key));

			expect(o).toBeTruthy();
		}
	});

	it("iterates through the map keys and values", () => {
		const bm = new BufferMap(dataSet);
		const entries = Array.from(bm);

		for (const [key, value] of dataSet) {
			const o = entries.find(([k, v]) => v === value && equals(k, key));

			expect(o).toBeTruthy();
		}
	});

	it("runs a foreach function through the map keys and values", () => {
		const bm = new BufferMap(dataSet);


		bm.forEach((value, key) => {
			const o = dataSet.find(([k, v]) => v === value && equals(k, key));

			expect(o).toBeTruthy();
		});
	});
});

describe("properties", () => {
	it("has the same toStringTag as map", () => {
		const bm = new BufferMap();
		const m = new Map();

		expect(m[Symbol.toStringTag]).toStrictEqual(bm[Symbol.toStringTag]);
	});

	it("returns the right size", () => {
		let bm = new BufferMap();

		expect(bm.size).toBe(0);

		bm = new BufferMap(dataSet);

		expect(bm.size).toBe(dataSet.length);
	});
});
