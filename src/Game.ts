import {CardDeck} from "./CardDeck";

export class Game
{
    static run(deck:CardDeck){

        deck.shuffleDeck(5);

        var cardEx = deck.getCard();

        if (cardEx.toString() == 'A clubs') {
            console.log('WINNER!!');
        } else {
            console.log('LOOSER!!', cardEx.toString());
        }

    }
}