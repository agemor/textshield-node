/**
 * TextShield Encoded Message Format
 *
 * Stores basic properties of encoded TextShield text
 * It also performs basic parsing to acquire
 * three components(salt, lock and payload) from raw HTML string.
 */
export declare class EncodedMessage {
    salt: string;
    lock: string;
    message: string;
    constructor(salt: string, lock: string, message: string);
    toString(): string;
    /**
     * Extract three component (salt, lock, and payload) from given string
     *
     * @param hex
     * @param saltSize
     * @param lockSize
     */
    static parse(hex: string, saltSize?: number, lockSize?: number): EncodedMessage;
}
export default EncodedMessage;
