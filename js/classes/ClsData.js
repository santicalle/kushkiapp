"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Data = /** @class */ (function () {
    function Data() {
        this._mineralValues = [
            { option: "gold", value: 14450 },
            { option: "iron", value: 195.5 },
            { option: "silver", value: 17 },
            { option: "none", value: 1 }
        ];
        this._romanNumbers = [
            { option: "I", value: 1 },
            { option: "V", value: 5 },
            { option: "X", value: 10 },
            { option: "L", value: 50 },
            { option: "C", value: 100 },
            { option: "D", value: 500 },
            { option: "M", value: 1000 },
        ];
        this._units = [
            { option: "glob", value: "I" },
            { option: "prok", value: "V" },
            { option: "pish", value: "X" },
            { option: "tegj", value: "L" }
        ];
        this._total = 0;
        // private _previousRomanNumber : string = '';
        // public get previousNumber() : string {
        //     return this._previousRomanNumber;
        // }
        // public set previousNumber(v : string) {
        //     this._previousRomanNumber = v;
        // }
        this._repeat = 0;
    }
    Object.defineProperty(Data.prototype, "mineralValues", {
        get: function () {
            return this._mineralValues;
        },
        set: function (v) {
            this._mineralValues = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "romanNumbers", {
        get: function () {
            return this._romanNumbers;
        },
        set: function (v) {
            this._romanNumbers = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "units", {
        get: function () {
            return this._units;
        },
        set: function (v) {
            this._units = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "total", {
        get: function () {
            return this._total;
        },
        set: function (v) {
            this._total = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "repeat", {
        get: function () {
            return this._repeat;
        },
        set: function (v) {
            this._repeat = v;
        },
        enumerable: true,
        configurable: true
    });
    return Data;
}());
exports.Data = Data;
