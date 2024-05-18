import readlineSync from "readline-sync";
const askName = () => {
  const name = readlineSync.question("Welcome to the Brain Games!\nMay I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
};
export default askName;
