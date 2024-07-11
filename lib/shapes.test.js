const { Circle, Square, Triangle } = require("./shapes");

describe("Triangle", () => {
  it("should render a triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    const expected = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
    expect(shape.render()).toEqual(expected);
  });
});

describe("Square", () => {
  it("should render a square", () => {
    const shape = new Square();
    shape.setColor("blue");
    const expected = `<rect x="73" y="40" width="160" height="160" fill="blue" />`;
    expect(shape.render()).toEqual(expected);
  });
});

describe("Circle", () => {
  it("should render a circle", () => {
    const shape = new Circle();
    shape.setColor("blue");
    const expected = `<circle cx="150" cy="100" r="80" fill="blue" />`;
    expect(shape.render()).toEqual(expected);
  });
});
