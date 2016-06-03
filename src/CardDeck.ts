import {Card} from "./Card";
import {CardDeckInterface} from "./CardDeckInterface";
import {ColorType} from "./ColorType";

export class CardDeck implements CardDeckInterface {
    private cards:Card[] = [];

    constructor() {

    }

    createDeck() {

        for (var i = 1; i < 14; i++) {
            for (var color = ColorType.clubs; color <= ColorType.spades; color++) {
                this.cards.push(new Card(i, color));
            }
        }
        console.log('Card Deck created');

    }

    shuffleDeck(times:number) {

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

    }

    getCard():Card {

        if (this.cards.length == 0) {
            throw new Error('No Cards In Deck');
        }
        return this.cards.shift();
    }


}
