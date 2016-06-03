import {Card} from "./Card";
export interface CardDeckInterface
{
    createDeck();

    shuffleDeck(times:number);

    getCard():Card;

}
