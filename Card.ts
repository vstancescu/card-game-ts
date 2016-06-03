class Card
{

    constructor(number:number, color:ColorType) {
        this.number = number;
        this.color = color;
    }

    public toString():string {

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
    }

    number:number;

    color:ColorType;
}
