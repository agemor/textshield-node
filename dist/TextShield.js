"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Encoder_1 = require("./Encoder");
var DecodeCost;
(function (DecodeCost) {
    DecodeCost[DecodeCost["Zero"] = 0] = "Zero";
    DecodeCost[DecodeCost["Low"] = 0.2] = "Low";
    DecodeCost[DecodeCost["Medium"] = 1] = "Medium";
    DecodeCost[DecodeCost["High"] = 5] = "High";
    DecodeCost[DecodeCost["VeryHigh"] = 25] = "VeryHigh";
    DecodeCost[DecodeCost["Infinite"] = 125] = "Infinite";
})(DecodeCost = exports.DecodeCost || (exports.DecodeCost = {}));
var TextShield = /** @class */ (function () {
    function TextShield() {
    }
    TextShield.encode = function (text, cost) {
        if (cost === void 0) { cost = DecodeCost.Low; }
        if (this.encoder == null) {
            this.encoder = new Encoder_1.default(cost);
        }
        this.encoder.decodeCost = cost;
        return this.encoder.encode(text, true).toString();
    };
    return TextShield;
}());
exports.TextShield = TextShield;
exports.default = TextShield;
