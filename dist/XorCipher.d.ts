/**
 * Simple XOR cipher encryption
 *
 * @version 1.0.0
 * @author HyunJun Kim
 * @license MIT
 */
export declare class XorCipher {
    /**
     * Encrypt message
     * @param input
     * @param key
     */
    static encrypt(input: string, key: string): string;
    /**
     * Apply XOR between input and key
     * @param input
     * @param key
     */
    private static encode;
    /**
     * Trim key size to fit message length
     *
     * @param key
     * @param length
     */
    private static trimKey;
}
export default XorCipher;
