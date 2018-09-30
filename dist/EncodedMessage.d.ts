export declare class EncodedMessage {
    salt: string;
    lock: string;
    message: string;
    constructor(salt: string, lock: string, message: string);
    toString(): string;
    static parse(hex: string, saltSize?: number, lockSize?: number): EncodedMessage;
}
export default EncodedMessage;
