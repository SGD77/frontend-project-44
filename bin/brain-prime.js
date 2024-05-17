import playPrime from "../src/games/playPrime.js";
import play from "../src/play.js";
import askName from "../src/askName.js";

const name = askName();
play(playPrime, name, 3);
