#!/usr/bin/env node
import playCalc from "../src/games/playCalc.js";
import play from "../src/play.js";
import { name } from "./brain-games.js";

play(playCalc, name, 3);
