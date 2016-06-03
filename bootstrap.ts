/**
 * File that initialize and run the application
 */

var deck = new CardDeck();
deck.createDeck();
console.log('New Project version');
//for (var i = 0; i < 54; i++){
Game.run(deck);
//}