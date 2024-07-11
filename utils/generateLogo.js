const fs = require("fs");
const generateLogo = (shape) => {
  console.log("Generating logo...");
  let text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.shapeText}</text>`;
  let logo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}  ${text}</svg>`;

  fs.writeFile("logo.svg", logo, (err) => {});

  console.log("Generated logo.svg");
};

module.exports = generateLogo;
