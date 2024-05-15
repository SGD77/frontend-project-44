import playEven from "../src/games/playEven.js";
import play from "../src/play.js";
import askName from "../src/askName.js";

const name = askName();
play(playEven, name, 3);
