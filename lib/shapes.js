class Shape {
  constructor() {
    this.shapeColor = "";
    this.textColor = "";
    this.shapeText = "";
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  setShapeText(shapeText) {
    this.shapeText = shapeText;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
