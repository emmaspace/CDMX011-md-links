const mdLinks = require("../lib/index");

describe("mdLinks", () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
});

// https://github.com/babel/babel/issues/8829