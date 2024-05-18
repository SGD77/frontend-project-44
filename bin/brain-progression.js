#!/usr/bin/env node
import playProgress from "../src/games/playProgress.js";
import play from "../src/play.js";
import { name } from "./brain-games.js";

play(playProgress, name, 3);
