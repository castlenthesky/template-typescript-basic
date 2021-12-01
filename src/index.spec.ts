import { testFunction } from "./";

describe("Test Function", () => {
	test('Should return "Hello World"', () => {
		expect(testFunction()).toEqual("Hello World");
	});
});
