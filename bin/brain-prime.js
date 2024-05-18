#!/usr/bin/env node
import playPrime from '../src/games/playPrime.js';
import play from '../src/play.js';
import { name } from './brain-games.js';

play(playPrime, name, 3);
