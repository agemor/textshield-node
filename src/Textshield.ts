import Encoder from "./Encoder";

export enum DecodeCost {
  Zero = 0,
  Low = 0.2,
  Medium = 1,
  High = 5,
  VeryHigh = 25,
  Infinite = 125
}

export class TextShield {

  private static encoder: Encoder;

  public static encode(text: string, cost: DecodeCost = DecodeCost.Low) {
    if (this.encoder == null) {
      this.encoder = new Encoder(cost);
    }
    this.encoder.decodeCost = cost;
    return this.encoder.encode(text, true).toString();
  }
}

export default TextShield