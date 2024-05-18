#!/usr/bin/env node
import playEven from '../src/games/playEven.js';
import play from '../src/play.js';
import { name } from './brain-games.js';

play(playEven, name, 3);
