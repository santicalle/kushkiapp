import { Controller } from './classes/ClsController';

// import { FileSystemService } from './services/FileSystemService';

let controller = new Controller();
let calculationTypes = document.getElementsByName('radioCalculationType');
let minerals = document.getElementsByName('radioMineral');

document.getElementById('btnI')!.addEventListener('click', function(){
    onClickValue('I');
});
document.getElementById('btnV')!.addEventListener('click', function(){
    onClickValue('V');
});
document.getElementById('btnX')!.addEventListener('click', function(){
    onClickValue('X');
});
document.getElementById('btnL')!.addEventListener('click', function(){
    onClickValue('L');
});
document.getElementById('btnC')!.addEventListener('click', function(){
    onClickValue('C');
});
document.getElementById('btnD')!.addEventListener('click', function(){
    onClickValue('D');
});
document.getElementById('btnM')!.addEventListener('click', function(){
    onClickValue('M');
});
document.getElementById('btnClear')!.addEventListener('click', function(){
    onClickClear();
});

document.getElementById('btnGlob')!.addEventListener('click', function(){
    onClickMixValue('glob');
});
document.getElementById('btnProk')!.addEventListener('click', function(){
    onClickMixValue('prok');    
});
document.getElementById('btnPish')!.addEventListener('click', function(){
    onClickMixValue('pish');    
});
document.getElementById('btnTegj')!.addEventListener('click', function(){
    onClickMixValue('tegj');    
});
document.getElementById('btnClearMix')!.addEventListener('click', function(){
    onClickClear();
});

let romanKeyboard: HTMLElement = document.getElementById('romanKeyboard')!;
let mixKeyboard: HTMLElement = document.getElementById('mixKeyboard')!;

calculationTypes.forEach(function (input) {
    input.addEventListener('change', function() {

        let input : HTMLInputElement = <HTMLInputElement>this;        
        
        onChangeCalculationType(input.value);

    })
})

minerals.forEach(function (inputMineral) {
    inputMineral.addEventListener('change', function() {

        let inputMineral : HTMLInputElement = <HTMLInputElement>this;        
        
        onChangeMineral(inputMineral.value);

    })
})


let onChangeCalculationType = ( calculationType: string ) => {
    
    romanKeyboard.style.display = 'none';
    mixKeyboard.style.display = 'none';
    inputMix.style.display = 'none';

    onClickClear();

    switch(calculationType)
    {
        case 'R':
            romanKeyboard.style.display = 'inline-block';
            break;

        case 'M':
            mixKeyboard.style.display = 'inline-block';            
            inputMix.style.display = 'inline-block';
            break;
    }

    controller.setCalculationType(calculationType);
}

let onChangeMineral = ( mineral : string ) => {    
    controller.setMineral(mineral);
}

let inputValue = <HTMLInputElement> document.getElementById('inputValue')!;
inputValue.value = controller.inputValue;

let inputResult = <HTMLInputElement> document.getElementById('inputResult')!;
inputResult.value = '';

let inputMix = <HTMLInputElement> document.getElementById('inputMix')!;
inputMix.value = '';

let onClickValue = (romanNumber: string) => {
    let result: any = controller.calculate(romanNumber);    

    if(result.status == 'ok')
    {
        inputResult.value = result.total;
    }

    inputValue.value = controller.inputValue;
}

let onClickMixValue = (mixValue: string) => {
    // let result: any = controller.calculate(romanNumber);
    let result: any = controller.calculateMix(mixValue);    

    if(result.status == 'ok')
    {
        // inputResult.value = result.total;        

        inputResult.value = `${result.total * controller.returnValuefromMinerals(controller.mineral)} credits`;

        inputMix.value += ` ${mixValue}`;
    }

    inputValue.value = controller.inputValue;
}

let onClickClear = () => {
    controller.clear();
    clearAll();
}

let clearAll = () => {
    inputValue.value = controller.inputValue;
    inputResult.value = '';    
    inputMix.value = '';    
}