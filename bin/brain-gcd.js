import playGcd from "../src/games/playGcd.js";
import play from "../src/play.js";
import askName from "../src/askName.js";

const name = askName();
play(playGcd, name, 3);
