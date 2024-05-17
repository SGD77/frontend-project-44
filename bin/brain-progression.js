import playProgress from "../src/games/playProgress.js";
import play from "../src/play.js";
import askName from "../src/askName.js";

const name = askName();
play(playProgress, name, 3);
