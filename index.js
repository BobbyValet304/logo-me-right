const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./utils/generateLogo");
const { Circle, Triangle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      name: "shapeText",
      message: "Enter up to three characters:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color:",
    },
    {
      type: "list",
      name: "shape",
      message: "Select shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color:",
    },
  ])
  .then((response) => {
    console.log(response);

    let shape;

    if (response.shape === "circle") {
      shape = new Circle();
    } else if (response.shape === "triangle") {
      shape = new Triangle();
    } else if (response.shape === "square") {
      shape = new Square();
    }

    shape.setColor(response.shapeColor);
    shape.setTextColor(response.textColor);
    shape.setShapeText(response.shapeText);

    generateLogo(shape);
  });
