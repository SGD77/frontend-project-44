import playPrime from "../src/games/playPrime.js";
import play from "../src/play.js";
import greeting from "./brain-games.js";

const name = greeting();
play(playPrime, name, 3);
