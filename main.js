/**
 * File that initialize and run the application
 */
define(["require", "exports", './bootstrap', "./src/Logger/LoggerFactory"], function (require, exports, Application, LoggerFactory_1) {
    "use strict";
    var logger = LoggerFactory_1.LoggerFactory.create();
    var deck = new Application.CardDeck(logger);
    var game = new Application.Game(logger);
    deck.createDeck();
    logger.log('New Project version');
    //for (var i = 0; i < 54; i++){
    game.run(deck);
});
//}
