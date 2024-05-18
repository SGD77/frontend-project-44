import playCalc from "../src/games/playCalc.js";
import play from "../src/play.js";
import greeting from "./brain-games.js";

const name = greeting();
play(playCalc, name, 3);
