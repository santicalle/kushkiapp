import { Data } from './ClsData'

let data = new Data();

export class Controller {    

    private _inputValue : string = '';
    public get inputValue() : string {
        return this._inputValue;
    }
    public set inputValue(v : string) {
        this._inputValue = v;
    }    

    private _mineral : string = 'none';
    public get mineral() : string {
        return this._mineral;
    }
    public set mineral(v : string) {
        this._mineral = v;
    }
    
    private _calculationType : string = 'R';
    public get calculationType() : string {
        return this._calculationType;
    }
    public set calculationType(v : string) {
        this._calculationType = v;
    }

    public returnValuefromRomanNumber(valueRomanNumber: string){        
        // console.log(value)

        let result: any = data.romanNumbers.filter(obj => {
            return obj.option === valueRomanNumber
        })

        return result[0].value;
    } 
    
    public returnValuefromMixValue(valueUnit: string){        
        // console.log(value)

        let result: any = data.units.filter(obj => {
            return obj.option === valueUnit
        })

        return result[0].value;
    }

    public returnValuefromMinerals(valueMineral: string){        
        // console.log(value)

        console.log('mineral', valueMineral);
        console.log('mineral controladr', this._mineral);

        let result: any = data.mineralValues.filter(obj => {
            return obj.option === valueMineral
        })

        return result[0].value;
    }

    public calculateMix(mixValue: string){
        return(this.calculate(this.returnValuefromMixValue(mixValue)));
    }

    public calculate(romanNumber:string) {

        let isRepeatError = false;
        let isWrongCalculation = false;        
        let antepenultimateNumber = '';
        let previousNumber = '';

        if(this._inputValue.length > 0)
        {
            previousNumber = this.inputValue.substr(this.inputValue.length - 1, 1);            
        }
        
        if( this._inputValue.length > 1 ){
            antepenultimateNumber = this.inputValue.substr(this._inputValue.length - 2, 1);            
        }
        
        // :: REGLA DE VALIDACIÓN: Tipo 1 a la izquierda de dos de mayor valor

        if (previousNumber != '' && antepenultimateNumber != '' && !isWrongCalculation)
        {
            // console.log('1');

            if(antepenultimateNumber == 'I' && previousNumber != 'I' && romanNumber != 'I')
            {
                isWrongCalculation = true;
            }

            if(antepenultimateNumber == 'X' && (previousNumber == 'L' || previousNumber == 'C' || previousNumber == 'D' || previousNumber == 'M') && (romanNumber == 'L' || romanNumber == 'C' || romanNumber == 'D' || romanNumber == 'M'))
            {
                isWrongCalculation = true;
            }

            if(antepenultimateNumber == 'C' && (previousNumber == 'D' || previousNumber == 'M') && (romanNumber == 'D' || romanNumber == 'M'))
            {
                isWrongCalculation = true;
            }
        }

        // :: FIN REGLA DE VALIDACIÓN

        // :: REGLA DE VALIDACIÓN: Tipo 1 restando y repetida a su izquierda XXX                

        if (previousNumber != '' && antepenultimateNumber != '' && !isWrongCalculation)
        {
            // console.log('2');
            if( previousNumber == 'I' || previousNumber == 'X' || previousNumber == 'C' )
            {
                if( this.isSubtraction(previousNumber, romanNumber) && antepenultimateNumber == previousNumber )
                {
                    isWrongCalculation = true;
                }
            }
        }

        // :: FIN REGLA DE VALIDACIÓN

        // :: REGLA DE VALIDACIÓN: Letra restando y su repetición adyacente al símbolo que resta

        if (antepenultimateNumber != '' && !isWrongCalculation)
        {
            // console.log('3');
            if(this.isSubtraction(antepenultimateNumber, previousNumber) && (antepenultimateNumber == romanNumber))
            {
                isWrongCalculation = true;
            }
        }

        // :: FIN REGLA DE VALIDACIÓN

        // :: REGLA DE VALIDACIÓN: Tipo 5 no pueden estar a la izquierda de uno de mayor valor :::
        if(!isWrongCalculation)
        {
            // console.log('4');
            if((previousNumber == 'V' && romanNumber == 'X') || (previousNumber == 'V' && romanNumber == 'L') || (previousNumber == 'V' && romanNumber == 'C') || (previousNumber == 'V' && romanNumber == 'D') || (previousNumber == 'V' && romanNumber == 'M'))
            {
                isWrongCalculation = true
            }
            
            if((previousNumber == 'L' && romanNumber == 'C') || (previousNumber == 'L' && romanNumber == 'D') || (previousNumber == 'L' && romanNumber == 'M'))
            {
                isWrongCalculation = true
            }

            if((previousNumber == 'D' && romanNumber == 'M'))
            {
                isWrongCalculation = true
            }
        }        
        // ::: FIN REGLA DE VALIDACIÓN

        // ::: REGLA DE VALIDACIÓN: números tipo 5 no se pueden repetir :::        
        
        if(!isWrongCalculation)
        {
            
            // console.log('5');

            for(let i=0; i<this._inputValue.length; i++)
            {
                if(this._inputValue.substr(i,1) == 'V' && romanNumber == 'V')
                {
                    isRepeatError = true;
                }
            }

            if(!isRepeatError){
                for(let i=0; i<this._inputValue.length; i++)
                {
                    if(this._inputValue.substr(i,1) == 'L' && romanNumber == 'L')
                    {
                        isRepeatError = true;
                    }
                }
            }

            if(!isRepeatError){
                for(let i=0; i<this._inputValue.length; i++)
                {
                    if(this._inputValue.substr(i,1) == 'D' && romanNumber == 'D')
                    {
                        isRepeatError = true;
                    }
                }
            }
                        
        }        
        // ::: FIN REGLA DE VALIDACIÓN        

        // ::: REGLA DE VALIDACIÓN: repetir números hasta 3 veces, tipo 5 no se puede repetir :::
        if(previousNumber != '' && !isRepeatError && !isWrongCalculation)
        {            
            // console.log('6');
            if(previousNumber === romanNumber)
            {
                
                if(previousNumber == 'D' || previousNumber == 'L' || previousNumber == 'V')
                {
                    isRepeatError = true;
                }
                else
                {                    
                    /*
                    data.repeat++;
                    if(data.repeat >= 3)
                    {
                        isRepeatError = true;
                    }
                    */

                    if (this._inputValue.length > 2){
                        if((this._inputValue.substr(this._inputValue.length - 3, 1)) == antepenultimateNumber && antepenultimateNumber == previousNumber && previousNumber == romanNumber)
                        {
                            isRepeatError = true;
                        }
                    }
                    
                }

            }
            /*
            else
            {
                data.repeat = 0;
            }
            */
            
        }
        // ::: FIN REGLA DE VALIDACIÓN :::

        // ::: REGLA DE VALIDACIÓN: tipo 5 no pueden estar a la izquierda de uno de mayor valor
        if(previousNumber == 'V' && !isRepeatError && !isWrongCalculation)
        {
            // console.log('7');
            if(romanNumber != 'I')
            {
                isWrongCalculation = true;
            }
        }

        if(previousNumber == 'L')
        {
            if(romanNumber != 'I' && romanNumber != 'V' && romanNumber != 'X')
            {
                isWrongCalculation = true;
            }
        }

        if(previousNumber == 'D')
        {
            if(romanNumber == 'M')
            {
                isWrongCalculation = true;
            }
        }
        // ::: FIN REGLA DE VALIDACIÓN

        // ::: VARIAS REGLAS ADICIONALES
        if(!isRepeatError && !isWrongCalculation)
        {
            if((previousNumber == 'I' && romanNumber == 'L') || (previousNumber == 'I' && romanNumber == 'C') || (previousNumber == 'I' && romanNumber == 'D') || (previousNumber == 'I' && romanNumber == 'M') || previousNumber == 'X' && romanNumber == 'D' || ( previousNumber == 'X' && romanNumber == 'M' ))
            {
                isWrongCalculation = true;
            }
        }
        // ::: FIN VARIAS REGLAS ADICIONALES

        if(isRepeatError)
        {
            console.log('Los números no pueden repetirse')            
            return { status: 'fail', message: 'Los números no pueden repetirse' };
        }
        else if(isWrongCalculation)
        {
            console.log('Error de validación de fórmula')
            return { status: 'fail', message: 'Error de validación de fórmula' };
        }
        else
        {   
            if(previousNumber == 'V' || previousNumber == 'L' || previousNumber == 'D')
            {
                this.addToTotal(this.returnValuefromRomanNumber(romanNumber));
            }
            else
            {
                if((romanNumber == 'V' || romanNumber == 'X') && previousNumber == 'I')
                {
                    this.removeValue(romanNumber, previousNumber);                
                }
                else if((romanNumber == 'L' || romanNumber == 'C') && previousNumber == 'X')
                {
                    this.removeValue(romanNumber, previousNumber);
                }
                else if((romanNumber == 'D' || romanNumber == 'M') && previousNumber == 'C')
                {
                    this.removeValue(romanNumber, previousNumber);
                }
                else
                {
                    this.addToTotal(this.returnValuefromRomanNumber(romanNumber));
                }
            }        

            this.inputValue += romanNumber;
            
            return { status: 'ok', total: data.total };        

        }

    }

    addToTotal = (addValue: number) => {

        data.total += addValue;

    }

    removeToTotal = (removeValue: number ) => {

        data.total -= removeValue;

    }

    removeValue = (romanNumber: string, previousNumber: string) => {        
        this.addToTotal(this.returnValuefromRomanNumber(romanNumber) - this.returnValuefromRomanNumber(previousNumber));
        this.removeToTotal(this.returnValuefromRomanNumber(previousNumber));
    }

    isSubtraction = (firstNumber: string, secondNumber: string) => {        

        if(firstNumber == 'I' && (secondNumber == 'V' || secondNumber == 'X'))
        {
            return true;
        }

        if(firstNumber == 'X' && (secondNumber == 'L' || secondNumber == 'C'))
        {
            return true;
        }

        if(firstNumber == 'C' && (secondNumber == 'D' || secondNumber == 'M'))
        {
            return true;
        }

        return false;

    }

    public clear()
    {
        this._inputValue = '';
        data.total = 0;
        data.repeat = 0;
    }

    public setMineral(mineral: string){
        this._mineral = mineral;
    }

    public setCalculationType(calculationType: string){
        this._calculationType = calculationType;
    }



}