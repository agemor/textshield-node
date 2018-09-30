"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple XOR cipher encryption
 *
 * @version 1.0.0
 * @author HyunJun Kim
 * @license MIT
 */
var XorCipher = /** @class */ (function () {
    function XorCipher() {
    }
    /**
     * Encrypt message
     * @param input
     * @param key
     */
    XorCipher.encrypt = function (input, key) {
        return Buffer.from(this.encode(input, key), "utf-8").toString("base64");
    };
    /**
     * Apply XOR between input and key
     * @param input
     * @param key
     */
    XorCipher.encode = function (input, key) {
        var output = "";
        key = this.trimKey(key, input.length);
        for (var i = 0; i < input.length; i++) {
            output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i));
        }
        return output;
    };
    /**
     * Trim key size to fit message length
     *
     * @param key
     * @param length
     */
    XorCipher.trimKey = function (key, length) {
        if (key.length > length) {
            key = key.substring(0, length);
        }
        else {
            // Round-copy
            for (var i = key.length; i < length; i++) {
                key += key.charAt(i - key.length);
            }
        }
        return key;
    };
    return XorCipher;
}());
exports.XorCipher = XorCipher;
exports.default = XorCipher;
