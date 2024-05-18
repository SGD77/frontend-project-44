import playGcd from "../src/games/playGcd.js";
import play from "../src/play.js";
import greeting from "./brain-games.js";

const name = greeting();
play(playGcd, name, 3);
