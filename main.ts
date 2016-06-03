/**
 * File that initialize and run the application
 */

import * as Application from './bootstrap';
import {LoggerFactory} from "./src/Logger/LoggerFactory";

var logger = LoggerFactory.create();
var deck = new Application.CardDeck(logger);
var game = new Application.Game(logger);


deck.createDeck();
logger.log('New Project version');
//for (var i = 0; i < 54; i++){
game.run(deck);
//}
