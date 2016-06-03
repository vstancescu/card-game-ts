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
    };
    CardDeck.prototype.getCard = function () {
        return undefined;
    };
    return CardDeck;
}());
