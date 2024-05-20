#!usr/bin/env node
import inquirer from "inquirer";
const wordCounter = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentece for count your words",
    }
]);
const words = wordCounter.Sentence.trim().split(" ");
console.log(words);
console.log(`Your total words in this sentence is ${words.length}`);
// - x-x-x-x-x-x-x--x-x--x
