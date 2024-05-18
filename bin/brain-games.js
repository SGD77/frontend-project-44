#!/usr/bin/env node
import readlineSync from "readline-sync";

let name = "";
const greeting = () => {
  name = readlineSync.question(
    "Welcome to the Brain Games!\nMay I have your name? ",
  );
  console.log(`Hello, ${name}!`);
  return name;
};
greeting();
export { name, greeting };
