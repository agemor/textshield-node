"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var XorCipher_1 = require("./XorCipher");
var EncodedMessage_1 = require("./EncodedMessage");
var DecodeCost;
(function (DecodeCost) {
    DecodeCost[DecodeCost["Zero"] = 0] = "Zero";
    DecodeCost[DecodeCost["Low"] = 0.2] = "Low";
    DecodeCost[DecodeCost["Medium"] = 1] = "Medium";
    DecodeCost[DecodeCost["High"] = 5] = "High";
    DecodeCost[DecodeCost["VeryHigh"] = 25] = "VeryHigh";
    DecodeCost[DecodeCost["Infinite"] = 125] = "Infinite";
})(DecodeCost = exports.DecodeCost || (exports.DecodeCost = {}));
/**
 * Textshield text code generator
 *
 * @version 1.0.0
 * @author HyunJun Kim
 * @license MIT
 */
var Encoder = /** @class */ (function () {
    function Encoder(decodeCost, salt) {
        if (decodeCost === void 0) { decodeCost = DecodeCost.Low; }
        this.decodeCost = decodeCost;
        this.salt = salt ? salt : this.generateRandomSalt();
        this.sha256 = crypto.createHash("sha256");
    }
    Encoder.prototype.encode = function (message, randomSalt) {
        if (randomSalt === void 0) { randomSalt = false; }
        // Renew salt
        if (randomSalt)
            this.generateRandomSalt();
        var key = this.salt + this.generateKey();
        var rkey = this.reverseString(key);
        var lock = this.hash(key);
        var payload = XorCipher_1.default.encrypt(message, rkey);
        return new EncodedMessage_1.default(this.salt, lock, payload);
    };
    Encoder.prototype.generateKey = function () {
        var haystack = this.decodeCost * Encoder.NORMAL_HPS;
        var needle = this.randomIntegerBetween(Math.sqrt(haystack), haystack);
        return needle;
    };
    Encoder.prototype.generateRandomSalt = function (length) {
        if (length === void 0) { length = 16; }
        var output = "";
        for (var i = 0; i < length; i++)
            output += Encoder.Base64CharacterTable.charAt(this.randomIntegerBetween(0, 64));
        return output;
    };
    Encoder.prototype.reverseString = function (string) {
        return string
            .split("")
            .reverse()
            .join("");
    };
    Encoder.prototype.randomIntegerBetween = function (start, end) {
        return Math.floor(Math.random() * (end + 1 - start) + start);
    };
    Encoder.prototype.hash = function (message) {
        this.sha256.update(message);
        return this.sha256.digest("base64");
    };
    Encoder.NORMAL_HPS = 200;
    Encoder.Base64CharacterTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return Encoder;
}());
exports.Encoder = Encoder;
exports.default = Encoder;
