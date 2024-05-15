import playCalc from "../src/games/playCalc.js";
import play from "../src/play.js";
import askName from "../src/askName.js";

const name = askName();
play(playCalc, name, 3);
