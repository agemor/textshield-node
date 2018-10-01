import EncodedMessage from "./EncodedMessage";
/**
 * Pre-defined decode cost for user convinience
 * As browers normally terminate JavaScript runtime that exceeds over 10 secs,
 * decode cost of 125 is high enough to stop all executions.
 */
export declare enum DecodeCost {
    Zero = 0,
    Low = 0.2,
    Medium = 1,
    High = 5,
    VeryHigh = 25,
    Infinite = 125
}
/**
 * TextShield Text Encoder
 *
 * Generates random seed and natural number N based on given decode cost.
 * By these values, lock = H(seed + N) and payload = E(message, reverse(seed + N))
 * is calculated.
 *
 * @version 1.0.0
 * @author HyunJun Kim
 * @license MIT
 */
export declare class Encoder {
    static NORMAL_HPS: number;
    static readonly Base64CharacterTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
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
