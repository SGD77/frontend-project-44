#!/usr/bin/env node
import playProgress from '../src/games/playProgress.js';
import play from '../../../src/play.js';
import greeting from '../../../src/cli.js';

const name = greeting();
play(playProgress, name, 3);
