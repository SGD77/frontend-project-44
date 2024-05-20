#!/usr/bin/env node
import playEven from '../src/games/playEven.js';
import play from '../src/play.js';
import greeting from '../src/cli.js';

const name = greeting();
play(playEven, name, 3);
