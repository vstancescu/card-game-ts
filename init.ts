///<reference path="CardDeckInterface" />
///<reference path="Card" />
///<reference path="ColorType" />
///<reference path="CardDeck" />
///<reference path="Game" />

var deck = new CardDeck();
deck.createDeck();

for (var i = 0; i < 54; i++){
    Game.run(deck);
}
