import playProgress from "../src/games/playProgress.js";
import play from "../src/play.js";
import greeting from "./brain-games.js";

const name = greeting();
play(playProgress, name, 3);
