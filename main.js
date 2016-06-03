/**
 * File that initialize and run the application
 */
define(["require", "exports", './bootstrap'], function (require, exports, Application) {
    "use strict";
    var deck = new Application.CardDeck();
    deck.createDeck();
    console.log('New Project version');
    //for (var i = 0; i < 54; i++){
    Application.Game.run(deck);
});
//}
