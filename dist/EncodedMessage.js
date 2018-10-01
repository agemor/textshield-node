"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TextShield Encoded Message Format
 *
 * Stores basic properties of encoded TextShield text
 * It also performs basic parsing to acquire
 * three components(salt, lock and payload) from raw HTML string.
 */
var EncodedMessage = /** @class */ (function () {
    function EncodedMessage(salt, lock, message) {
        this.salt = salt;
        this.lock = lock;
        this.message = message;
    }
    EncodedMessage.prototype.toString = function () {
        return this.salt + this.lock + this.message;
    };
    /**
     * Extract three component (salt, lock, and payload) from given string
     *
     * @param hex
     * @param saltSize
     * @param lockSize
     */
    EncodedMessage.parse = function (hex, saltSize, lockSize) {
        if (saltSize === void 0) { saltSize = 16; }
        if (lockSize === void 0) { lockSize = 44; }
        if (hex.length <= saltSize + lockSize) {
            return null;
        }
        var salt = hex.slice(0, saltSize);
        var lock = hex.slice(saltSize, saltSize + lockSize);
        var message = hex.slice(saltSize + lockSize);
        return new EncodedMessage(salt, lock, message);
    };
    return EncodedMessage;
}());
exports.EncodedMessage = EncodedMessage;
exports.default = EncodedMessage;
