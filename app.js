#! /usr/bin?env node
import add from "./index.js";
console.log(add(9, 6));
import { userName } from "./index.js";
console.log(userName);
import { favColor } from "./index.js";
console.log(favColor);
import { obj } from "./index.js";
console.log(obj);
console.log(person);
// STEP 03 PART (C) import inquirer 
import inquirer from "inquirer";
let answer = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter your name"
});
console.log(`Hello ${answer.name}`);
// STEP 04 (D) chalk
import chalk from "chalk";
let person = await inquirer.prompt({
    name: "name",
    type: "input",
    message: chalk.red("Enter your name")
});
console.log(`Hello ${person.name}`);
