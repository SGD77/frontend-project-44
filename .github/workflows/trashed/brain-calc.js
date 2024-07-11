#!/usr/bin/env node
import playCalc from '../src/games/playCalc.js';
import play from '../../../src/_play.js';
import greeting from '../../../src/cli.js';

const name = greeting();
play(playCalc, name, 3);
