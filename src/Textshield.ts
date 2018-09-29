export enum DecodeCost {
    Zero = 0,
    Low = 0.2,
    Medium = 1,
    High = 5,
    VeryHigh = 25,
    Infinite = 125
}

export class Textshield {
    public static encode(text: string, cost: DecodeCost = DecodeCost.Low) {

    }
}