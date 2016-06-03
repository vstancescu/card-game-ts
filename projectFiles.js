var Card = (function () {
    function Card(number, color) {
        this.number = number;
        this.color = color;
    }
    Card.prototype.toString = function () {
        var cardExtracted = '';
        switch (this.number) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                cardExtracted = String(this.number + 1);
                break;
            case 10:
                cardExtracted = 'J';
                break;
            case 11:
                cardExtracted = 'Q';
                break;
            case 12:
                cardExtracted = 'K';
                break;
            case 13:
                cardExtracted = 'A';
                break;
        }
        switch (this.color) {
            case ColorType.clubs:
                cardExtracted = cardExtracted + ' clubs';
                break;
            case ColorType.diamonds:
                cardExtracted = cardExtracted + ' diamonds';
                break;
            case ColorType.hearts:
                cardExtracted = cardExtracted + ' hearts';
                break;
            case ColorType.spades:
                cardExtracted = cardExtracted + ' spades';
                break;
        }
        return cardExtracted;
    };
    return Card;
}());
var ColorType;
(function (ColorType) {
    ColorType[ColorType["clubs"] = 0] = "clubs";
    ColorType[ColorType["diamonds"] = 1] = "diamonds";
    ColorType[ColorType["hearts"] = 2] = "hearts";
    ColorType[ColorType["spades"] = 3] = "spades";
})(ColorType || (ColorType = {}));
var CardDeck = (function () {
    function CardDeck() {
        this.cards = [];
    }
    CardDeck.prototype.createDeck = function () {
        for (var i = 1; i < 14; i++) {
            for (var color = ColorType.clubs; color <= ColorType.spades; color++) {
                this.cards.push(new Card(i, color));
            }
        }
        console.log('Card Deck created');
    };
    CardDeck.prototype.shuffleDeck = function (times) {
        var j, x, i, t;
        for (t = 0; t < times; t++) {
            for (i = this.cards.length; i; i -= 1) {
                j = Math.floor(Math.random() * i);
                x = this.cards[i - 1];
                this.cards[i - 1] = this.cards[j];
                this.cards[j] = x;
            }
            console.log('Shuffle no: ', t);
        }
    };
    CardDeck.prototype.getCard = function () {
        if (this.cards.length == 0) {
            throw new Error('No Cards In Deck');
        }
        return this.cards.shift();
    };
    return CardDeck;
}());
var Game = (function () {
    function Game() {
    }
    Game.run = function (deck) {
        deck.shuffleDeck(5);
        var cardEx = deck.getCard();
        if (cardEx.toString() == 'A clubs') {
            console.log('WINNER!!');
        }
        else {
            console.log('LOOSER!!', cardEx.toString());
        }
    };
    return Game;
}());
///<reference path="CardDeckInterface" />
///<reference path="Card" />
///<reference path="ColorType" />
///<reference path="CardDeck" />
///<reference path="Game" />
var deck = new CardDeck();
deck.createDeck();
for (var i = 0; i < 54; i++) {
    Game.run(deck);
}
//# sourceMappingURL=projectFiles.js.map