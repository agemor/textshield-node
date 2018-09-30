/**
 * Simple XOR cipher encryption 
 * 
 * @version 1.0.0
 * @author HyunJun Kim
 * @license MIT
 */
export class XorCipher {

  /**
   * Encrypt message
   * @param input 
   * @param key 
   */
  public static encrypt(input: string, key: string): string {
    return Buffer.from(this.encode(input, key), "utf-8").toString("base64")
  }

  /**
   * Apply XOR between input and key
   * @param input 
   * @param key 
   */
  private static encode(input: string, key: string): string {
    let output = "";
    key = this.trimKey(key, input.length);
    for (let i = 0; i < input.length; i++) {
      output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i))
    }
    return output;
  }

  /**
   * Trim key size to fit message length
   * 
   * @param key 
   * @param length 
   */
  private static trimKey(key: string, length: number) {
    if (key.length > length) {
      key = key.substring(0, length);
    } else {
      // Round-copy
      for (let i = key.length; i < length; i++) {
        key += key.charAt(i - key.length);
      }
    }
    return key;
  }
}

export default XorCipher;