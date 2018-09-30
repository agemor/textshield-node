"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EncodedMessage = /** @class */ (function () {
    function EncodedMessage(salt, lock, message) {
        this.salt = salt;
        this.lock = lock;
        this.message = message;
    }
    EncodedMessage.prototype.toString = function () {
        return this.salt + this.lock + this.message;
    };
    EncodedMessage.parse = function (hex, saltSize, lockSize) {
        if (saltSize === void 0) { saltSize = 16; }
        if (lockSize === void 0) { lockSize = 44; }
        if (hex.length <= saltSize + lockSize) {
            return new EncodedMessage("", "", "");
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
