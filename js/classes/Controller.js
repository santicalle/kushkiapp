"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller() {
        this._inputNumber = '';
        this._mineral = 'N';
        this._calculationType = 'R';
    }
    Object.defineProperty(Controller.prototype, "inputNumber", {
        get: function () {
            return this._inputNumber;
        },
        set: function (v) {
            this._inputNumber = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "mineral", {
        get: function () {
            return this._mineral;
        },
        set: function (v) {
            this._mineral = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "calculationType", {
        get: function () {
            return this._calculationType;
        },
        set: function (v) {
            this._calculationType = v;
        },
        enumerable: true,
        configurable: true
    });
    Controller.prototype.calculate = function () {
        console.log("Input " + this._inputNumber + " Tipo de C\u00E1lculo " + this._calculationType + " Mineral " + this._mineral);
    };
    return Controller;
}());
exports.Controller = Controller;
