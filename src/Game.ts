import {CardDeck} from "./CardDeck";
import {Logger} from "./Logger/Logger";

export class Game
{

    constructor(private logger:Logger) {
    }

    public run(deck:CardDeck){

        deck.shuffleDeck(5);

        var cardEx = deck.getCard();

        if (cardEx.toString() == 'A clubs') {
            this.logger.log('WINNER!!');
        } else {
            this.logger.log('LOOSER!!', cardEx.toString());
        }

    }
}