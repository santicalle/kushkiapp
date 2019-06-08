"use strict";
// import {fs} from 'fs';
Object.defineProperty(exports, "__esModule", { value: true });
var FileSystemService = /** @class */ (function () {
    function FileSystemService() {
    }
    FileSystemService.prototype.getData = function () {
        var rawdata = fs.readFileSync('cherchertech.json');
        var author = JSON.parse(rawdata);
        console.log(author);
    };
    return FileSystemService;
}());
exports.FileSystemService = FileSystemService;
