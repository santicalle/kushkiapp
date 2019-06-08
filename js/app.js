"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClsController_1 = require("./classes/ClsController");
// import { FileSystemService } from './services/FileSystemService';
var controller = new ClsController_1.Controller();
var calculationTypes = document.getElementsByName('radioCalculationType');
var minerals = document.getElementsByName('radioMineral');
document.getElementById('btnI').addEventListener('click', function () {
    onClickValue('I');
});
document.getElementById('btnV').addEventListener('click', function () {
    onClickValue('V');
});
document.getElementById('btnX').addEventListener('click', function () {
    onClickValue('X');
});
document.getElementById('btnL').addEventListener('click', function () {
    onClickValue('L');
});
document.getElementById('btnC').addEventListener('click', function () {
    onClickValue('C');
});
document.getElementById('btnD').addEventListener('click', function () {
    onClickValue('D');
});
document.getElementById('btnM').addEventListener('click', function () {
    onClickValue('M');
});
document.getElementById('btnClear').addEventListener('click', function () {
    onClickClear();
});
document.getElementById('btnGlob').addEventListener('click', function () {
    onClickMixValue('glob');
});
document.getElementById('btnProk').addEventListener('click', function () {
    onClickMixValue('prok');
});
document.getElementById('btnPish').addEventListener('click', function () {
    onClickMixValue('pish');
});
document.getElementById('btnTegj').addEventListener('click', function () {
    onClickMixValue('tegj');
});
document.getElementById('btnClearMix').addEventListener('click', function () {
    onClickClear();
});
var romanKeyboard = document.getElementById('romanKeyboard');
var mixKeyboard = document.getElementById('mixKeyboard');
calculationTypes.forEach(function (input) {
    input.addEventListener('change', function () {
        var input = this;
        onChangeCalculationType(input.value);
    });
});
minerals.forEach(function (inputMineral) {
    inputMineral.addEventListener('change', function () {
        var inputMineral = this;
        onChangeMineral(inputMineral.value);
    });
});
var onChangeCalculationType = function (calculationType) {
    romanKeyboard.style.display = 'none';
    mixKeyboard.style.display = 'none';
    inputMix.style.display = 'none';
    onClickClear();
    switch (calculationType) {
        case 'R':
            romanKeyboard.style.display = 'inline-block';
            break;
        case 'M':
            mixKeyboard.style.display = 'inline-block';
            inputMix.style.display = 'inline-block';
            break;
    }
    controller.setCalculationType(calculationType);
};
var onChangeMineral = function (mineral) {
    controller.setMineral(mineral);
};
var inputValue = document.getElementById('inputValue');
inputValue.value = controller.inputValue;
var inputResult = document.getElementById('inputResult');
inputResult.value = '';
var inputMix = document.getElementById('inputMix');
inputMix.value = '';
var onClickValue = function (romanNumber) {
    var result = controller.calculate(romanNumber);
    if (result.status == 'ok') {
        inputResult.value = result.total;
    }
    inputValue.value = controller.inputValue;
};
var onClickMixValue = function (mixValue) {
    // let result: any = controller.calculate(romanNumber);
    var result = controller.calculateMix(mixValue);
    if (result.status == 'ok') {
        // inputResult.value = result.total;        
        inputResult.value = result.total * controller.returnValuefromMinerals(controller.mineral) + " credits";
        inputMix.value += " " + mixValue;
    }
    inputValue.value = controller.inputValue;
};
var onClickClear = function () {
    controller.clear();
    clearAll();
};
var clearAll = function () {
    inputValue.value = controller.inputValue;
    inputResult.value = '';
    inputMix.value = '';
};
