import EncodedMessage from "./EncodedMessage";
export declare enum DecodeCost {
    Zero = 0,
    Low = 0.2,
    Medium = 1,
    High = 5,
    VeryHigh = 25,
    Infinite = 125
}
/**
 * Textshield text code generator
 *
 * @version 1.0.0
 * @author HyunJun Kim
 * @license MIT
 */
export declare class Encoder {
    static NORMAL_HPS: number;
    static readonly Base64CharacterTable: string;
    decodeCost: DecodeCost;
    salt: string;
    private sha256;
    constructor(decodeCost?: DecodeCost, salt?: string);
    encode(message: string, randomSalt?: boolean): EncodedMessage;
    private generateKey;
    private generateRandomSalt;
    private reverseString;
    private randomIntegerBetween;
    private hash;
}
export default Encoder;
