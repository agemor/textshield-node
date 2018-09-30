import crypto, { Hash } from "crypto";
import XorCipher from "./XorCipher";
import EncodedMessage from "./EncodedMessage";

export enum DecodeCost {
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
export class Encoder {

  public static NORMAL_HPS = 200;
  public static readonly Base64CharacterTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  public decodeCost: DecodeCost;
  public salt: string;

  private sha256: Hash;

  constructor(decodeCost = DecodeCost.Low, salt?: string) {
    this.decodeCost = decodeCost;
    this.salt = salt ? salt : this.generateRandomSalt();

    this.sha256 = crypto.createHash("sha256");
  }

  public encode(message: string, randomSalt = false): EncodedMessage {
    // Renew salt
    if (randomSalt) this.generateRandomSalt();

    let key: string = this.salt + this.generateKey();
    let rkey: string = this.reverseString(key);
    let lock = this.hash(key);
    let payload = XorCipher.encrypt(message, rkey);

    return new EncodedMessage(this.salt, lock, payload);
  }

  private generateKey(): number {
    let haystack = this.decodeCost * Encoder.NORMAL_HPS;
    let needle = this.randomIntegerBetween(Math.sqrt(haystack), haystack);
    return needle;
  }

  private generateRandomSalt(length = 16): string {
    let output = "";
    for (let i = 0; i < length; i++)
      output += Encoder.Base64CharacterTable.charAt(this.randomIntegerBetween(0, 64));
    return output;
  }

  private reverseString(string: string): string {
    return string
      .split("")
      .reverse()
      .join("");
  }

  private randomIntegerBetween(start: number, end: number): number {
    return Math.floor(Math.random() * (end + 1 - start) + start);
  }

  private hash(message: string) {
    this.sha256.update(message);
    return this.sha256.digest("base64");
  }
}

export default Encoder;
